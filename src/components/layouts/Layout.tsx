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
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>프로토타입 입니다.</title>
        </head>
        <body>
          <div className="relative h-screen">
            {/* 헤더 */}
            <div className="fixed top-0 left-0 w-full h-16 bg-blue-500 z-50">
              <Header />
            </div>

            {/* 사이드바 */}
            <div className="fixed top-16 left-0 w-64 h-full pt-4 pb-16 bg-green-500 overflow-y-auto z-40">
              <Side />
            </div>

            {/* 본문 콘텐츠 */}
            <div className="ml-64 mt-16 mb-16 pr-4">
              Main Content
            </div>

            {/* 푸터 */}
            <div className="fixed bottom-0 left-0 w-full h-16 bg-red-500 z-50">
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </>
  );
}

export default Layout;