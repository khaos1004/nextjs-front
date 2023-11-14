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
      <Head>
        <title>Table Interface</title>
      </Head>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">순번</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">필드1</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">필드2</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">필드3</th>
                {/* ... 더 많은 헤더를 추가하세요 */}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {tableData.map((data) => (
                <tr key={data.id}>
                  <td className="text-left py-3 px-4">{data.id}</td>
                  <td className="text-left py-3 px-4">{data.field1}</td>
                  <td className="text-left py-3 px-4">{data.field2}</td>
                  <td className="text-left py-3 px-4">{data.field3}</td>
                  {/* ... 여기에 더 많은 데이터 셀을 추가하세요 */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
