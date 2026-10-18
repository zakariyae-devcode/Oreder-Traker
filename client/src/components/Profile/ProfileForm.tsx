import React from 'react';
import Link from 'next/link';

export default function ProfileForm() {
  return (
    <div 
      className="min-vh-100 w-100 d-flex text-end" 
      style={{ backgroundColor: '#06141b', color: '#f3f4f6', fontFamily: 'Amiri, Cairo, Tahoma, sans-serif' }} 
      dir="rtl"
    >
      
      {/* 1. الشريط الجانبي (Sidebar) باستخدام فئات Bootstrap */}
      <aside 
        className="d-flex flex-column p-3 border-start border-secondary border-opacity-25 min-vh-100 position-sticky top-0"
        style={{ width: '260px', minWidth: '260px', backgroundColor: '#0a1d28', zIndex: 1000 }}
      >
        {/* الشعار */}
        <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25 px-2">
          <div className="rounded-3 d-flex align-items-center justify-content-center fw-bold shadow bg-gradient text-white" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #d4af37 0%, #115e59 100%)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
            ت
          </div>
          <div>
            <span className="fw-bold fs-6 text-white d-block lh-1">متتبع الطلبات</span>
            <span className="small text-warning" style={{ fontSize: '0.75rem', color: '#d4af37' }}>Orders Tracker 🇲🇦</span>
          </div>
        </div>

        {/* الروابط */}
        <nav className="nav nav-pills flex-column gap-2 mb-auto">
          <Link href="/dashboard/orders" className="nav-link text-secondary d-flex align-items-center gap-3 py-2 px-3 rounded-3">
            <span>📦</span>
            <span className="fw-semibold small">الطلبات</span>
          </Link>
          <Link href="/dashboard/products" className="nav-link text-secondary d-flex align-items-center gap-3 py-2 px-3 rounded-3">
            <span>🏷️</span>
            <span className="fw-semibold small">المنتجات</span>
          </Link>
          <Link href="/dashboard/customers" className="nav-link text-secondary d-flex align-items-center gap-3 py-2 px-3 rounded-3">
            <span>👥</span>
            <span className="fw-semibold small">الزبائن</span>
          </Link>
          <Link href="/dashboard/profile" className="nav-link text-white d-flex align-items-center gap-3 py-2 px-3 rounded-3 active shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(17, 94, 89, 0.3) 100%)', borderRight: '4px solid #d4af37' }}>
            <span>👤</span>
            <span className="fw-bold small">الحساب الشخصي</span>
          </Link>
        </nav>

        {/* زر الخروج */}
        <div className="pt-3 border-top border-secondary border-opacity-25 px-2">
          <Link href="/login" className="btn btn-sm w-100 text-danger border border-danger border-opacity-25 rounded-3 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
            <span>تسجيل الخروج</span>
            <span>←</span>
          </Link>
        </div>
      </aside>

      {/* 2. المحتوى الرئيسي */}
      <main className="flex-grow-1 p-3 p-md-4 overflow-auto w-100">
        
        {/* الهيدر العلوي */}
        <header className="d-flex flex-wrap align-items-center justify-content-between pb-3 mb-4 border-bottom border-secondary border-opacity-25 gap-3">
          <div>
            <h1 className="h5 fw-bold text-white mb-1">إدارة الحساب الشخصي</h1>
            <p className="small text-secondary m-0" style={{ fontSize: '0.82rem' }}>تعديل معلوماتك الشخصية وبيانات متجرك التجاري</p>
          </div>
          <div>
            <span className="badge px-3 py-2 rounded-pill border text-warning bg-opacity-10 d-flex align-items-center gap-2" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.3)', fontSize: '0.8rem' }}>
              <span>🏛️</span>
              <span className="fw-semibold">بوابـة التّـجار المغاربة 🇲🇦</span>
            </span>
          </div>
        </header>

        {/* شبكة Bootstrap الرئيسية */}
        <div className="row g-3 w-100 m-0">
          
          {/* بطاقة معلومات التاجر الجانبية */}
          <div className="col-xl-4 px-1">
            <div className="card border shadow-sm rounded-4 h-100" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <div className="card-body text-center p-4">
                
                <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center fw-bold shadow-sm mb-3 text-white" style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #d4af37 0%, #115e59 100%)', border: '2px solid rgba(212, 175, 55, 0.4)', fontSize: '1.8rem' }}>
                  ي
                </div>

                <h6 className="fw-bold text-white mb-1">يوسف المنصوري</h6>
                <p className="small mb-2 fw-semibold text-warning" style={{ color: '#d4af37', fontSize: '0.85rem' }}>@youssef_store</p>
                
                <span className="badge bg-info bg-opacity-10 text-info rounded-pill px-3 py-1 mb-3 border border-info border-opacity-25 small" style={{ fontSize: '0.75rem' }}>
                  تاجر معتمد في منصة متجرك
                </span>

                <div className="text-start border-top border-secondary border-opacity-25 pt-3 d-flex flex-column gap-2 text-secondary" style={{ fontSize: '0.85rem' }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>المدينة:</span>
                    <span className="text-white fw-semibold">الدار البيضاء</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>رقم الهاتف:</span>
                    <span className="text-white fw-semibold" dir="ltr">+212 6 00 00 00 00</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>حالة الحساب:</span>
                    <span className="text-success fw-semibold">نشط ومفعل ✅</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* نموذج التعديل الأساسي */}
          <div className="col-xl-8 px-1">
            <div className="card border shadow-sm rounded-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="card-body p-4">
                
                <h6 className="fw-bold text-white mb-3 pb-2 border-bottom border-secondary border-opacity-25 small">
                  تعديل المعلومات الشخصية والتجارية
                </h6>

                <form>
                  {/* استخدام نظام صفوف وأعمدة Bootstrap لتنظيم الحقول بشكل صغير وأنيق */}
                  <div className="row g-2">
                    
                    <div className="col-md-6">
                      <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>الاسم الشخصي</label>
                      <input type="text" defaultValue="يوسف" className="form-control form-control-sm py-2 px-3 text-white text-end border shadow-none" style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }} />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>الاسم العائلي</label>
                      <input type="text" defaultValue="المنصوري" className="form-control form-control-sm py-2 px-3 text-white text-end border shadow-none" style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }} />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>اسم المستخدم</label>
                      <input type="text" defaultValue="youssef_store" className="form-control form-control-sm py-2 px-3 text-white text-end border shadow-none" style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }} />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>رقم البطاقة الوطنية (CIN)</label>
                      <input type="text" defaultValue="BK123456" className="form-control form-control-sm py-2 px-3 text-white text-end border shadow-none" style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }} />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>البريد الإلكتروني</label>
                      <input type="email" defaultValue="merchant@store.ma" className="form-control form-control-sm py-2 px-3 text-white text-end border shadow-none" style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }} />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>رقم الهاتف (واتساب)</label>
                      <input type="tel" defaultValue="0612345678" className="form-control form-control-sm py-2 px-3 text-white text-end border shadow-none" style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }} />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>المدينة</label>
                      <input type="text" defaultValue="الدار البيضاء" className="form-control form-control-sm py-2 px-3 text-white text-end border shadow-none" style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }} />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>العنوان</label>
                      <input type="text" defaultValue="شارع محمد الخامس، المعاريف" className="form-control form-control-sm py-2 px-3 text-white text-end border shadow-none" style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }} />
                    </div>

                  </div>

                  <h6 className="fw-bold text-white mt-4 mb-2 pt-3 border-top border-secondary border-opacity-25 small">
                    تغيير كلمة المرور (اختياري)
                  </h6>
                  <div className="row g-2">
                    <div className="col-md-6">
                      <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>كلمة المرور الجديدة</label>
                      <input type="password" placeholder="••••••••" className="form-control form-control-sm py-2 px-3 text-white text-end border shadow-none" style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>تأكيد كلمة المرور الجديدة</label>
                      <input type="password" placeholder="••••••••" className="form-control form-control-sm py-2 px-3 text-white text-end border shadow-none" style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }} />
                    </div>
                  </div>

                  <div className="mt-3 pt-2">
                    <button type="button" className="btn btn-sm px-4 py-2 rounded-3 fw-bold shadow-sm" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #b45309 100%)', color: '#06141b', border: 'none', fontSize: '0.85rem' }}>
                      حفظ التغييرات ✓
                    </button>
                  </div>

                </form>

              </div>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}