import React from 'react';
import Link from 'next/link';

import NavigationSidebar from '../SideBar/NavigationSidebar';
import MainContent from './MainContent';

export default function Dashboard() {
  return (
    <div 
      className="min-vh-100 w-100 text-end text-white d-flex" 
      style={{ 
        backgroundColor: '#06141b', 
        fontFamily: 'Amiri, Cairo, Tahoma, sans-serif' 
      }} 
      dir="rtl"
    >
      
      
      <NavigationSidebar/>
      <MainContent/>

      
    </div>
  );
}