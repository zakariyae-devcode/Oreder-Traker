import Link from "next/link";


export default function Form(){

    return (
      <>
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
        
      </>
    )
}