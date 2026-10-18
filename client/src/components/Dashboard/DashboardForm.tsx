import React from 'react';
import Link from 'next/link';

export default function DashboardForm() {
  return (
    <div 
      className="min-vh-100 w-100 text-end text-white d-flex" 
      style={{ 
        backgroundColor: '#06141b', 
        fontFamily: 'Amiri, Cairo, Tahoma, sans-serif' 
      }} 
      dir="rtl"
    >
      
      {/* 1. الشريط الجانبي (Sidebar Navigation) */}
      <aside 
        className="d-flex flex-column p-3 border-start border-secondary border-opacity-25 min-vh-100 position-sticky top-0"
        style={{ 
          width: '260px', 
          backgroundColor: '#0a1d28',
          zIndex: 1000
        }}
      >
        {/* شعار التطبيق واسم المتجر */}
        <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25 px-2">
          <div 
            className="rounded-3 d-flex align-items-center justify-content-center fw-bold shadow"
            style={{ 
              width: '40px', 
              height: '40px', 
              background: 'linear-gradient(135deg, #d4af37 0%, #115e59 100%)', 
              color: '#fff',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              fontSize: '1.2rem'
            }}
          >
            ت
          </div>
          <div>
            <span className="fw-bold fs-6 text-white d-block lh-1">متتبع الطلبات</span>
            <span className="small text-warning" style={{ fontSize: '0.75rem', color: '#d4af37' }}>Orders Tracker 🇲🇦</span>
          </div>
        </div>

        {/* الروابط الرئيسية الأربعة */}
        <nav className="nav nav-pills flex-column gap-2 mb-auto">
          
          {/* 1. صفحة الطلبات */}
          <Link 
            href="/dashboard/orders" 
            className="nav-link text-white d-flex align-items-center gap-3 py-2.5 px-3 rounded-3 active"
            style={{ 
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(17, 94, 89, 0.3) 100%)',
              borderRight: '4px solid #d4af37',
              color: '#fff'
            }}
          >
            <span className="fs-5">📦</span>
            <span className="fw-bold">الطلبات</span>
          </Link>

          {/* 2. صفحة المنتجات */}
          <Link 
            href="/dashboard/products" 
            className="nav-link text-secondary d-flex align-items-center gap-3 py-2.5 px-3 rounded-3 transition-all"
            style={{ color: '#94a3b8' }}
          >
            <span className="fs-5">🏷️</span>
            <span className="fw-semibold">المنتجات</span>
          </Link>

          {/* 3. صفحة الزبائن */}
          <Link 
            href="/dashboard/customers" 
            className="nav-link text-secondary d-flex align-items-center gap-3 py-2.5 px-3 rounded-3 transition-all"
            style={{ color: '#94a3b8' }}
          >
            <span className="fs-5">👥</span>
            <span className="fw-semibold">الزبائن</span>
          </Link>

          {/* 4. الحساب الشخصي */}
          <Link 
            href="/dashboard/profile" 
            className="nav-link text-secondary d-flex align-items-center gap-3 py-2.5 px-3 rounded-3 transition-all"
            style={{ color: '#94a3b8' }}
          >
            <span className="fs-5">👤</span>
            <span className="fw-semibold">الحساب الشخصي</span>
          </Link>

        </nav>

        {/* التذييل السفلي للشريط الجانبي */}
        <div className="pt-3 border-top border-secondary border-opacity-25 px-2">
          <Link 
            href="/login" 
            className="btn btn-sm w-100 text-danger border border-danger border-opacity-25 rounded-3 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
            style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
          >
            <span>تسجيل الخروج</span>
            <span>←</span>
          </Link>
        </div>
      </aside>

      {/* 2. منطقة المحتوى الرئيسي (Main Content Area) */}
      <main className="flex-grow-1 p-4 overflow-auto">
        
        {/* الشريط العلوي (Top Header) */}
        <header className="d-flex align-items-center justify-content-between pb-4 mb-4 border-bottom border-secondary border-opacity-25">
          <div>
            <h1 className="h4 fw-bold text-white mb-1">مرحباً بك، يوسف 👋</h1>
            <p className="small text-secondary m-0" style={{ color: '#94a3b8' }}>إليك نظرة عامة على نشاط متجرك اليوم</p>
          </div>

          <div className="d-flex align-items-center">
            <div 
              className="px-3 py-2 rounded-pill d-flex align-items-center gap-2 border shadow-sm"
              style={{ 
                backgroundColor: '#0a1d28', 
                borderColor: 'rgba(212, 175, 55, 0.3)',
                color: '#d4af37',
                fontSize: '0.85rem'
              }}
            >
              <span>🏛️</span>
              <span className="fw-semibold">بوابـة التّـجار المغاربة 🇲🇦</span>
            </div>
          </div>
        </header>

        {/* بطاقات المؤشرات السريعة (Metrics Cards) */}
        <div className="row g-3 mb-4">
          
          <div className="col-md-6 col-xl-3">
            <div className="p-3.5 p-md-4 rounded-4 border" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="small text-secondary" style={{ color: '#94a3b8' }}>إجمالي الطلبات اليوم</span>
                <span className="fs-5">📦</span>
              </div>
              <h3 className="fw-bold text-white mb-1">24 طلب</h3>
              <span className="badge bg-success bg-opacity-25 text-success rounded-pill px-2 py-1 small">+12% مقارنة بالأمس</span>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="p-3.5 p-md-4 rounded-4 border" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(45, 212, 191, 0.2)' }}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="small text-secondary" style={{ color: '#94a3b8' }}>الطلبات المؤكدة</span>
                <span className="fs-5">✅</span>
              </div>
              <h3 className="fw-bold text-white mb-1">18 طلب</h3>
              <span className="badge bg-teal bg-opacity-25 text-info rounded-pill px-2 py-1 small">جاهزة للشحن</span>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="p-3.5 p-md-4 rounded-4 border" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="small text-secondary" style={{ color: '#94a3b8' }}>نسبة المرتجعات</span>
                <span className="fs-5">⚠️</span>
              </div>
              <h3 className="fw-bold text-white mb-1">4.2%</h3>
              <span className="badge bg-danger bg-opacity-25 text-danger rounded-pill px-2 py-1 small">مستوى ممتاز ومستقر</span>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="p-3.5 p-md-4 rounded-4 border" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="small text-secondary" style={{ color: '#94a3b8' }}>صافي الأرباح</span>
                <span className="fs-5">💰</span>
              </div>
              <h3 className="fw-bold text-warning mb-1" style={{ color: '#d4af37' }}>5,840 د.م</h3>
              <span className="badge bg-warning bg-opacity-10 text-warning rounded-pill px-2 py-1 small">صافي بعد التكاليف</span>
            </div>
          </div>

        </div>

        {/* جدول أحدث الطلبات (Recent Orders Table) */}
        <div className="rounded-4 border p-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="fw-bold text-white mb-0">أحدث الطلبيات الواردة</h5>
            <Link href="/dashboard/orders" className="small text-decoration-none" style={{ color: '#d4af37' }}>
              عرض جميع الطلبات ←
            </Link>
          </div>

          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle mb-0" style={{ backgroundColor: 'transparent' }}>
              <thead>
                <tr className="border-bottom border-secondary border-opacity-25 text-secondary small">
                  <th scope="col" className="py-3">رقم الطلب</th>
                  <th scope="col" className="py-3">الزبون</th>
                  <th scope="col" className="py-3">المدينة</th>
                  <th scope="col" className="py-3">المبلغ</th>
                  <th scope="col" className="py-3">الحالة</th>
                  <th scope="col" className="py-3 text-start">إجراء سريع</th>
                </tr>
              </thead>
              <tbody className="border-0">
                
                {/* نموذج لطلب جديد */}
                <tr className="border-bottom border-secondary border-opacity-10">
                  <td className="fw-bold text-warning" style={{ color: '#d4af37' }}>#OT-9042</td>
                  <td>يوسف العلوي</td>
                  <td>الدار البيضاء</td>
                  <td className="fw-semibold">350 د.م</td>
                  <td>
                    <span className="badge rounded-pill bg-info bg-opacity-25 text-info px-3 py-1">جديد</span>
                  </td>
                  <td className="text-start">
                    <a 
                      href="https://wa.me/212600000000" 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-sm rounded-3 fw-bold d-inline-flex align-items-center gap-1"
                      style={{ backgroundColor: '#25D366', color: '#fff', border: 'none' }}
                    >
                      <span>💬</span>
                      <span>تأكيد بـ WhatsApp</span>
                    </a>
                  </td>
                </tr>

                {/* نموذج لطلب مؤكد */}
                <tr className="border-bottom border-secondary border-opacity-10">
                  <td className="fw-bold text-warning" style={{ color: '#d4af37' }}>#OT-9041</td>
                  <td>فاطمة الزهراء</td>
                  <td>فاس</td>
                  <td className="fw-semibold">490 د.م</td>
                  <td>
                    <span className="badge rounded-pill bg-success bg-opacity-25 text-success px-3 py-1">مؤكَّد</span>
                  </td>
                  <td className="text-start">
                    <button className="btn btn-sm btn-outline-secondary rounded-3 text-white">تعديل الحالة</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </main>

    </div>
  );
}