"use client";

import Dashboard from '@/svg/Dashboard'
import Product from '@/svg/Product'
import Performance from '@/svg/Performance'
import Deliverables from '@/svg/Deliverables'
import Invoices from '@/svg/Invoices'
import Inventory from '@/svg/Inventory'
import Setting from '@/svg/Setting'
import Bell from '@/svg/bell'
import Message from '@/svg/message'
import Log from '@/svg/Log'
import { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from 'next/navigation';


// 메뉴 아이템을 위한 타입 정의
type svgType = React.FC<React.SVGProps<SVGSVGElement>>;

type items = {
    svg: svgType;
    name: string;
    url: string;
    index: string;
};

interface TabData {
    tabHeader: string;
    tabContents: string;
    tabIndex: string;
}

interface AsideProps {
    setHeaderData: string;
    // setTabData: React.Dispatch<React.SetStateAction<TabData>>;
    setTabData: (newTab: TabData) => void;
}

const groupWare: items[] = [
    { svg: Dashboard, name: 'Dashboard', url: "/dashboard", index: "1" },
    { svg: Product, name: 'Product', url: "/?tab=settings", index: "2" },
    { svg: Performance, name: 'Performance', url: "/", index: "3" },
    { svg: Deliverables, name: 'Deliverables', url: "/", index: "4" },
    { svg: Invoices, name: 'Invoices', url: "/", index: "5" },
    { svg: Inventory, name: 'Inventory', url: "/", index: "6" },
    { svg: Setting, name: 'Settings', url: "/", index: "7" },
];

const erp: items[] = [
    { svg: Dashboard, name: 'erp board', url: "/dashboard", index: "8" },
    { svg: Product, name: 'erp Product', url: "/?tab=settings", index: "9" },
    { svg: Performance, name: 'erp Performance', url: "/", index: "10" },
    { svg: Deliverables, name: 'epr Deliverables', url: "/", index: "11" },
    { svg: Invoices, name: 'erp Invoices', url: "/", index: "12" },
    { svg: Inventory, name: 'erp Inventory', url: "/", index: "13" },
    { svg: Setting, name: 'erp Settings', url: "/", index: "14" },
];




export default function Aside({ setHeaderData, setTabData }: AsideProps) {

    const router = useRouter();
    const [activeTab, setActiveTab] = useState("Dashboard");

    const handleButtonClick = (tabheader: string, tabContents: string, tabIndex: string) => {
        setActiveTab(tabheader);
        setTabData({ tabHeader: tabheader, tabContents: tabContents, tabIndex: tabIndex });
        // router.push('/');       

    };

    // headerData 값에 따라 사용할 배열을 결정
    const menuItems = setHeaderData === "erp" ? erp : groupWare;

    return (
        <>
            <div className="flex-col justify-between flex">
                <div className="px-8">
                    <ul>
                        {menuItems.map((value, index) => (
                            <li key={index} className="flex w-full justify-between text-white-100 cursor-pointer items-center mb-6">
                                <button className="flex items-center focus:outline-none focus:ring-2 focus:ring-white w-[12rem] flex-1">
                                    <value.svg />
                                    <span onClick={() => handleButtonClick(value.name, value.url, value.index)} className={`text-sm ml-2 ${activeTab == value.name ? "font-bold" : "opacity-40"}`}>{value.name}</span>
                                </button>
                                <button className="animate-pulse rounded-full py-1 px-2 bg-white text-white-400 flex items-center justify-center text-xs"><Bell />5</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="my-12 border-t border-gray-800">
                    <ul className="flex items-center justify-evenly pr-2">
                        <li className="cursor-pointer text-white-800 pt-5 pb-3">
                            <button aria-label="open chats" className="focus:outline-none focus:ring-2 rounded focus:ring-white">
                                <Bell />
                            </button>
                        </li>
                        <li className="cursor-pointer text-white-800 pt-5 pb-3">
                            <button aria-label="open chats" className="focus:outline-none focus:ring-2 rounded focus:ring-white">
                                <Message />
                            </button>
                        </li>
                        <li className="cursor-pointer text-white-800 pt-5 pb-3">
                            <button aria-label="open settings" className="focus:outline-none focus:ring-2 rounded focus:ring-white">
                                <Setting />
                            </button>
                        </li>
                        <li className="cursor-pointer text-white-800 pt-5 pb-3">
                            <button aria-label="open logs" className="focus:outline-none focus:ring-2 rounded focus:ring-white">
                                <Log />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}