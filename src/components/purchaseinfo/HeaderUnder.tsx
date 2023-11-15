'use client';

import Head from 'next/head';
import { useState } from 'react';

interface TableData {
    id: number;
    field1: string;
    field2: string;
    field3: string;
    // ... 여기에 필드를 추가하세요
}

const initialData: TableData[] = [
    // ... 초기 데이터를 설정하세요
];

const IndexPage = () => {
    const [tableData, setTableData] = useState<TableData[]>(initialData);

    return (
        <>
            <div className="flex my-2 mx-2 flex-row max-w-screen bg-gray-200 px-2 py-2 shadow">
                <div className="grid grid-cols-12 w-full">

                    <div className="items-center col-start-1 col-span-3">
                        <label className="mr-2">요청부서</label>
                        <input value="2110" type="email" name="email" id="email" className="border-solid border-2 border-gray-600 mr-2 w-16" />
                        <input type="text" value="자재팀" className="border-solid border-2 border-gray-600 w-[12rem]" />
                        <button className="ml-2">검색</button>
                    </div>

                    <div className="items-center col-start-5 col-span-3 justify-center">
                        <label className="mr-2">요청번호</label>
                        <input type="text" value="2023-11" name="date" className="border-solid border-2 border-gray-600 w-[8rem] mr-2"  />
                        <input type="text" value="0000" name="date" className="border-solid border-2 border-gray-600 w-[4rem]" disabled />
                    </div>

                    <div className="items-center col-start-9 col-span-2">
                        <label className="mr-2">요청일자</label>
                        <input type="date" name="date" className="border-solid border-2 border-gray-600" />
                    </div>             

                    <div className="items-center col-start-1 col-span-3">
                        <label className="mr-2">구매요청</label>
                        <input value="이정우" type="email" name="email" id="email" className="border-solid border-2 border-gray-600 mr-2 w-16" />
                        <button className="ml-2">검색</button>
                    </div>

                    <div className="items-center col-start-7 col-span-2">
                        <label className="mr-2">입고요청</label>
                        <input type="date" name="date" className="border-solid border-2 border-gray-600" />
                    </div>
        
                    <div className="items-center col-start-1 col-span-12">
                        <label className="mr-2">특기사항</label>
                        <input value="2110" type="email" name="email" id="email" className="border-solid border-2 border-gray-600 mr-2 w-[82rem]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexPage;
