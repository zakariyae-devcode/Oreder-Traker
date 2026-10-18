import React from 'react';
import Link from 'next/link';

export default function RegisterForm() {
  return (
    <div className="min-vh-100 w-100 p-0 text-end" style={{ backgroundColor: '#06141b', color: '#f3f4f6', fontFamily: 'Amiri, Cairo, Tahoma, sans-serif' }} dir="rtl">
      <div className="row g-0 min-vh-100">
        
        {/* الجانب الأيمن: نموذج إنشاء الحساب (مقسم بشكل نظيف ومريح للعين) */}
        <div className="col-lg-6 d-flex flex-column justify-content-between p-4 p-md-5 z-2 border-start border-warning border-opacity-25" style={{ backgroundColor: '#0a1d28' }}>
          
          {/* الهيدر وشعار المنصة */}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-3 d-flex align-items-center justify-content-center fw-bold shadow-lg"
                style={{ 
                  width: '45px', 
                  height: '45px', 
                  background: 'linear-gradient(135deg, #d4af37 0%, #115e59 100%)', 
                  color: '#fff',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  fontSize: '1.3rem'
                }}
              >
                ت
              </div>
              <div>
                <span className="fw-bold fs-5 text-white d-block lh-1">متتبع الطلبات</span>
                <span className="small" style={{ fontSize: '0.8rem', color: '#d4af37' }}>Orders Tracker 🇲🇦</span>
              </div>
            </div>
            <Link href="/login" className="btn btn-sm text-decoration-none border px-3 py-2 rounded-pill" style={{ color: '#d4af37', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
              تسجيل الدخول ←
            </Link>
          </div>

          {/* محتوى النموذج */}
          <div className="my-auto py-3 w-100 mx-auto" style={{ maxWidth: '580px' }}>
            <div className="mb-4">
              <h2 className="fw-bold text-white mb-2 fs-3">أنشئ حسابك التجاري</h2>
              <p className="small m-0" style={{ color: '#94a3b8' }}>أدخل بياناتك للانضمام إلى منصة التجار وتتبع طلبياتك وأرباحك بدقة</p>
            </div>

            <form>
              <div className="row g-3">
                
                {/* الاسم الشخصي (first_name) */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                    الاسم الشخصي <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="first_name"
                    className="form-control py-2.5 px-3 rounded-3 text-white text-end border shadow-none"
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                    placeholder="مثال: يوسف" 
                    required 
                  />
                </div>

                {/* الاسم العائلي (last_name) */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                    الاسم العائلي <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="last_name"
                    className="form-control py-2.5 px-3 rounded-3 text-white text-end border shadow-none"
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                    placeholder="مثال: المنصوري" 
                    required 
                  />
                </div>

                {/* اسم المستخدم (username) */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                    اسم المستخدم <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="username"
                    className="form-control py-2.5 px-3 rounded-3 text-white text-end border shadow-none"
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                    placeholder="youssef_store" 
                    required 
                  />
                </div>

                {/* رقم البطاقة الوطنية (cin) */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                    رقم البطاقة الوطنية (CIN)
                  </label>
                  <input 
                    type="text" 
                    name="cin"
                    className="form-control py-2.5 px-3 rounded-3 text-white text-end border shadow-none"
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                    placeholder="A123456" 
                  />
                </div>

                {/* البريد الإلكتروني (email) */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                    البريد الإلكتروني <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-control py-2.5 px-3 rounded-3 text-white text-end border shadow-none"
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                    placeholder="merchant@store.ma" 
                    required 
                  />
                </div>

                {/* رقم الهاتف (phone) */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                    رقم الهاتف (واتساب) <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-control py-2.5 px-3 rounded-3 text-white text-end border shadow-none"
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                    placeholder="0612345678" 
                    required 
                  />
                </div>

                {/* المدينة (city) */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                    المدينة <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="city"
                    className="form-control py-2.5 px-3 rounded-3 text-white text-end border shadow-none"
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                    placeholder="مثال: الدار البيضاء، فاس، وجدة" 
                    required 
                  />
                </div>

                {/* العنوان (address) */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                    العنوان الشخصي أو التجاري
                  </label>
                  <input 
                    type="text" 
                    name="address"
                    className="form-control py-2.5 px-3 rounded-3 text-white text-end border shadow-none"
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                    placeholder="حي السلام، شارع محمد الخامس" 
                  />
                </div>

                {/* كلمة المرور (password) */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                    كلمة المرور <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="password" 
                    name="password"
                    className="form-control py-2.5 px-3 rounded-3 text-white text-end border shadow-none"
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                    placeholder="••••••••" 
                    required 
                  />
                </div>

                {/* تأكيد كلمة المرور (passwordConfirm) */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                    تأكيد كلمة المرور <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="password" 
                    name="passwordConfirm"
                    className="form-control py-2.5 px-3 rounded-3 text-white text-end border shadow-none"
                    style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                    placeholder="••••••••" 
                    required 
                  />
                </div>

              </div>

              {/* زر التسجيل */}
              <button 
                type="submit" 
                className="btn w-100 py-3 rounded-3 fw-bold shadow transition-all mt-4"
                style={{ 
                  background: 'linear-gradient(135deg, #d4af37 0%, #b45309 100%)', 
                  color: '#06141b',
                  border: 'none',
                  letterSpacing: '0.5px'
                }}
              >
                إنشاء الحساب والتسجيل ←
              </button>
            </form>

            <div className="mt-4 pt-3 border-top text-center" style={{ borderColor: '#1e293b !important' }}>
              <p className="small m-0" style={{ color: '#94a3b8' }}>
                لديك حساب بالفعل؟{' '}
                <Link href="/login" className="fw-bold text-decoration-none ms-1" style={{ color: '#d4af37' }}>
                  تسجيل الدخول
                </Link>
              </p>
            </div>
          </div>

          {/* الفوتر */}
          <div className="d-flex justify-content-between align-items-center small pt-3 border-top" style={{ borderColor: '#1e293b !important', fontSize: '0.8rem', color: '#64748b' }}>
            <span>© 2026 Orders Tracker</span>
            <span>هوية أندلسية مغربية أصيلة 🇲🇦</span>
          </div>

        </div>

        {/* الجانب الأيسر: العرض التوضيحي البصري */}
        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center p-5 position-relative overflow-hidden" style={{ backgroundColor: '#06141b' }}>
          
          <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 rounded-circle pointer-events-none opacity-10" style={{ background: 'radial-gradient(circle, #115e59 0%, #d4af37 60%, transparent 80%)', filter: 'blur(110px)' }} />

          <div className="position-relative z-1 max-w-xl mx-auto w-100">
            
            <div className="mb-4">
              <span className="badge py-2 px-3 rounded-pill border mb-3" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                ✨ انضم إلى بائعي التجارة الإلكترونية
              </span>
              <h1 className="fw-extrabold display-6 text-white mb-3" style={{ lineHeight: '1.3' }}>
                انطلق اليوم مع منصة <br />
                <span style={{ color: '#2dd4bf' }}>متتبع الطلبات المغربية</span>
              </h1>
              <p style={{ color: '#94a3b8' }}>
                سجل حسابك الآن للحصول على لوحة تحكم مستقلة تمكنك من تنظيم طلبياتك من إنستغرام، فيسبوك، وواتساب، ومتابعة نسبة المرتجعات والأرباح بدقة.
              </p>
            </div>

            {/* بطاقات المميزات السريعة */}
            <div className="row g-3">
              <div className="col-6">
                <div className="p-3 rounded-3 border" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(17, 94, 89, 0.4)' }}>
                  <div className="fs-4 mb-2">⚡</div>
                  <h6 className="fw-bold text-white mb-1">تأكيد بـ WhatsApp</h6>
                  <p className="small m-0" style={{ color: '#94a3b8', fontSize: '0.8rem' }}>إرسال إشعارات وتأكيد مباشر بنقرة واحدة</p>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 rounded-3 border" style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
                  <div className="fs-4 mb-2">📈</div>
                  <h6 className="fw-bold text-white mb-1">حساب صافي الأرباح</h6>
                  <p className="small m-0" style={{ color: '#94a3b8', fontSize: '0.8rem' }}>تحليلات مالية دقيقة بعد خصم المرتجعات</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}