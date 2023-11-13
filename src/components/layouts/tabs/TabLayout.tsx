"use client"

import { createContext, useContext, useState } from 'react';
import Header from '@/components/public/header/Navbar';
import Aside from '@/components/public/side/Sidebar';
import Footer from '@/components/public/footer/Footer';
import MenuContext from '@/contexts/MenuContext';
import Contents from '@/components/public/contents/TabHeader';
import TabContentsComponent from '@/components/public/contents/TabContents';
import TabHeaderComponent from '@/components/public/contents/TabHeader';


interface TabData {
    tabHeader: string;
    tabContents: string;
    tabIndex: string
}


export default function RootLayout() {
    const [headerData, setHeaderData] = useState<string>('groupWare'); // 메뉴를 위한 상태
    const [tabData, setTabData] = useState<TabData>({ tabHeader: '', tabContents: '', tabIndex: '1' }); // tab을 위한 상태
    const dataMenu = useContext(MenuContext);

    const [tabs, setTabs] = useState<TabData[]>([]);

    const addTab = (newTab: TabData) => {
        setTabs(prevTabs => [...prevTabs, newTab]);
    };

    return (
        <div className="flex h-screen">
            {/* 헤더 */}
            <header className="h-[5rem] fixed top-0 w-full">
                <Header setHeaderData={setHeaderData} />
            </header>

            <div className="flex">
                {/* 사이드바 */}
                <aside className="left-0 bg-gray-400 w-64 h-[100%] pr-2 mt-[3rem] px-5 pt-[6rem] shadow">
                    <Aside setTabData={setTabData} setHeaderData={headerData} />
                    {/* <AsideTest /> */}
                </aside>

                {/* 메인 콘텐츠 */}
                {/* <main className="min-h-[45rem] mt-[4rem] px-5 py-5 flex-grow">
                    <Contents tabHeader={tabData.tabHeader} tabContents={tabData.tabContents} tabIndex={tabData.tabIndex} />
                </main> */}
                <main className="min-h-[45rem] mt-[4rem] px-5 py-5 flex-grow">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                                <TabHeaderComponent tabHeader={tabData.tabHeader} tabIndex={tabData.tabIndex} />
                            </ul>
                            <div className="flex flex-col min-w-0 break-words bg-white w-[100%] mb-6 shadow-lg">
                                <TabContentsComponent tabContents={tabData.tabContents} tabIndex={tabData.tabIndex} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* 푸터 */}
            <footer className="bottom-0 w-full fixed">
                <Footer />
            </footer>
        </div>
    )
}
