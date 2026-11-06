from decimal import Decimal

from django.db.models import Count, DecimalField, ExpressionWrapper, F, Sum

from orderitems.models import OrderItem
from orders.models import Order, Status


def _line_total(field):
    return ExpressionWrapper(
        F("quantity") * F(field),
        output_field=DecimalField(max_digits=14, decimal_places=2),
    )


def get_summary(user):
    orders = Order.objects.filter(customer__user=user)

    # عدد الطلبات حسب الحالة
    rows = orders.values("status").annotate(n=Count("id"))
    counts = {row["status"]: row["n"] for row in rows}

    total_orders = sum(counts.values())
    delivered = counts.get(Status.DELIVERED, 0)
    returned = counts.get(Status.RETURNED, 0)

    # نسبة المرتجعات
    closed = delivered + returned
    return_rate = round(returned / closed * 100, 2) if closed else 0

    # الإيراد والتكلفة للطلبات المسلّمة
    items = OrderItem.objects.filter(
        order__customer__user=user,
        order__status=Status.DELIVERED,
    )
    revenue = items.aggregate(t=Sum(_line_total("sellingPrice")))["t"] or Decimal("0")
    cost = items.aggregate(t=Sum(_line_total("purchasePrice")))["t"] or Decimal("0")

    # الشحن للمسلّمة والمرتجعة
    shipping = (
        orders.filter(status__in=[Status.DELIVERED, Status.RETURNED])
        .aggregate(t=Sum("shipping_cost"))["t"]
        or Decimal("0")
    )

    net_profit = revenue - cost - shipping

    return {
        "total_orders": total_orders,
        "delivered": delivered,
        "returned": returned,
        "return_rate": return_rate,
        "revenue": float(revenue),
        "net_profit": float(net_profit),
    }