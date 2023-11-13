'use client';
import React, { useState } from 'react';

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
            <li className="-mb-px mr-2 last:mr-0 flex text-center">
                <button
                    className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (activeTab === Number(tabIndex)
                            ? "text-white  bg-gray-600"
                            : "text-blueGray-600 bg-white")
                    }
                    onClick={e => {
                        changeIndex(tabIndex)
                    }}
                    data-toggle="tab"
                    role="tablist"
                >
                    <i className="fas fa-space-shuttle text-base mr-1"></i> {tabHeader}
                    <button onClick={handleRemoveTab} className="close-tab text-xs pl-[0.75rem] text-red-600 hover:animate-pulse">
                        X
                    </button>
                </button>
            </li>
        </>
    );
};

export default TabHeaderComponent;
