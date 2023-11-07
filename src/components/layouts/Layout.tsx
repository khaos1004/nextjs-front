import React, { ReactNode } from 'react';

import Header from '@/components/public/header/Navbar';
import Side from '@/components/public/side/Sidebar';
import Footer from '@/components/public/footer/Footer';

interface LayoutProps {
  contents: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ contents }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* 헤더 */}
        <header className="h-20">
          <Header />
        </header>

        {/* 사이드바 */}
        <div className="flex flex-grow overflow-hidden">
          {/* 사이드바 */}
          <aside className="fixed left-0 w-50 overflow-y-auto z-50">
            <Side />
          </aside>

          {/* 메인 콘텐츠 */}
          <main className="flex-grow overflow-y-auto ml-60">
            {contents}
          </main>
        </div>

        {/* 푸터 */}
        <footer className="flex-shrink-0 h-20">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;