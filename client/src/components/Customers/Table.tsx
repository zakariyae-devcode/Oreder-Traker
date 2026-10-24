export default function Table(){
    return(

        <>
                <div className="card border shadow-sm rounded-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="card-body p-4">
            
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3 gap-3">
              <h6 className="fw-bold text-white mb-0 small">قائمة الزبائن (Customer List)</h6>
              <input 
                type="text" 
                placeholder="ابحث بالاسم، البريد أو CIN..." 
                className="form-control form-control-sm py-1.5 px-3 text-white border shadow-none" 
                style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.85rem', width: '220px' }}
              />
            </div>

            <div className="table-responsive">
              <table className="table table-dark table-hover align-middle mb-0" style={{ backgroundColor: 'transparent', fontSize: '0.88rem' }}>
                <thead>
                  <tr className="border-bottom border-secondary border-opacity-25 text-secondary small">
                    <th scope="col" className="py-2.5">الاسم الكامل (FullName)</th>
                    <th scope="col" className="py-2.5">CIN</th>
                    <th scope="col" className="py-2.5">البريد الإلكتروني</th>
                    <th scope="col" className="py-2.5">الهاتف</th>
                    <th scope="col" className="py-2.5">المدينة</th>
                    <th scope="col" className="py-2.5">العنوان</th>
                    <th scope="col" className="py-2.5 text-start">إجراءات CRUD</th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  
                  {/* زبون 1 */}
                  <tr className="border-bottom border-secondary border-opacity-10">
                    <td className="fw-bold text-white">زكرياء أبيه</td>
                    <td><span className="badge bg-secondary bg-opacity-25 text-warning px-2 py-1">F123456</span></td>
                    <td className="text-secondary small"></td>
                    <td dir="ltr" className="text-secondary"></td>
                    <td><span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1">Taourirt</span></td>
                    <td className="text-secondary small"></td>
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