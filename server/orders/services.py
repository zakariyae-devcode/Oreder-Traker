import re
from urllib.parse import quote

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