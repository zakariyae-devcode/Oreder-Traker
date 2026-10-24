import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div 
      className="min-vh-100 w-100 text-end text-white position-relative overflow-hidden" 
      style={{ 
        backgroundColor: '#06141b', 
        fontFamily: 'Amiri, Cairo, Tahoma, sans-serif' 
      }} 
      dir="rtl"
    >
      
      {/* إضاءة دافئة خلفية مستوحاة من أجواء التراث الأندلسي */}
      <div 
        className="position-absolute top-0 start-50 translate-middle-x pointer-events-none opacity-20"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, #d4af37 0%, #115e59 50%, transparent 80%)',
          filter: 'blur(120px)'
        }}
      />

      {/* 1. شريط التنقل العلوي (Navbar) */}
      <header className="border-bottom border-secondary border-opacity-25 sticky-top bg-opacity-90 backdrop-blur" style={{ backgroundColor: '#0a1d28' }}>
        <div className="container py-3 d-flex align-items-center justify-content-between">
          
          {/* الشعار واسم التطبيق */}
          <div className="d-flex align-items-center gap-3">
            <div 
              className="rounded-3 d-flex align-items-center justify-content-center fw-bold shadow-lg"
              style={{ 
                width: '42px', 
                height: '42px', 
                background: 'linear-gradient(135deg, #d4af37 0%, #115e59 100%)', 
                color: '#fff',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                fontSize: '1.2rem'
              }}
            >
              ت
            </div>
            <div>
              <span className="fw-bold fs-5 text-white d-block lh-1">متتبع الطلبات</span>
              <span className="small text-warning" style={{ fontSize: '0.75rem', color: '#d4af37' }}>Orders Tracker 🇲🇦</span>
            </div>
          </div>

          {/* أزرار الهيدر */}
          <div className="d-flex align-items-center gap-3">
            <Link 
              href="/login" 
              className="btn px-4 py-2 rounded-3 fw-bold shadow transition-all"
              style={{ 
                background: 'linear-gradient(135deg, #d4af37 0%, #b45309 100%)', 
                color: '#06141b',
                border: 'none'
              }}
            >
              تسجيل الدخول ←
            </Link>
          </div>

        </div>
      </header>

      {/* 2. القسم الرئيسي (Hero Section) */}
      <section className="py-5 my-md-4 position-relative z-1">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-8">
              
              <span 
                className="badge py-2 px-3 rounded-pill border mb-4 d-inline-block"
                style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', borderColor: 'rgba(212, 175, 55, 0.3)' }}
              >
                ✨ المنصة الذكية للتجارة الإلكترونية بالمغرب
              </span>

              <h1 className="display-4 fw-extrabold text-white mb-4 lh-base">
                إدارة وتتبع طلبات متجرك <br />
                <span style={{ color: '#2dd4bf' }}>بدون ضياع في المرتجعات والأرباح</span>
              </h1>

              <p className="lead mb-5 text-secondary fs-5" style={{ color: '#94a3b8' }}>
                تطبيق مصمم خصيصاً لبائعي التجارة الإلكترونية عبر (WhatsApp, Instagram, TikTok, Facebook)، يُمكّنك من تتبع الشحنات، تأكيد الطلبيات بضغطة زر، وحساب صافي أرباحك الحقيقية.
              </p>

              {/* أزرار الدعوة للإجراء (CTA) */}
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link 
                  href="/login" 
                  className="btn btn-lg px-5 py-3 rounded-3 fw-bold text-dark shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #d4af37 0%, #e6ca65 100%)', border: 'none' }}
                >
                  الدخول إلى منصتك الآن
                </Link>
                <a 
                  href="#features" 
                  className="btn btn-lg px-4 py-3 rounded-3 fw-semibold text-white border border-secondary border-opacity-50"
                  style={{ backgroundColor: 'rgba(10, 29, 40, 0.6)' }}
                >
                  استكشف مميزات المنصة
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. قسم ميزات المنصة (Features Cards) */}
      <section id="features" className="py-5 position-relative z-1">
        <div className="container py-4">
          
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white mb-2 fs-2">كل ما تحتاجه لإدارة متجرك بكفاءة</h2>
            <p className="text-secondary small">حلول متكاملة تضمن لك تحكم كامل في المبيعات والمرتجعات</p>
          </div>

          <div className="row g-4">
            
            {/* الميزة 1: إدارة وتتبع الطلبات */}
            <div className="col-md-6 col-lg-3">
              <div 
                className="p-4 rounded-4 border h-100 transition-all"
                style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.2)' }}
              >
                <div 
                  className="rounded-3 d-inline-flex p-3 mb-3"
                  style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)', color: '#d4af37' }}
                >
                  📦
                </div>
                <h4 className="fw-bold fs-5 text-white mb-2">تتبع دورة حياة الطلب</h4>
                <p className="small text-secondary m-0" style={{ color: '#94a3b8' }}>
                  متابعة حالة كل شحنة بدقة عبر جميع المراحل (جديد، مؤكَّد، مشحون، مُسلَّم، مرتجع).
                </p>
              </div>
            </div>

            {/* الميزة 2: تأكيد سريع عبر واتساب */}
            <div className="col-md-6 col-lg-3">
              <div 
                className="p-4 rounded-4 border h-100 transition-all"
                style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(45, 212, 191, 0.2)' }}
              >
                <div 
                  className="rounded-3 d-inline-flex p-3 mb-3"
                  style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)', color: '#25D366' }}
                >
                  💬
                </div>
                <h4 className="fw-bold fs-5 text-white mb-2">تأكيد مباشر بـ WhatsApp</h4>
                <p className="small text-secondary m-0" style={{ color: '#94a3b8' }}>
                  زر مباشر يفتح واتساب مع قالب رسالة جاهز ومخصص لتأكيد العنوان والطلب مع الزبون بضغطة واحدة.
                </p>
              </div>
            </div>

            {/* الميزة 3: التحليلات الأرباح */}
            <div className="col-md-6 col-lg-3">
              <div 
                className="p-4 rounded-4 border h-100 transition-all"
                style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.2)' }}
              >
                <div 
                  className="rounded-3 d-inline-flex p-3 mb-3"
                  style={{ backgroundColor: 'rgba(45, 212, 191, 0.15)', color: '#2dd4bf' }}
                >
                  📊
                </div>
                <h4 className="fw-bold fs-5 text-white mb-2">حساب صافي الأرباح</h4>
                <p className="small text-secondary m-0" style={{ color: '#94a3b8' }}>
                  حساب تلقائي لصافي الأرباح الحقيقية بعد خصم مصاريف التوصيل وتكلفة المرتجعات.
                </p>
              </div>
            </div>

            {/* الميزة 4: حسابات خاصة للتجار */}
            <div className="col-md-6 col-lg-3">
              <div 
                className="p-4 rounded-4 border h-100 transition-all"
                style={{ backgroundColor: '#0a1d28', borderColor: 'rgba(212, 175, 55, 0.2)' }}
              >
                <div 
                  className="rounded-3 d-inline-flex p-3 mb-3"
                  style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)', color: '#d4af37' }}
                >
                  🔐
                </div>
                <h4 className="fw-bold fs-5 text-white mb-2">حساب مستقل لكل بائع</h4>
                <p className="small text-secondary m-0" style={{ color: '#94a3b8' }}>
                  لوحة تحكم وتوثيق آمن ومستقل تماماً لكل تاجر للحفاظ على سرية البيانات والطلبات.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. تذييل الصفحة (Footer) */}
      <footer className="border-top border-secondary border-opacity-25 py-4 mt-5" style={{ backgroundColor: '#040d12' }}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-secondary small">
          <div>
            <span className="text-white fw-bold">Orders Tracker</span> © 2026 • جميع الحقوق محفوظة
          </div>
          <div>
            صُنع بهوية مغربية أندلسية أصيلة 🇲🇦
          </div>
        </div>
      </footer>

    </div>
  );
}