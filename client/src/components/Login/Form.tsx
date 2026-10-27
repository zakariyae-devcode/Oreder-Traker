'use client';
import Link from 'next/link';
import {useState,useEffect} from "react";
import { useAuth } from '@/src/hooks/useAuth';
export default function Form(){

  const {login,loading,error}=useAuth();
  const [formData,setFormData]=useState({username:"",password:""});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage,setErrorMessage]=useState<String|null>(null);


  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 1000); 
      
      return () => clearTimeout(timer); 
    }
  }, [successMessage]);

  
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  
  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setSuccessMessage(null);
    try{

      await login(formData);
      setSuccessMessage("تم تسجيل الدخول بنجاح")

      setFormData({
      username: '',
      password: '',
     
    });
    }catch(error){
      const msg =  'فشل تسجيل الدخول، يرجى التحقق من البيانات والمحاولة مجدداً.';

      setErrorMessage(msg);
    }

  };

  return(
    <>
      <div className="col-lg-5 d-flex flex-column justify-content-between p-4 p-md-5 z-2 border-start border-warning border-opacity-25" style={{ backgroundColor: '#0a1d28' }}>
      {successMessage && (
        <div 
          className="alert alert-success text-end py-2 px-3 rounded-3 mb-3 border-0" 
          role="alert" 
          style={{ backgroundColor: '#10b981', color: '#ffffff', fontSize: '0.9rem' }}
        >
          {successMessage}
        </div>
      )}

      {/* عرض رسالة الخطأ إن وجدت */}
      {errorMessage && (
        <div 
          className="alert alert-danger text-end py-2 px-3 rounded-3 mb-3 border-0" 
          role="alert" 
          style={{ fontSize: '0.9rem' }}
        >
          {errorMessage}
        </div>
      )}
          
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
               
              </div>
              <div>
                <span className="fw-bold fs-5 text-white d-block lh-1" style={{ letterSpacing: '0.5px' }}>متتبع الطلبات</span>
                <span className="small" style={{ fontSize: '0.8rem', color: '#d4af37' }}>Orders Tracker 🇲🇦</span>
              </div>
            </div>
            <span className="badge rounded-pill border px-3 py-2" style={{ backgroundColor: 'rgba(17, 94, 89, 0.2)', color: '#2dd4bf', borderColor: '#115e59' }}>
              بوابة التجار
            </span>
          </div>

          {/* محتوى النموذج */}
          <div className="my-auto py-3" style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
            <div className="mb-4">
              <h2 className="fw-bold text-white mb-2 fs-3" style={{ fontFamily: 'Amiri, serif' }}>مرحباً بك في رحاب المتجر</h2>
              <p className="small m-0" style={{ color: '#94a3b8' }}>سجل دخولك لإدارة طلبيات متجرك ومتابعة أرباحك الصافية بدقة</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* البريد الإلكتروني / اسم المستخدم */}
              <div className="mb-3">
                <label className="form-label small fw-bold mb-1" style={{ color: '#cbd5e1' }}>
                  البريد الإلكتروني أو اسم المستخدم
                </label>
                <input 
                  type="text" 
                  name='username'
                  value={formData.username}
                  onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                  className="form-control py-3 px-3 rounded-3 text-white text-end border shadow-none"
                  style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                  placeholder="merchant@store.ma" 
                  required 
                />
              </div>

              {/* كلمة المرور */}
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label small fw-bold m-0" style={{ color: '#cbd5e1' }}>
                    كلمة المرور
                  </label>
                  <a href="#" className="small text-decoration-none fw-bold" style={{ color: '#d4af37' }}>
                    نسيت كلمة السر؟
                  </a>
                </div>
                <input 
                  type="password"
                  value={formData.password}
                  name='password'
                  onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                  className="form-control py-3 px-3 rounded-3 text-white text-end border shadow-none"
                  style={{ backgroundColor: '#06141b', borderColor: '#1e293b', fontSize: '0.95rem' }}
                  placeholder="••••••••" 
                  required 
                />
              </div>

              {/* معالجة الـ Checkbox وإعطاء مسافة صحيحة بعيدة عن النص */}
              <div className="d-flex align-items-center mb-4 pt-1">
                <input 
                  className="form-check-input m-0 cursor-pointer" 
                  type="checkbox" 
                  id="remember" 
                  style={{ width: '18px', height: '18px', backgroundColor: '#06141b', borderColor: '#334155' }}
                />
                <label className="form-check-label small user-select-none cursor-pointer ms-2" htmlFor="remember" style={{ color: '#94a3b8' }}>
                  تذكر الجلسة على هذا الجهاز
                </label>
              </div>

              {/* زر الدخول بلون أندلسي فاخر (ذهبي/نحاسي) */}
              <button 
                type="submit" 
                className="btn w-100 py-3 rounded-3 fw-bold shadow transition-all"
                style={{ 
                  background: 'linear-gradient(135deg, #d4af37 0%, #b45309 100%)', 
                  color: '#06141b',
                  border: 'none',
                  letterSpacing: '0.5px'
                }}
              >
                الدخول إلى لوحة التحكم ←
              </button>
            </form>

            <div className="mt-4 pt-3 border-top text-center" style={{ borderColor: '#1e293b !important' }}>
              <p className="small m-0" style={{ color: '#94a3b8' }}>
                ليس لديك حساب تجاري؟{' '}
                <Link href="/register" className="fw-bold text-decoration-none ms-1" style={{ color: '#d4af37' }}>
                  سجل متجرك الآن
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
        
        
    </>
  )
}