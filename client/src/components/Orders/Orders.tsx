import NavigationSidebar from '../SideBar/NavigationSidebar';
import MainContent from './MainContent';

export default function Orders() {
 return (
    <div 
      className="min-vh-100 w-100 d-flex text-end" 
      style={{ backgroundColor: '#06141b', color: '#f3f4f6', fontFamily: 'Amiri, Cairo, Tahoma, sans-serif' }} 
      dir="rtl"
    >
      
      {/* 1. الشريط الجانبي (Sidebar Navigation) */}
      <NavigationSidebar/>

      {/* 2. المحتوى الرئيسي لصفحة الطلبات */}
      <MainContent/>
      

    </div>
  );
}