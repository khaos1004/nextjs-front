"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { createContext } from 'react';
import Header from '@/components/public/header/Navbar';
import Aside from '@/components/public/side/Sidebar';
import Footer from '@/components/public/footer/Footer';
import MenuContext from '@/contexts/MenuContext';

type dataType = {
  Dashboard: string;
}
const inter = Inter({ subsets: ['latin'] })

const dataContext = createContext('aaa');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    
      <html lang="en">
        <body className={inter.className}>
          <div className="flex h-screen">
            {/* 헤더 */}
            <header className="h-[5rem] fixed top-0 w-full">
              <Header />
            </header>

          <MenuContext.Provider value ={'Dashboard'}>
            <div className="flex">
              {/* 사이드바 */}
              <aside className="left-0 bg-gray-400 w-64 h-[100%] pr-2 mt-[3rem] px-5 pt-[6rem] shadow">
                <Aside />
                {/* <AsideTest /> */}
              </aside>
    
              {/* 메인 콘텐츠 */}
              <main className="min-h-[45rem] mt-[4rem] px-5 py-5 flex-grow">   

                {children}
              </main>
            </div>
            </MenuContext.Provider>

            {/* 푸터 */}
            <footer className="bottom-0 w-full fixed">
              <Footer />
            </footer>
          </div>
        </body>
      </html>    
  )
}
