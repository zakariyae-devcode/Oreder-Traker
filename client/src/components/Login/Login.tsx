import React from 'react';
import Form from './Form';


export default function Login() {
  return (
    <div className="min-vh-100 w-100 p-0 text-end" style={{ backgroundColor: '#06141b', color: '#f3f4f6', fontFamily: 'var(--font-geist-sans), Amiri, Tahoma, sans-serif' }} dir="rtl">
      <div className="row g-0 min-vh-100">
        
        {/* الجانب الأيمن: نموذج تسجيل الدخول (هوية أندلسية عصرية دافئة) */}
          <Form/>

        {/* الجانب الأيسر: لوحة العرض التفاعلي بألوان الزليج والزمرد الأندلسي */}
        <div className="col-lg-7 d-none d-lg-flex flex-column justify-content-center p-5 position-relative overflow-hidden" style={{ backgroundColor: '#06141b' }}>
          
          {/* إضاءة خلفية ناعمة مستوحاة من قصور الأندلس */}
          <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 rounded-circle pointer-events-none opacity-10" style={{ background: 'radial-gradient(circle, #115e59 0%, #d4af37 60%, transparent 80%)', filter: 'blur(110px)' }} />

          <div className="position-relative z-1 max-w-xl mx-auto w-100">
            
            <div className="mb-4">
              <span className="badge py-2 px-3 rounded-pill border mb-3" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                ✨ الأداة الأولى للبائعين بالمغرب
              </span>
              <h1 className="fw-extrabold display-6 text-white mb-3" style={{ fontFamily: 'Amiri, serif', lineHeight: '1.3' }}>
                تتبع طلبات متجرك بكل ألق واحترافية <br />
                <span style={{ color: '#2dd4bf' }}>بدون ضياع في المرتجعات والأرباح</span>
              </h1>
              <p style={{ color: '#94a3b8' }}>
                ربط مباشر مع واتساب لتأكيد الطلبات، حساب دقيق لصافي الأرباح الحقيقية، وإدارة دورة حياة الشحن بتصميم يجمع أصالة التراث وحداثة التكنولوجيا.
              </p>
            </div>

            {/* بطاقة إحصائيات أندلسية أنيقة */}
            <div className="p-4 rounded-4 border shadow-2xl" style={{ backgroundColor: 'rgba(10, 29, 40, 0.85)', borderColor: 'rgba(17, 94, 89, 0.4)', backdropFilter: 'blur(12px)' }}>
              
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="p-3 rounded-3" style={{ backgroundColor: '#06141b', borderRight: '4px solid #d4af37' }}>
                    <span className="small d-block mb-1" style={{ color: '#94a3b8' }}>الطلبات المؤكدة اليوم</span>
                    <span className="fs-4 fw-bold text-white">64 طلب</span>
                    <span className="badge bg-success-subtle text-success ms-2 small">+24%</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 rounded-3" style={{ backgroundColor: '#06141b', borderRight: '4px solid #2dd4bf' }}>
                    <span className="small d-block mb-1" style={{ color: '#94a3b8' }}>صافي الأرباح الحقيقية</span>
                    <span className="fs-4 fw-bold" style={{ color: '#2dd4bf' }}>18,200 د.م</span>
                  </div>
                </div>
              </div>

              {/* معاينة طلب */}
              <div className="p-3 rounded-3 border d-flex align-items-center justify-content-between" style={{ backgroundColor: '#0a1d28', borderColor: '#1e293b' }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(45, 212, 191, 0.15)', color: '#2dd4bf' }}>
                    ✓
                  </div>
                  <div>
                    <span className="fw-bold text-white d-block small">طلب جديد #OT-9042</span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>فاس العتيقة • 420 درهم</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-warning bg-opacity-15 text-warning small border border-warning border-opacity-25">قيد التأكيد</span>
                  <button className="btn btn-sm d-flex align-items-center gap-1 rounded-2 py-1 px-3 fw-bold text-dark" style={{ fontSize: '0.8rem', backgroundColor: '#25D366', border: 'none' }}>
                    تأكيد بـ WhatsApp
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}