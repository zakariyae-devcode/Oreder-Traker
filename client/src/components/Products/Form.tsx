export default function Form(){

    return (
      <>
         <div className="card border shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.25)' }}>
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-secondary border-opacity-25">
              <h6 className="fw-bold text-warning m-0 small" style={{ color: '#d4af37' }}>
                🏷️ نموذج إضافة / تعديل منتج
              </h6>
              <span className="badge bg-secondary bg-opacity-25 text-light small fw-normal">Django Product Schema</span>
            </div>

            <form>
              <div className="row g-3 align-items-end">
                
                {/* name */}
                <div className="col-md-6 col-lg-4">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>اسم المنتج (name) *</label>
                  <input 
                    type="text" 
                    placeholder="مثال: قفطان مغربي أصيل" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* sellingPrice */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>سعر البيع (sellingPrice) *</label>
                  <input 
                    type="number" 
                    step="0.01"
                    min="0"
                    placeholder="450.00" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* purchasePrice */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>سعر الشراء (purchasePrice) *</label>
                  <input 
                    type="number" 
                    step="0.01"
                    min="0"
                    placeholder="200.00" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* is_active (تغيير الشكل إلى خيار محدد وأنيق) */}
                <div className="col-md-6 col-lg-2">
                  <label className="form-label text-secondary fw-bold d-block" style={{ fontSize: '0.8rem' }}>حالة المنتج (is_active)</label>
                  <select 
                    className="form-select form-select-sm py-2 px-3 text-white border shadow-none fw-semibold"
                    style={{ 
                      backgroundColor: '#06141b', 
                      borderColor: '#1e293b', 
                      fontSize: '0.85rem'
                    }}
                  >
                    <option value="true" className="text-success fw-bold">🟢 نشط ومتاح</option>
                    <option value="false" className="text-danger fw-bold">🔴 غير نشط (مخفي)</option>
                  </select>
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
        
        
      </>
    )
}