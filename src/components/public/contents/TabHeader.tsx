'use client';
import React, { useState } from 'react';
import Dashboard from '@/svg/Dashboard';

interface ContentsProps {
    tabHeader: string;
    tabIndex: string;
    activeTab: number;
    removeTab: (tabIndexToRemove: string) => void
    setActiveTab: (index: number) => void;
}


const TabHeaderComponent = ({ tabHeader, tabIndex, activeTab, setActiveTab, removeTab }: ContentsProps) => {

    const [openTab, setOpenTab] = useState<number>(0);
    const [clickStat, setClickState] = useState<number>(0)


    const changeIndex = (index: string) => {
        // setOpenTab(prevOpentab => prevOpentab + 1)
        const num: number = Number(index);
        setOpenTab(num)
        setClickState(num)
        setActiveTab(Number(tabIndex))
    }

    const handleRemoveTab = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // 탭 선택 이벤트 방지
        removeTab(tabIndex);
    };

    return (
        <>
            <li className="-mb-px mr-2 last:mr-0 flex text-center w-[20rem]]">
                <div
                    className={
                        "text-xs font-bold bolder-solid uppercase px-4 mt-2 shadow rounded block items-center justify-center w-[10rem] flex-1" +
                        (activeTab === Number(tabIndex)
                            ? "bg-white"
                            : "text-sky-600 bg-gray-200")
                    }
                    onClick={e => {
                        changeIndex(tabIndex)
                    }}
                    data-toggle="tab"
                    role="tablist">                    
                    <i className="fas fa-space-shuttle text-base mr-1"></i>{tabHeader}
                    <button onClick={handleRemoveTab} className="close-tab text-xs pl-[0.25rem] text-red-600 hover:animate-pulse fixed">
                        x
                    </button>
                </div>
            </li>
        </>
    );
};

export default TabHeaderComponent;
