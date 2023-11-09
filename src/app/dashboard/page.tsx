"use client";
import React, { useState } from 'react';

type Datatype<T> = {
  tabHeader: string;
  contents: T;
}

const TabsCustomAnimation = <T,>( {tabHeader, contents} : Datatype<T> ) => {
    // 현재 활성화된 탭의 상태를 설정합니다.
    const [activeTab, setActiveTab] = useState<string>('profile');

    // 탭을 클릭했을 때 호출되는 함수입니다.
    const changeTab = (newActiveTab: string) => {
        setActiveTab(newActiveTab);
    };

    return (
        <>
            <div className="mx-auto">
                <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                    <ul className="flex flex-wrap -mb-px" role="tablist">
                        <li className="mr-2" role="presentation">
                            <button
                                className={`inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2
                                ${activeTab === 'profile' ? 'text-gray-800 border-gray-600' : 'text-gray-500 border-transparent'}`}
                                onClick={() => changeTab('profile')}
                                role="tab"
                            >
                                Profile
                            </button>
                        </li> 
                        <li className="mr-2" role="presentation">
                            <button
                                className={`inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2
                                ${activeTab === 'dashboard' ? 'text-gray-800 border-gray-600' : 'text-gray-500 border-transparent'}`}
                                onClick={() => changeTab('dashboard')}
                                role="tab"
                            >
                                Dashboard
                            </button>
                        </li>                        
                    </ul>
                </div>
                <div id="Contents">
                    {/* 조건부 렌더링을 사용하여 현재 활성화된 탭에 해당하는 컨텐츠만 표시합니다. */}
                    <div className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${activeTab === 'profile' ? '' : 'hidden'}`} role="tabpanel">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content for the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.</p>
                    </div>
                    <div className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${activeTab === 'dashboard' ? '' : 'hidden'}`} role="tabpanel">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content for the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>.</p>
                    </div>                    
                </div>
            </div>
        </>
    );
};

export default TabsCustomAnimation;
