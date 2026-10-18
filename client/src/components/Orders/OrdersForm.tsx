import React from 'react';
import Link from 'next/link';

export default function OrdersForm() {
  return (
    <div 
      className="min-vh-100 w-100 d-flex text-end" 
      style={{ backgroundColor: '#06141b', color: '#f3f4f6', fontFamily: 'Amiri, Cairo, Tahoma, sans-serif' }} 
      dir="rtl"
    >
      
      {/* 1. الشريط الجانبي (Sidebar) */}
      <aside 
        className="d-flex flex-column p-3 border-start border-secondary border-opacity-25 min-vh-100 position-sticky top-0"
        style={{ width: '260px', minWidth: '260px', backgroundColor: '#0a1d28', zIndex: 1000 }}
      >
        <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25 px-2">
          <div className="rounded-3 d-flex align-items-center justify-content-center fw-bold shadow bg-gradient text-white" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #d4af37 0%, #115e59 100%)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
            ت
          </div>
          <div>
            <span className="fw-bold fs-6 text-white d-block lh-1">متتبع الطلبات</span>
            <span className="small text-warning" style={{ fontSize: '0.75rem', color: '#d4af37' }}>Orders Tracker 🇲🇦</span>
          </div>
        </div>

        <nav className="nav nav-pills flex-column gap-2 mb-auto">
          <Link href="/dashboard/orders" className="nav-link text-white d-flex align-items-center gap-3 py-2 px-3 rounded-3 active shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(17, 94, 89, 0.3) 100%)', borderRight: '4px solid #d4af37' }}>
            <span>📦</span>
            <span className="fw-bold small">الطلبات</span>
          </Link>
          <Link href="/dashboard/products" className="nav-link text-secondary d-flex align-items-center gap-3 py-2 px-3 rounded-3">
            <span>🏷️</span>
            <span className="fw-semibold small">المنتجات</span>
          </Link>
          <Link href="/dashboard/customers" className="nav-link text-secondary d-flex align-items-center gap-3 py-2 px-3 rounded-3">
            <span>👥</span>
            <span className="fw-semibold small">الزبائن</span>
          </Link>
          <Link href="/dashboard/profile" className="nav-link text-secondary d-flex align-items-center gap-3 py-2 px-3 rounded-3">
            <span>👤</span>
            <span className="fw-semibold small">الحساب الشخصي</span>
          </Link>
        </nav>

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
            <h1 className="h5 fw-bold text-white mb-1">إدارة الطلبات (CRUD & WhatsApp)</h1>
            <p className="small text-secondary m-0" style={{ fontSize: '0.82rem' }}>تتبع طلبيات الزبائن، حالات الشحن، والتأكيد السريع عبر واتساب</p>
          </div>
          <div>
            <span className="badge px-3 py-2 rounded-pill border text-warning bg-opacity-10 d-flex align-items-center gap-2" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.3)', fontSize: '0.8rem' }}>
              <span>🏛️</span>
              <span className="fw-semibold">بوابـة التّـجار المغاربة 🇲🇦</span>
            </span>
          </div>
        </header>

        {/* نموذج إضافة / تعديل طلب صريح (Form) */}
        <div className="card border shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.25)' }}>
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-secondary border-opacity-25">
              <h6 className="fw-bold text-warning m-0 small" style={{ color: '#d4af37' }}>
                📦 نموذج إضافة / تعديل طلب جديد
              </h6>
              <span className="badge bg-secondary bg-opacity-25 text-light small fw-normal">إدخال مباشر</span>
            </div>

            <form>
              <div className="row g-2">
                
                {/* اسم الزبون */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>اسم الزبون *</label>
                  <input 
                    type="text" 
                    placeholder="مثال: يوسف العلوي" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* رقم الهاتف */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>رقم الهاتف (واتساب) *</label>
                  <input 
                    type="tel" 
                    placeholder="0612345678" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* المدينة */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>المدينة *</label>
                  <input 
                    type="text" 
                    placeholder="مثال: الدار البيضاء" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* المنتج */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>المنتج المطلوب *</label>
                  <input 
                    type="text" 
                    placeholder="مثال: قفطان مغربي مذهب" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* المبلغ الإجمالي */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>المبلغ الإجمالي (د.م) *</label>
                  <input 
                    type="number" 
                    placeholder="450" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* حالة الطلب */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>حالة الطلب</label>
                  <select 
                    className="form-select form-select-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                  >
                    <option value="new">جديد 🔵</option>
                    <option value="confirmed">مؤكَّد 🟢</option>
                    <option value="shipped">مشحون 🟡</option>
                    <option value="returned">مرتجع 🔴</option>
                  </select>
                </div>

                {/* العنوان التفصيلي */}
                <div className="col-lg-4">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>العنوان التفصيلي</label>
                  <input 
                    type="text" 
                    placeholder="شارع محمد الخامس، المعاريف" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                  />
                </div>

              </div>

              {/* أزرار الحفظ والإلغاء */}
              <div className="d-flex align-items-center gap-2 mt-3 pt-2 border-top border-secondary border-opacity-10">
                <button 
                  type="button" 
                  className="btn btn-sm px-4 py-2 rounded-3 fw-bold shadow-sm" 
                  style={{ background: 'linear-gradient(135deg, #d4af37 0%, #b45309 100%)', color: '#06141b', border: 'none', fontSize: '0.85rem' }}
                >
                  حفظ الطلب ✓
                </button>
                <button 
                  type="reset" 
                  className="btn btn-sm btn-outline-secondary px-3 py-2 rounded-3"
                  style={{ fontSize: '0.85rem' }}
                >
                  إعادة ضبط
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* جدول عرض الطلبات */}
        <div className="card border shadow-sm rounded-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="card-body p-4">
            
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3 gap-3">
              <h6 className="fw-bold text-white mb-0 small">قائمة الطلبيات الواردة</h6>
              <input 
                type="text" 
                placeholder="ابحث برقم الطلب أو الزبون..." 
                className="form-control form-control-sm py-1.5 px-3 text-white border shadow-none" 
                style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.85rem', width: '220px' }}
              />
            </div>

            <div className="table-responsive">
              <table className="table table-dark table-hover align-middle mb-0" style={{ backgroundColor: 'transparent', fontSize: '0.88rem' }}>
                <thead>
                  <tr className="border-bottom border-secondary border-opacity-25 text-secondary small">
                    <th scope="col" className="py-2.5">رقم الطلب</th>
                    <th scope="col" className="py-2.5">الزبون والمدينة</th>
                    <th scope="col" className="py-2.5">المنتج</th>
                    <th scope="col" className="py-2.5">المبلغ</th>
                    <th scope="col" className="py-2.5">الحالة</th>
                    <th scope="col" className="py-2.5 text-start">إجراءات و WhatsApp</th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  
                  {/* طلب 1 */}
                  <tr className="border-bottom border-secondary border-opacity-10">
                    <td className="fw-bold text-warning" style={{ color: '#d4af37' }}>#OT-9042</td>
                    <td>
                      <span className="fw-bold text-white d-block">يوسف العلوي</span>
                      <small className="text-secondary">الدار البيضاء</small>
                    </td>
                    <td>قفطان مغربي مذهب</td>
                    <td className="fw-semibold">450 د.م</td>
                    <td>
                      <span className="badge rounded-pill bg-info bg-opacity-25 text-info px-2.5 py-1">جديد</span>
                    </td>
                    <td className="text-start">
                      <div className="d-flex gap-1 justify-content-start">
                        <a href="https://wa.me/212612345678" target="_blank" rel="noreferrer" className="btn btn-sm py-1 px-2 rounded-2 fw-bold" style={{ backgroundColor: '#25D366', color: '#fff', fontSize: '0.75rem' }} title="تأكيد عبر واتساب">
                          💬 واتساب
                        </a>
                        <button className="btn btn-sm btn-outline-info py-1 px-2 rounded-2" style={{ fontSize: '0.75rem' }} title="تعديل">
                          ✏️
                        </button>
                        <button className="btn btn-sm btn-outline-danger py-1 px-2 rounded-2" style={{ fontSize: '0.75rem' }} title="حذف">
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* طلب 2 */}
                  <tr className="border-bottom border-secondary border-opacity-10">
                    <td className="fw-bold text-warning" style={{ color: '#d4af37' }}>#OT-9041</td>
                    <td>
                      <span className="fw-bold text-white d-block">فاطمة الزهراء</span>
                      <small className="text-secondary">فاس</small>
                    </td>
                    <td>حقيبة جلدية تقليدية</td>
                    <td className="fw-semibold">280 د.م</td>
                    <td>
                      <span className="badge rounded-pill bg-success bg-opacity-25 text-success px-2.5 py-1">مؤكَّد</span>
                    </td>
                    <td className="text-start">
                      <div className="d-flex gap-1 justify-content-start">
                        <a href="https://wa.me/212698765432" target="_blank" rel="noreferrer" className="btn btn-sm py-1 px-2 rounded-2 fw-bold" style={{ backgroundColor: '#25D366', color: '#fff', fontSize: '0.75rem' }} title="تأكيد عبر واتساب">
                          💬 واتساب
                        </a>
                        <button className="btn btn-sm btn-outline-info py-1 px-2 rounded-2" style={{ fontSize: '0.75rem' }} title="تعديل">
                          ✏️
                        </button>
                        <button className="btn btn-sm btn-outline-danger py-1 px-2 rounded-2" style={{ fontSize: '0.75rem' }} title="حذف">
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
}