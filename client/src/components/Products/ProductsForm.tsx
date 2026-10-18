
import Link from 'next/link';

export default function ProductsForm() 
{
  return (
    <>
    
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
          <Link href="/dashboard/orders" className="nav-link text-secondary d-flex align-items-center gap-3 py-2 px-3 rounded-3">
            <span>📦</span>
            <span className="fw-semibold small">الطلبات</span>
          </Link>
          <Link href="/dashboard/products" className="nav-link text-white d-flex align-items-center gap-3 py-2 px-3 rounded-3 active shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(17, 94, 89, 0.3) 100%)', borderRight: '4px solid #d4af37' }}>
            <span>🏷️</span>
            <span className="fw-bold small">المنتجات</span>
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
            <h1 className="h5 fw-bold text-white mb-1">إدارة المنتجات (CRUD)</h1>
            <p className="small text-secondary m-0" style={{ fontSize: '0.82rem' }}>إضافة وتعديل المنتجات وتحديد الأسعار والتكاليف لحساب الأرباح</p>
          </div>
          <div>
            <span className="badge px-3 py-2 rounded-pill border text-warning bg-opacity-10 d-flex align-items-center gap-2" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.3)', fontSize: '0.8rem' }}>
              <span>🏛️</span>
              <span className="fw-semibold">بوابـة التّـجار المغاربة 🇲🇦</span>
            </span>
          </div>
        </header>

        {/* نموذج إضافة / تعديل منتج (Form) */}
        <div className="card border shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.25)' }}>
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-secondary border-opacity-25">
              <h6 className="fw-bold text-warning m-0 small" style={{ color: '#d4af37' }}>
                🏷️ نموذج إضافة / تعديل منتج
              </h6>
              <span className="badge bg-secondary bg-opacity-25 text-light small fw-normal">إدخال مباشر</span>
            </div>

            <form>
              <div className="row g-2">
                
                {/* اسم المنتج */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>اسم المنتج *</label>
                  <input 
                    type="text" 
                    placeholder="مثال: قفطان مغربي أصيل" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* سعر البيع */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>سعر البيع (د.م) *</label>
                  <input 
                    type="number" 
                    placeholder="450" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* تكلفة الشراء */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>التكلفة الأولية (د.م) *</label>
                  <input 
                    type="number" 
                    placeholder="200" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* الكمية المتوفرة */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>الكمية في المخزون</label>
                  <input 
                    type="number" 
                    placeholder="25" 
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
                  حفظ المنتج ✓
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

        {/* جدول عرض المنتجات */}
        <div className="card border shadow-sm rounded-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="card-body p-4">
            
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3 gap-3">
              <h6 className="fw-bold text-white mb-0 small">قائمة المنتجات المتوفرة</h6>
              <input 
                type="text" 
                placeholder="ابحث عن منتج..." 
                className="form-control form-control-sm py-1.5 px-3 text-white border shadow-none" 
                style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.85rem', width: '220px' }}
              />
            </div>

            <div className="table-responsive">
              <table className="table table-dark table-hover align-middle mb-0" style={{ backgroundColor: 'transparent', fontSize: '0.88rem' }}>
                <thead>
                  <tr className="border-bottom border-secondary border-opacity-25 text-secondary small">
                    <th scope="col" className="py-2.5">اسم المنتج</th>
                    <th scope="col" className="py-2.5">سعر البيع</th>
                    <th scope="col" className="py-2.5">التكلفة</th>
                    <th scope="col" className="py-2.5">ربح القطعة</th>
                    <th scope="col" className="py-2.5">المخزون</th>
                    <th scope="col" className="py-2.5 text-start">إجراءات CRUD</th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  
                  {/* منتج 1 */}
                  <tr className="border-bottom border-secondary border-opacity-10">
                    <td className="fw-bold text-white">قفطان مغربي مذهب</td>
                    <td className="text-warning fw-semibold" style={{ color: '#d4af37' }}>450 د.م</td>
                    <td className="text-secondary">200 د.م</td>
                    <td><span className="badge bg-success bg-opacity-25 text-success px-2 py-1">+250 د.م</span></td>
                    <td><span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1">15 قطعة</span></td>
                    <td className="text-start">
                      <div className="d-flex gap-1 justify-content-start">
                        <button className="btn btn-sm btn-outline-info py-1 px-2 rounded-2" style={{ fontSize: '0.75rem' }} title="تعديل">
                          ✏️ تعديل
                        </button>
                        <button className="btn btn-sm btn-outline-danger py-1 px-2 rounded-2" style={{ fontSize: '0.75rem' }} title="حذف">
                          🗑️ حذف
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* منتج 2 */}
                  <tr className="border-bottom border-secondary border-opacity-10">
                    <td className="fw-bold text-white">حقيبة جلدية تقليدية</td>
                    <td className="text-warning fw-semibold" style={{ color: '#d4af37' }}>280 د.م</td>
                    <td className="text-secondary">120 د.م</td>
                    <td><span className="badge bg-success bg-opacity-25 text-success px-2 py-1">+160 د.م</span></td>
                    <td><span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1">30 قطعة</span></td>
                    <td className="text-start">
                      <div className="d-flex gap-1 justify-content-start">
                        <button className="btn btn-sm btn-outline-info py-1 px-2 rounded-2" style={{ fontSize: '0.75rem' }} title="تعديل">
                          ✏️ تعديل
                        </button>
                        <button className="btn btn-sm btn-outline-danger py-1 px-2 rounded-2" style={{ fontSize: '0.75rem' }} title="حذف">
                          🗑️ حذف
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
    
    
    </>
  );
}