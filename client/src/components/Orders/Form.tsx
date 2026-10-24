export default function Form(){

    return (
        <>
            <div className="card border shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.25)' }}>
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-secondary border-opacity-25">
              <h6 className="fw-bold text-warning m-0 small" style={{ color: '#d4af37' }}>
                📦 بيانات الطلب الأساسية (Order Model)
              </h6>
              <span className="badge bg-secondary bg-opacity-25 text-light small fw-normal">Django Schema</span>
            </div>

            <form>
              <div className="row g-2 mb-3">
                
                {/* customer */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>الزبون (customer) *</label>
                  <select 
                    className="form-select form-select-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required
                  >
                    <option value="">اختر الزبون...</option>
                    <option value="1">زكرياء أبيه (Taourirt)</option>
                    <option value="2">يوسف العلوي (الدار البيضاء)</option>
                  </select>
                </div>

                {/* shipping_cost */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>مصاريف الشحن (shipping_cost) *</label>
                  <input 
                    type="number" 
                    step="0.01"
                    min="0"
                    placeholder="35.00" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                    required 
                  />
                </div>

                {/* tracking_number */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>رقم التتبع (tracking_number)</label>
                  <input 
                    type="text" 
                    placeholder="مثال: TRK-98452" 
                    className="form-control form-control-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                  />
                </div>

                {/* status */}
                <div className="col-md-6 col-lg-3">
                  <label className="form-label text-secondary fw-bold" style={{ fontSize: '0.8rem' }}>حالة الطلب (status)</label>
                  <select 
                    className="form-select form-select-sm py-2 px-3 text-white border shadow-none" 
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.88rem' }}
                  >
                    <option value="NEW">جديد (NEW) 🔵</option>
                    <option value="CONFIRMED">مؤكد (CONFIRMED) 🟢</option>
                    <option value="SHIPPED">مشحون (SHIPPED) 🟡</option>
                    <option value="DELIVERED">تم التسليم (DELIVERED) ✅</option>
                    <option value="CANCELLED">ملغى (CANCELLED) 🔴</option>
                  </select>
                </div>

              </div>

              {/* قسم عناصر الطلب (OrderItem) */}
              <div className="p-3 rounded-3 border border-secondary border-opacity-25 mb-3" style={{ backgroundColor: '#06141b' }}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="fw-bold text-white m-0 small">🛒 عناصر المنتجات المطلوب (OrderItem List)</h6>
                  <button type="button" className="btn btn-sm btn-outline-warning py-1 px-2" style={{ fontSize: '0.75rem', borderColor: '#d4af37', color: '#d4af37' }}>
                    + إضافة منتج آخر
                  </button>
                </div>

                <div className="row g-2 align-items-center">
                  <div className="col-md-4">
                    <label className="form-label text-secondary small mb-1" style={{ fontSize: '0.75rem' }}>المنتج (product)</label>
                    <select className="form-select form-select-sm py-1.5 px-3 text-white border shadow-none" style={{ backgroundColor: '#0a1d28', borderColor: '#1e293b', fontSize: '0.82rem' }}>
                      <option value="1">قفطان مغربي مذهب</option>
                      <option value="2">حقيبة جلدية تقليدية</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label className="form-label text-secondary small mb-1" style={{ fontSize: '0.75rem' }}>الكمية (quantity)</label>
                    <input type="number" min="1" defaultValue="1" className="form-control form-control-sm py-1.5 px-2 text-white border shadow-none" style={{ backgroundColor: '#0a1d28', borderColor: '#1e293b', fontSize: '0.82rem' }} />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label text-secondary small mb-1" style={{ fontSize: '0.75rem' }}>سعر البيع (selling_price)</label>
                    <input type="number" step="0.01" defaultValue="450.00" className="form-control form-control-sm py-1.5 px-2 text-white border shadow-none" style={{ backgroundColor: '#0a1d28', borderColor: '#1e293b', fontSize: '0.82rem' }} />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label text-secondary small mb-1" style={{ fontSize: '0.75rem' }}>سعر الشراء (purchase_price)</label>
                    <input type="number" step="0.01" defaultValue="200.00" className="form-control form-control-sm py-1.5 px-2 text-white border shadow-none" style={{ backgroundColor: '#0a1d28', borderColor: '#1e293b', fontSize: '0.82rem' }} />
                  </div>
                </div>
              </div>

              {/* أزرار الحفظ والإلغاء */}
              <div className="d-flex align-items-center gap-2 pt-2 border-top border-secondary border-opacity-10">
                <button 
                  type="button" 
                  className="btn btn-sm px-4 py-2 rounded-3 fw-bold shadow-sm" 
                  style={{ background: 'linear-gradient(135deg, #d4af37 0%, #b45309 100%)', color: '#06141b', border: 'none', fontSize: '0.85rem' }}
                >
                  حفظ الطلب ✓
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