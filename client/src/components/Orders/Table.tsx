export default function Table() 
{

    return (
        <>
            <div className="card border shadow-sm rounded-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="card-body p-4">
            
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3 gap-3">
              <h6 className="fw-bold text-white mb-0 small">قائمة الطلبات الشاملة (Order List)</h6>
              <input 
                type="text" 
                placeholder="ابحث برقم التتبع أو الزبون..." 
                className="form-control form-control-sm py-1.5 px-3 text-white border shadow-none" 
                style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.85rem', width: '220px' }}
              />
            </div>

            <div className="table-responsive">
              <table className="table table-dark table-hover align-middle mb-0" style={{ backgroundColor: 'transparent', fontSize: '0.88rem' }}>
                <thead>
                  <tr className="border-bottom border-secondary border-opacity-25 text-secondary small">
                    <th scope="col" className="py-2.5">الزبون (customer)</th>
                    <th scope="col" className="py-2.5">عناصر الطلب (OrderItems)</th>
                    <th scope="col" className="py-2.5">الشحن</th>
                    <th scope="col" className="py-2.5">رقم التتبع</th>
                    <th scope="col" className="py-2.5">الحالة</th>
                    <th scope="col" className="py-2.5 text-start">إجراءات و WhatsApp</th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  
                  <tr className="border-bottom border-secondary border-opacity-10">
                    <td>
                      <span className="fw-bold text-white d-block">زكرياء أبيه</span>
                      <small className="text-secondary">Taourirt</small>
                    </td>
                    <td>
                      <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 mb-1 d-inline-block">
                        قفطان مغربي مذهب (×1)
                      </span>
                      <div className="small text-warning" style={{ color: '#d4af37', fontSize: '0.78rem' }}>
                        إجمالي: 450.00 د.م
                      </div>
                    </td>
                    <td className="text-secondary">35.00 د.م</td>
                    <td><span className="badge bg-dark text-info border border-info border-opacity-25">TRK-98452</span></td>
                    <td>
                      <span className="badge rounded-pill bg-info bg-opacity-25 text-info px-2.5 py-1">جديد (NEW)</span>
                    </td>
                    <td className="text-start">
                      <div className="d-flex gap-1 justify-content-start">
                        <a href="https://wa.me/212612345678" target="_blank" rel="noreferrer" className="btn btn-sm py-1 px-2 rounded-2 fw-bold" style={{ backgroundColor: '#25D366', color: '#fff', fontSize: '0.75rem' }} title="واتساب">
                          💬
                        </a>
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