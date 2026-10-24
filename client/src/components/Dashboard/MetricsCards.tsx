
export default function MetricsCards(){


    return(
        <>
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
        
        
        </>
    )
}