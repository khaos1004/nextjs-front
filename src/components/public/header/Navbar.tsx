"use client";
import { useState } from "react";
import Link from "next/link";

// 메뉴 아이템을 위한 타입 정의
type items = {
    id: number;
    label: string;
    url: string
};

interface HeaderProps {
    setHeaderData: React.Dispatch<React.SetStateAction<string>>;
}

const groupware: items[] = [
    { id: 1, label: 'groupware 관리', url: '/groupware/management' },
    { id: 2, label: 'groupware 정보', url: '/groupware/info' },
    { id: 3, label: '서비스 소개', url: '/groupware/serviceintro' },
    { id: 4, label: '서비스 요금', url: '/groupware/bill' },
    { id: 5, label: '자료실', url: '/groupware/referencelibrary' },
    { id: 6, label: '무료체험', url: '/groupware/free' },
];

const erp: items[] = [
    { id: 1, label: 'ERP Manage', url: '/groupware/management' },
    { id: 2, label: 'ERP info', url: '/groupware/management' },
    { id: 3, label: 'ser intro', url: '/groupware/management' },
    { id: 4, label: 'erp bill', url: '/groupware/management' },
    { id: 5, label: 'lab', url: '/groupware/management' },
    { id: 6, label: 'free', url: '/groupware/management' },
    { id: 7, label: 'custom', url: '/groupware/management' },
];



function Navbar({ setHeaderData }: HeaderProps) {

    // 현재 메뉴 상태를 추적하는 useState 훅
    const [currentMenu, setCurrentMenu] = useState<items[]>(groupware);
    const [colorChange, setcolorChange] = useState("groupware");

    const handleButtonClick = (menuItems: items[], menuType: string) => {
        // 상태 업데이트        
        setCurrentMenu(menuItems);
        setcolorChange(menuType);
        if(colorChange == "groupware"){
            setHeaderData("erp")
        }
        else
            setHeaderData("groupware")

        // 커스텀 이벤트 발생
        setcolorChange(menuType);
    };

    return (
        <nav className="bg-gray-800 pt-5 pb-5 left-0">
            <div className="container">
                <div className="flex">
                    <div className="flex w-[30%] pl-5">
                        <Link href="/">
                            <button onClick={() => handleButtonClick(groupware, "groupware")} className={`text-white mr-4 text-center text-lg font-bold w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 "}`}>Home</button>
                        </Link>
                        <button onClick={() => handleButtonClick(groupware, "groupware")} className={`text-white text-center text-lg font-bold w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${colorChange == "groupware" ? "font-bold" : "opacity-25"}`}>GroupWare</button>
                        <p className="text-white text-center text-lg font-bold w-auto pl-3 pr-3">|</p>
                        <button onClick={() => handleButtonClick(erp, "erp")} className={`text-white text-center text-lg w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${colorChange == "erp" ? "font-bold" : "opacity-25"}`}>ERP</button>
                    </div>
                    <div className="flex w-[70%] space-x-12 justify-around ">
                        {currentMenu.map((item) => (
                            <Link href={item.url}>
                                <button key={item.id} className="text-white w-auto hover:cursor-pointer hover:animate-pulse">{item.label}</button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;