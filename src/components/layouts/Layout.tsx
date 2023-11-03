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
      <Header />
      <Side />
      {contents}
      <Footer />
    </>
  );
}

export default Layout;