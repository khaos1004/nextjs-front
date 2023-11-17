'use client';

import { useState } from 'react';

interface TableRow {
    id: string;
    name: string;
    spec: string;
    unit: string;
    stock: number;
    quantity: number;
    price: string;
    vendorName: string;
    orderNumber: string;
    orderNumber1: string;
}


const IndexPage = () => {

    const [rows, setRows] = useState<TableRow[]>([]);

    const addRow = () => {
        const newRow: TableRow = {
            id: "U",
            name: 'B000002',
            spec: '규격',
            unit: 'EA',
            stock: 0,
            quantity: 1,
            price: '10,000.00',
            vendorName: '매입거래처명',
            orderNumber: '발주',
            orderNumber1: '발주',
        };
        setRows([...rows, newRow]);
    };

    const removeRow = (index: number) => {
        setRows(rows.filter((_, rowIndex) => rowIndex !== index));
    };

    return (
        <>            
            <table className="min-w-full table-auto border-collapse border-slate-800 border-2 rounded-b-lg">
                <thead>
                    <tr>
                        <th className="border border-slate-300 w-8">-</th>
                        <th className="border border-slate-300 w-40">품목명</th>
                        <th className="border border-slate-300 w-24">규격</th>
                        <th className="border border-slate-300 w-32">단위</th>
                        <th className="border border-slate-300 w-32">재고</th>
                        <th className="border border-slate-300 w-32">수량</th>
                        <th className="border border-slate-300 w-32">매입단가</th>
                        <th className="border border-slate-300 w-32">금액</th>
                        <th className="border border-slate-300 w-32">매입거래처명</th>
                        <th className="border border-slate-300 w-32">발주번호</th>
                        <th className="border border-slate-300 w-8">
                            <button onClick={addRow} className=" px-2 bg-blue-500 text-white rounded">
                                +
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className='text-right'>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className="border border-slate-300 text-center">U</td>
                            <td className="border border-slate-300">
                                <div className="flex space-x-1">
                                    <input className="w-[5rem] mr-2 border-2" value={row.name} readOnly type="text" />
                                    <input className="w-[10rem] mr-2 border-2" value={row.spec} readOnly type="text" />
                                    <button className="">검</button>
                                </div>
                            </td>
                            <td className="border border-slate-300"><input value={row.unit} type="text" /></td>
                            <td className="border border-slate-300">{row.stock}</td>
                            <td className="border border-slate-300">{row.quantity}</td>
                            <td className="border border-slate-300">{row.price}</td>
                            <td className="border border-slate-300">{row.vendorName}</td>
                            <td className="border border-slate-300">{row.orderNumber}</td>
                            <td className="border border-slate-300">{row.orderNumber}</td>
                            <td className="border border-slate-300 items-center justify-center">
                                <input value="2514" type="text" className='w-[3rem] text-right border-2' />-<input type="text" value="2514" className='w-[3rem] border-2' />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <button onClick={(event) => removeRow(index)} className="bg-red-500 text-white px-2 rounded">
                                    -
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default IndexPage;
