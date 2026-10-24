export default function Header(){
    return(
        <>
            <header className="d-flex flex-wrap align-items-center justify-content-between pb-3 mb-4 border-bottom border-secondary border-opacity-25 gap-3">
          <div>
            <h1 className="h5 fw-bold text-white mb-1">إدارة المنتجات (Django Product Model Matched)</h1>
            <p className="small text-secondary m-0" style={{ fontSize: '0.82rem' }}>إضافة وتعديل المنتجات مع تصميم مخصص لحالة التفعيل</p>
          </div>
          <div>
            <span className="badge px-3 py-2 rounded-pill border text-warning bg-opacity-10 d-flex align-items-center gap-2" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.3)', fontSize: '0.8rem' }}>
              <span>🏛️</span>
              <span className="fw-semibold">بوابـة التّـجار المغاربة 🇲🇦</span>
            </span>
          </div>
        </header>
        
        </>
    )
}