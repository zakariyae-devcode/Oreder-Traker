import Link from "next/link";
export default function RecentOrdersTable() {

    return(
         <>
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
         </>

    )
   
}