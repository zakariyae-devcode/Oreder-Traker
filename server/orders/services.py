import re
from urllib.parse import quote
from .models import Status

DEFAULT_COUNTRY_CODE = "212"


def normalize_phone(phone: str) -> str:
    digits = re.sub(r"\D", "", phone)

    if digits.startswith("00"):
        digits = digits[2:]

    if digits.startswith("0"):
        digits = DEFAULT_COUNTRY_CODE + digits[1:]

    return digits


def build_whatsapp_url(order) -> str:
    phone = normalize_phone(order.customer.Phone)

    if not phone or (phone.startswith("212") and len(phone) != 12):
        raise ValueError("رقم هاتف الزبون غير صالح")

    items = order.items.select_related("product")

    lines = "\n".join(f"- {i.product} × {i.quantity}" for i in items)

    total = sum(i.quantity * i.sellingPrice for i in items) + order.shipping_cost

    message = (
        f"مرحباً {order.customer.FullName} 👋\n"
        f"نؤكد طلبك رقم #{str(order.id)[:8].upper()}:\n"
        f"{lines}\n"
        f"الشحن: {order.shipping_cost} درهم\n"
        f"المجموع: {total} درهم\n"
        f"هل تؤكد الطلب؟"
    )

    return f"https://wa.me/{phone}?text={quote(message)}"


ALLOWED_TRANSITIONS = {
    Status.NEW: [Status.CONFIRMED],
    Status.CONFIRMED: [Status.SHIPPED],
    Status.SHIPPED: [Status.DELIVERED, Status.RETURNED],
    Status.DELIVERED: [Status.RETURNED],
    Status.RETURNED: [],
    Status.CANCELLED: [],
}

def change_status(order, new_status):
    allowed = ALLOWED_TRANSITIONS.get(order.status, [])

    if new_status not in allowed:
        raise ValueError(
            f"لا يمكن الانتقال من '{order.status}' إلى '{new_status}'"
        )

    if new_status == Status.CONFIRMED and not order.items.exists():
        raise ValueError("لا يمكن تأكيد طلب بدون منتجات")

    order.status = new_status
    order.save(update_fields=["status", "update_at"])
    return order