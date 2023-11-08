"use client";
import { useState } from "react";
// import { MenuContext } from '@/contexts/MenuContext';

// 메뉴 아이템을 위한 타입 정의
type items = {
    id: number;
    label: string;
};

const groupware: items[] = [
    { id: 1, label: 'groupware 관리' },
    { id: 2, label: 'groupware 정보' },
    { id: 3, label: '서비스 소개' },
    { id: 4, label: '서비스 요금' },
    { id: 5, label: '자료실' },
    { id: 6, label: '무료체험' },
];

const erp: items[] = [
    { id: 1, label: 'ERP 관리' },
    { id: 2, label: 'ERP 정보' },
    { id: 3, label: '서비스 소개' },
    { id: 4, label: '서비스 요금' },
    { id: 5, label: '자료실' },
    { id: 6, label: '무료체험' },
    { id: 7, label: '고객센터' },
];

function Navbar() {

    // 현재 메뉴 상태를 추적하는 useState 훅
    const [currentMenu, setCurrentMenu] = useState<items[]>(groupware);

    const handleButtonClick = (menuItems: items[]) => {
        // 상태 업데이트
        setCurrentMenu(menuItems);
        // 커스텀 이벤트 발생
        window.dispatchEvent(new CustomEvent('menuChange', { detail: menuItems }));
      };

    // 버튼 클릭 핸들러
    // const handleButtonClick = (menuItems: items[]) => {
    //     setCurrentMenu(menuItems);
    // };

    return (
        <nav className="bg-gray-800 pt-5 pb-5 left-0">
            <div className="container">
                <div className="flex">
                    <div className="flex w-[30%] pl-5">
                        <button onClick={() => handleButtonClick(groupware)} className="text-white text-center text-lg font-bold w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10">GroupWare</button>
                        <p className="text-white text-center text-lg font-bold w-auto pl-3 pr-3">|</p>
                        <button onClick={() => handleButtonClick(erp)} className="text-white text-center text-lg font-bold w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10">ERP</button>
                    </div>
                    <div className="flex w-[70%] space-x-12 justify-around ">
                        {currentMenu.map((item) => (
                            <a key={item.id} className="text-white w-auto hover:cursor-pointer hover:animate-pulse">{item.label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;