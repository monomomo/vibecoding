'use client';

import Link from 'next/link';
import { resumeData } from '@/data/resume';

export default function Header() {
  const { personalInfo } = resumeData;
  const navItems = [
    { label: '关于', href: '#about' },
    { label: '经历', href: '#experience' },
    { label: '技能', href: '#skills' },
    { label: '项目', href: '#projects' },
    { label: '联系', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold text-gray-900 tracking-tight hover:text-gray-700 transition-colors"
        >
          {personalInfo.name}
        </Link>
        
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link 
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}