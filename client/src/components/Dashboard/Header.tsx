export default function Header(){


    return(
        <>
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
        
        
        </>
    )
}