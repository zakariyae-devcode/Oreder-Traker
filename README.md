# Orders Tracker | متتبع الطلبات

🇬🇧 [English](#english) | 🇲🇦 [العربية](#العربية)

---

## English

A web app for social-commerce sellers (Instagram, Facebook, TikTok, WhatsApp) to track their orders, confirm them on WhatsApp, and see their real profit after returns.

> **Status:** 🚧 In development

### Features

- Personal account for each seller
- Add and manage orders
- Order status: New, Confirmed, Shipped, Delivered, Returned
- WhatsApp button with a ready confirmation message
- Dashboard: total orders, return rate, net profit

### Tech stack

- **Backend:** Django REST Framework
- **Frontend:** Next.js
- **Database:** SQLite (development), PostgreSQL (production)
- **Python tooling:** [uv](https://docs.astral.sh/uv/)

### Run locally

```bash
# Backend
cd server
uv sync
uv run python manage.py migrate
uv run python manage.py runserver

# Frontend
cd client
npm install
npm run dev
```

### Author

Zakariyae - [GitHub](https://github.com/zakariyae-devcode)

---

## العربية

تطبيق ويب لبائعي التجارة الإلكترونية على السوشيال ميديا (إنستغرام، فيسبوك، تيك توك، واتساب)، يساعدهم على تتبع طلباتهم وتأكيدها عبر واتساب ومعرفة أرباحهم الحقيقية بعد المرتجعات.

> **الحالة:** 🚧 قيد التطوير

### الميزات

- حساب خاص لكل بائع
- إضافة الطلبات وإدارتها
- حالات الطلب: جديد، مؤكَّد، مشحون، مُسلَّم، مرتجع
- زر واتساب برسالة تأكيد جاهزة
- لوحة تحكم: عدد الطلبات، نسبة المرتجعات، صافي الربح

### التقنيات

- **الخلفية:** Django REST Framework
- **الواجهة:** Next.js
- **قاعدة البيانات:** SQLite (للتطوير)، PostgreSQL (للنشر)
- **أداة Python:** [uv](https://docs.astral.sh/uv/)

### التشغيل محلياً

```bash
# الخلفية
cd server
uv sync
uv run python manage.py migrate
uv run python manage.py runserver

# الواجهة
cd client
npm install
npm run dev
```

### المطور

Zakariyae - [GitHub](https://github.com/zakariyae-devcode)