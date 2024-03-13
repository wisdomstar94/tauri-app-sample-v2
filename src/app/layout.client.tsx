"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface Menu {
  name: string;
  href: string;
}

export function RootLayoutClient(props: { children: ReactNode }) {
  const pathname = usePathname();
  const [menus, _] = useState<Menu[]>([
    { name: '/', href: '/' },
    { name: '/test/invoke-handler', href: '/test/invoke-handler' },
  ]);
  const [activeMenuHref, setActiveMenuHref] = useState<string>();

  useEffect(() => {
    for (const item of menus) {
      if (item.href === pathname) {
        setActiveMenuHref(item.href);
      }
    }
  }, [menus, pathname]);

  return (
    <>
      <main className="w-full box-border p-2 gap-2 flex flex-wrap relative text-xs text-slate-700">
        <div className="w-full box-border gap-2 flex flex-wrap relative border-b border-b-slate-500 border-dashed pb-2">
          <ul className="inline-flex flex-wrap gap-2 relative">
            {
              menus.map(item => {
                return (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className={`
                        inline-flex border border-slate-300 rounded-sm cursor-pointer hover:bg-slate-100 px-2 py-0.5
                        ${activeMenuHref === item.href ? 'bg-slate-600 text-white hover:bg-slate-800' : ''}
                      `}>
                      { item.name }
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="w-full box-border gap-2 flex flex-wrap relative">
          { props.children }
        </div>
      </main>
    </>
  );
}