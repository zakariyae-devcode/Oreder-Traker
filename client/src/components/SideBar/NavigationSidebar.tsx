
"use client";

import React from 'react';
import Link from 'next/link';



import { usePathname } from 'next/navigation';

export default function NavigationSidebar() {
  const pathname = usePathname();

  // قائمة الروابط لسهولة إدارتها وتطبيق الـ Active والـ Hover تلقائياً
  const navItems = [
    { href: '/dashboard', label: 'اللوحة الرئيسية', icon: '📊' },
    { href: '/dashboard/orders', label: 'الطلبات', icon: '📦' },
    { href: '/dashboard/products', label: 'المنتجات', icon: '🏷️' },
    { href: '/dashboard/customers', label: 'الزبائن', icon: '👥' },
    { href: '/dashboard/profile', label: 'الحساب الشخصي', icon: '👤' },
  ];

  return (
    <aside 
      className="d-flex flex-column p-3 border-start border-secondary border-opacity-25 min-vh-100 position-sticky top-0"
      style={{ 
        width: '260px', 
        minWidth: '260px',
        backgroundColor: '#0a1d28',
        zIndex: 1000
      }}
    >
      {/* 1. شعار التطبيق ورابط الصفحة الرئيسية */}
      <Link 
        href="/dashboard" 
        className="text-decoration-none d-flex align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25 px-2 rounded-3 p-1 transition-all"
        style={{
          transition: 'all 0.2s ease-in-out'
        }}
      >
        <div 
          className="rounded-3 d-flex align-items-center justify-content-center fw-bold shadow"
          style={{ 
            width: '40px', 
            height: '40px', 
            background: 'linear-gradient(135deg, #d4af37 0%, #115e59 100%)', 
            color: '#fff',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            fontSize: '1.2rem'
          }}
        >
          ت
        </div>
        <div>
          <span className="fw-bold fs-6 text-white d-block lh-1">متتبع الطلبات</span>
          <span className="small" style={{ fontSize: '0.75rem', color: '#d4af37' }}>Orders Tracker 🇲🇦</span>
        </div>
      </Link>

      {/* 2. الروابط الرئيسية مع تأثير الـ Hover */}
      <nav className="nav nav-pills flex-column gap-2 mb-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`nav-link d-flex align-items-center gap-3 py-2.5 px-3 rounded-3 position-relative ${
                isActive ? 'active text-white' : 'text-secondary'
              }`}
              style={{ 
                background: isActive 
                  ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(17, 94, 89, 0.35) 100%)' 
                  : 'transparent',
                borderRight: isActive ? '4px solid #d4af37' : '4px solid transparent',
                color: isActive ? '#fff' : '#94a3b8',
                transition: 'all 0.25s ease-in-out',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                  e.currentTarget.style.color = '#d4af37';
                  e.currentTarget.style.borderRight = '4px solid rgba(212, 175, 55, 0.5)';
                  e.currentTarget.style.transform = 'translateX(-3px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.borderRight = '4px solid transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }
              }}
            >
              <span className="fs-5">{item.icon}</span>
              <span className={isActive ? 'fw-bold' : 'fw-semibold'}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* 3. التذييل السفلي (زر تسجيل الخروج) مع Hover مميز باللون الأحمر */}
      <div className="pt-3 border-top border-secondary border-opacity-25 px-2">
        <Link 
          href="/login" 
          className="btn btn-sm w-100 text-danger border border-danger border-opacity-25 rounded-3 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
          style={{ 
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            transition: 'all 0.25s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.25)';
            e.currentTarget.style.borderColor = '#ef4444';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.25)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span>تسجيل الخروج</span>
          <span>←</span>
        </Link>
      </div>
    </aside>
  );
}