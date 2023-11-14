import React from 'react';
import TabHeaderComponent from '@/components/public/contents/TabHeader';
import TabContentsComponent from '@/components/public/contents/TabContents';

interface TabData {
    tabHeader: string;
    tabContents: string;
    tabIndex: string;
}

interface TabLayoutProps {
    tabs: TabData[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    removeTab: (tabIndex: string) => void;
}

const TabLayoutComponent: React.FC<TabLayoutProps> = ({ tabs, activeTab, setActiveTab, removeTab }) => {
    return (
        <>
            <ul className="flex mb-0 list-none flex-wrap pt-2 pb-4 flex-row" role="tablist">
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
        </>
    );
};

export default TabLayoutComponent;
