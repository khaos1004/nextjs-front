"use client";
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import TabHeader from '@/components/tabs/TabHeader';
import TabContents from '@/components/tabs/TabContents';


type Datatype = {
  tabHeader: string;
  contents: React.ReactNode;
}

const Home : React.FC<Datatype> = ({ tabHeader, contents }) =>{
  // 현재 활성화된 탭의 상태를 설정합니다.
  const [activeTab, setActiveTab] = useState<string>('');

  // 탭을 클릭했을 때 호출되는 함수입니다.
  const changeTab = (newActiveTab: string) => {
    setActiveTab(newActiveTab);
  };


  const router = useRouter();

  // // URL 쿼리에서 탭 상태를 업데이트
  // useEffect(() => {    
  //   if (router.isReady) {
  //     // 쿼리 파라미터의 타입을 확인합니다.
  //     const tab = router.query.tab;

  //     // 쿼리 파라미터가 문자열인 경우에만 상태를 업데이트합니다.
  //     if (typeof tab === 'string') {
  //       setActiveTab(tab);
  //     }
  //   }
  // }, [router.isReady, router.query.tab]);

  return (
    <>
      <div className={`mx-auto  ${activeTab === '' ? '' : 'hidden'}`}>
        <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
          <ul className="flex flex-wrap -mb-px" role="tablist">
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2
                                ${activeTab === 'profile' ? 'text-gray-800 border-gray-600' : 'text-gray-500 border-transparent'}`}
                onClick={() => changeTab('profile')}
                role="tab"
              >
                {tabHeader}
              </button>
            </li>
            {/* <li className="mr-2" role="presentation">
              <button
                className={`inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2
                                ${activeTab === 'dashboard' ? 'text-gray-800 border-gray-600' : 'text-gray-500 border-transparent'}`}
                onClick={() => changeTab('dashboard')}
                role="tab"
              >
                Dashboard
              </button>
            </li> */}
          </ul>
        </div>
        <div id="Contents">
          {/* 조건부 렌더링을 사용하여 현재 활성화된 탭에 해당하는 컨텐츠만 표시합니다. */}
          <div className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${activeTab === 'profile' ? '' : 'hidden'}`} role="tabpanel">
            <TabContents content={contents} />
          </div>
          {/* <div className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${activeTab === 'dashboard' ? '' : 'hidden'}`} role="tabpanel">
            <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content for the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>.</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;