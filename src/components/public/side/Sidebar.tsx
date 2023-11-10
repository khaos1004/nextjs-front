"use client";

import DashboardIcon from '@/svg/DashboardIcon'
import ProductIcon from '@/svg/ProductIcon'
import PerformanceIcon from '@/svg/PerformanceIcon'
import DeliverablesIcon from '@/svg/DeliverablesIcon'
import InvoicesIcon from '@/svg/InvoicesIcon'
import InventoryIcon from '@/svg/InventoryIcon'
import SettingIcon from '@/svg/SettingsIcon'
import BellIcon from '@/svg/bell'
import { useState, useEffect, useContext, createContext } from "react";
import Home from '@/app/page';
import { useRouter } from 'next/navigation';
import dataContext from '@/contexts/MenuContext' 



// 메뉴 아이템을 위한 타입 정의
type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

type items = {
    Icon: IconType;
    name: string;
    url: string;
};


const data: items[] = [
    { Icon: DashboardIcon, name: 'Dashboard', url: "/dashboard" },
    { Icon: ProductIcon, name: 'Product', url: "/?tab=settings" },
    { Icon: PerformanceIcon, name: 'Performance', url: "/" },
    { Icon: DeliverablesIcon, name: 'Deliverables', url: "/" },
    { Icon: InvoicesIcon, name: 'Invoices', url: "/" },
    { Icon: InventoryIcon, name: 'Inventory', url: "/" },
    { Icon: SettingIcon, name: 'Settings', url: "/" },
];

// const data: items[] = [
//     { id: 'DashboardIcon', label: 'Dashboard' },
//     { id: 'product', label: 'Products' },
//     { id: 'performance', label: 'Performance' },
//     { id: 'deliverables', label: 'Deliverables' },
//     { id: 'invoices', label: 'Invoices' },
//     { id: 'inventory', label: 'Inventory' },
//     { id: 'setting', label: 'Settings' },
// ];




export default function Aside() {
    const data1 = useContext(dataContext);
    const MyContext = createContext(['Dashboard', '하야부시']);
    // const TestContexte = useContext(SideDataContext);
    
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("Dashboard");

    const handleButtonClick = (tabheader: string, tabContents: string) => {
        setActiveTab(tabheader);
        router.push('/');
        <Home tabContents={tabContents} tabHeader={tabheader} />
    };

    // useEffect(() => {    
    //     const tab = router.
    //     if (router.isReady) {
    //     //   const tab = router.query.tab;
    //       if (typeof tab === 'string') {
    //         setActiveTab(tab);
    //       }
    //     }
    //   }, [router.isReady, router.query.tab]);

    return (
        <>
            <div className="flex-col justify-between flex">
                <div className="px-8">
                    <ul>
                        {data.map((value, index) => (
                            <li key={index} className="flex w-full justify-between text-white-100 cursor-pointer items-center mb-6">
                                <button className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <value.Icon />
                                    {/* <Link href> */}
                                        <span onClick={() => handleButtonClick(value.name, value.url)} className={`text-sm ml-2 ${activeTab == value.name ? "font-bold" : "opacity-40"}`}>{value.name}</span>
                                    {/* </Link> */}
                                </button>
                                <button className="animate-pulse rounded-full py-1 px-2 bg-white text-white-400 flex items-center justify-center text-xs"><BellIcon />5</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="my-12 border-t border-gray-800">
                    <ul className="flex items-center justify-evenly pr-2">
                        <li className="cursor-pointer text-white-800 pt-5 pb-3">
                            <button aria-label="open chats" className="focus:outline-none focus:ring-2 rounded focus:ring-white">
                                <BellIcon />
                            </button>
                        </li>
                        <li className="cursor-pointer text-white-800 pt-5 pb-3">
                            <button aria-label="open chats" className="focus:outline-none focus:ring-2 rounded focus:ring-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                                    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                                </svg>
                            </button>
                        </li>
                        <li className="cursor-pointer text-white-800 pt-5 pb-3">
                            <button aria-label="open settings" className="focus:outline-none focus:ring-2 rounded focus:ring-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </button>
                        </li>
                        <li className="cursor-pointer text-white-800 pt-5 pb-3">
                            <button aria-label="open logs" className="focus:outline-none focus:ring-2 rounded focus:ring-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <rect x="3" y="4" width="18" height="4" rx="2"></rect>
                                    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                                    <line x1="10" y1="12" x2="14" y2="12"></line>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}