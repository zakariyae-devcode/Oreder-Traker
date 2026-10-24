export default function Table() 
{

    return (
        <>
          <div className="card border shadow-sm rounded-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="card-body p-4">
            
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3 gap-3">
              <h6 className="fw-bold text-white mb-0 small">قائمة المنتجات المسجلة</h6>
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
                    <th scope="col" className="py-2.5">اسم المنتج (name)</th>
                    <th scope="col" className="py-2.5">سعر البيع (sellingPrice)</th>
                    <th scope="col" className="py-2.5">سعر الشراء (purchasePrice)</th>
                    <th scope="col" className="py-2.5">صافي الربح المتوقع</th>
                    <th scope="col" className="py-2.5">الحالة (is_active)</th>
                    <th scope="col" className="py-2.5 text-start">إجراءات CRUD</th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  
                  {/* منتج 1 - حالة نشطة بتصميم جديد */}
                  <tr className="border-bottom border-secondary border-opacity-10">
                    <td className="fw-bold text-white">قفطان مغربي مذهب</td>
                    <td className="text-warning fw-semibold" style={{ color: '#d4af37' }}>450.00 د.م</td>
                    <td className="text-secondary">200.00 د.م</td>
                    <td><span className="badge bg-success bg-opacity-25 text-success px-2 py-1">+250.00 د.م</span></td>
                    <td>
                      <span 
                        className="badge px-3 py-1.5 rounded-pill border d-inline-flex align-items-center gap-1.5"
                        style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399', fontSize: '0.78rem' }}
                      >
                        <span className="rounded-circle d-inline-block" style={{ width: '6px', height: '6px', backgroundColor: '#34d399' }}></span>
                        <span>مفعل ومعروض</span>
                      </span>
                    </td>
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

                  {/* منتج 2 - حالة غير نشطة بتصميم جديد */}
                  <tr className="border-bottom border-secondary border-opacity-10">
                    <td className="fw-bold text-white">حقيبة جلدية تقليدية</td>
                    <td className="text-warning fw-semibold" style={{ color: '#d4af37' }}>280.00 د.م</td>
                    <td className="text-secondary">120.00 د.م</td>
                    <td><span className="badge bg-success bg-opacity-25 text-success px-2 py-1">+160.00 د.م</span></td>
                    <td>
                      <span 
                        className="badge px-3 py-1.5 rounded-pill border d-inline-flex align-items-center gap-1.5"
                        style={{ backgroundColor: 'rgba(239, 68, 68, 0.12)', borderColor: 'rgba(239, 68, 68, 0.4)', color: '#f87171', fontSize: '0.78rem' }}
                      >
                        <span className="rounded-circle d-inline-block" style={{ width: '6px', height: '6px', backgroundColor: '#f87171' }}></span>
                        <span>متوقف (مخفي)</span>
                      </span>
                    </td>
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
           
        
        
        </>
    )
}