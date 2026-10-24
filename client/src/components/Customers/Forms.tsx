export default function Forms(){

    return(
        <>
            <div className="card border shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.25)' }}>
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-secondary border-opacity-25">
              <h6 className="fw-bold text-warning m-0 small" style={{ color: '#d4af37' }}>
                ✏️ نموذج إضافة / تعديل زبون
              </h6>
              <span className="badge bg-secondary bg-opacity-25 text-light small fw-normal">Django Customer Schema</span>
            </div>

            <form>
              <div className="row g-2">
                
                {/* FullName */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>الاسم الكامل (FullName) *</label>
                  <input 
                    type="text" 
                    placeholder="مثال: زكرياء أبيه" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* cin */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>رقم البطاقة الوطنية (CIN)</label>
                  <input 
                    type="text" 
                    placeholder="مثال: F123456" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                  />
                </div>

                {/* email */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>البريد الإلكتروني (email) *</label>
                  <input 
                    type="email" 
                    placeholder="customer@email.com" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* Phone */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>رقم الهاتف (Phone) *</label>
                  <input 
                    type="tel" 
                    
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* City */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>المدينة (City) *</label>
                  <input 
                    type="text" 
                  
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* Address */}
                <div className="col-md-12 col-lg-4">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>العنوان (Address)</label>
                  <input 
                    type="text" 
                     
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
                  حفظ الزبون ✓
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
        </>
    )
}