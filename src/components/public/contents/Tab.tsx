'use client';
import React, { useState } from 'react';

// 탭 데이터를 위한 타입
type Tab = {
    id: number;
    title: string;
    content: string;
};

// 탭 컴포넌트
const Tabs = () => {
    // 탭 상태
    const [tabs, setTabs] = useState<Tab[]>([]);
    const [activeTab, setActiveTab] = useState<number | null>(null);

    // 탭 추가
    const addTab = (title: string, content: string) => {
        const newTab: Tab = {
            id: Date.now(), // 고유 ID 생성
            title,
            content,
        };
        setTabs([...tabs, newTab]);
        setActiveTab(newTab.id); // 새 탭 활성화
    };

    // 탭 선택
    const selectTab = (tabId: number) => {
        setActiveTab(tabId);
    };

    // 탭 닫기
    const closeTab = (tabId: number) => {
        setTabs(tabs.filter((tab) => tab.id !== tabId));
        if (activeTab === tabId) {
            setActiveTab(null);
        }
    };

    return (
        <div>
            <div>
                {/* 탭 헤더 */}
                {tabs.map((tab) => (
                    <button className="bg-gray-300" key={tab.id} onClick={() => selectTab(tab.id)}>
                        {tab.title}
                        <span onClick={() => closeTab(tab.id)}>x</span>
                    </button>
                ))}
                <button onClick={() => addTab('New Tab', 'New Content')}>+ Add Tab</button>
            </div>
            <div>
                {/* 탭 컨텐츠 */}
                {tabs.filter((tab) => tab.id === activeTab).map((tab) => (
                    <div key={tab.id}>{tab.content}</div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
