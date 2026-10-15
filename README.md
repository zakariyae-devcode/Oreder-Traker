# Orders Tracker | متتبع الطلبات

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Django REST](https://img.shields.io/badge/Django_REST-092E20?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-In_Development-yellow?style=for-the-badge)

🇬🇧 [English](#english) | 🇲🇦 [العربية](#العربية)

---

## English

A web application designed for social-commerce sellers (Instagram, Facebook, TikTok, WhatsApp) to seamlessly track their orders, send quick confirmation messages via WhatsApp, and analyze real net profit after returns.

> **Status:** 🚧 In active development

### 🎯 Key Features

- **Merchant Accounts:** Isolated authentication and personal dashboard per seller.
- **Order Management:** Create, update, and categorize orders effortlessly.
- **Order Lifecycle:** Track statuses across `New`, `Confirmed`, `Shipped`, `Delivered`, and `Returned`.
- **WhatsApp Integration:** Instant WhatsApp button pre-filled with order confirmation templates.
- **Financial Analytics:** Clear metrics showing total orders, return rates, and actual net profit.

### 🛠️ Tech Stack

- **Backend:** Django REST Framework
- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **Database:** SQLite (Development) | PostgreSQL (Production)
- **Package Manager:** [uv](https://docs.astral.sh/uv/)

### ⚙️ Environment Variables

Create `.env` files in both backend and frontend directories:

#### Backend (`server/.env`)

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
```

#### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
```

---

## العربية

تطبيق ويب مصمم لبائعي التجارة الإلكترونية عبر منصات التواصل الاجتماعي (إنستغرام، فيسبوك، تيك توك، واتساب)، يُمكّنهم من تتبع طلباتهم بسهولة، تأكيدها عبر واتساب بضغطة زر، وحساب صافي الأرباح الحقيقية بعد خصم المرتجعات.

> **الحالة:** 🚧 قيد التطوير النشط

### 🎯 الميزات الرئيسية

- **حسابات التُّجار:** تسجيل دخول وتوثيق مستقل لكل بائع.
- **إدارة الطلبات:** إنشاء الطلبات، تعديلها، وتنظيمها بسهولة.
- **دورة حياة الطلب:** تتبع الحالة (`جديد`، `مؤكَّد`، `مشحون`، `مُسلَّم`، `مرتجع`).
- **تكامل مع WhatsApp:** زر مباشر يفتح واتساب مع رسالة تأكيد جاهزة ومخصصة.
- **تحليلات مالية:** لوحة تحكم تعرض إجمالي الطلبات، نسبة المرتجعات، وصافي الربح المتبقي.

### 🛠️ التقنيات المستخدمة

- **الخلفية (Backend):** Django REST Framework
- **الواجهة (Frontend):** Next.js, TypeScript, Tailwind CSS
- **قواعد البيانات:** SQLite (للتطوير) | PostgreSQL (للإنتاج)
- **إدارة حزم Python:** [uv](https://docs.astral.sh/uv/)

### ⚙️ المتغيرات البيئية (Environment Variables)

قم بإنشاء ملفات `.env` في كل من مجلد الخلفية والواجهة:

#### الخلفية (`server/.env`)

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
```

#### الواجهة (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
```