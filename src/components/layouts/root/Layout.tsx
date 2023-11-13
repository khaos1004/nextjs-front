"use client"

import { createContext, useContext, useState } from 'react';
import Header from '@/components/public/header/Navbar';
import Aside from '@/components/public/side/Sidebar';
import Footer from '@/components/public/footer/Footer';
import TabContentsComponent from '@/components/public/contents/TabContents';
import TabHeaderComponent from '@/components/public/contents/TabHeader';


interface TabData {
    tabHeader: string;
    tabContents: string;
    tabIndex: string
}


export default function RootLayout() {
    const [headerData, setHeaderData] = useState<string>('groupWare'); // 메뉴를 위한 상태    
    const [activeTab, setActiveTab] = useState<number>(0);
    const [tabs, setTabs] = useState<TabData[]>([]);
    const addTab = (newTab: TabData) => {        
        // 동일한 tabIndex를 가진 탭이 이미 있는지 검사
        const isTabAlreadyOpen = tabs.some(tab => tab.tabIndex === newTab.tabIndex);

        if (!isTabAlreadyOpen) {
            setTabs(prevTabs => [...prevTabs, newTab]);
        }
    };

    const removeTab = (tabIndexToRemove: string) => {
        setTabs(prevTabs => prevTabs.filter(tab => tab.tabIndex !== tabIndexToRemove));
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
                    <Aside setTabData={addTab} setHeaderData={headerData} />
                </aside>

                {/* 메인 콘텐츠 */}                
                <main className="min-h-[45rem] mt-[4rem] px-5 py-5 flex-grow">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                                {tabs.map((tab, index) => (
                                    <TabHeaderComponent key={index} tabHeader={tab.tabHeader} tabIndex={tab.tabIndex} activeTab={activeTab}
                                        setActiveTab={setActiveTab} removeTab={removeTab} />
                                ))}
                            </ul>
                            <div className="flex flex-col min-w-0 break-words bg-white w-[100%] mb-6 shadow-lg">
                                {tabs.map((tab, index) => (
                                    <TabContentsComponent key={index} tabContents={tab.tabContents} tabIndex={tab.tabIndex} activeTab={activeTab} />
                                ))}
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
