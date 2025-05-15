"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children, className, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  const baseClasses = "hover:text-red-500 transition-colors";
  const activeClasses = isActive ? "text-red-500" : "";
  
  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${activeClasses} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}