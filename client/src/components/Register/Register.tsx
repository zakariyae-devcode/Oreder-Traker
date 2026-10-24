
import Form from './Form';

export default function Register() {
  return (
    <div className="min-vh-100 w-100 p-0 text-end" style={{ backgroundColor: '#06141b', color: '#f3f4f6', fontFamily: 'Amiri, Cairo, Tahoma, sans-serif' }} dir="rtl">
      <div className="row g-0 min-vh-100">
        
        {/* الجانب الأيمن: نموذج إنشاء الحساب (مقسم بشكل نظيف ومريح للعين) */}
         <Form/>

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