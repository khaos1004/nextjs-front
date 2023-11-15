'use client';
import React, { useState } from 'react';
import PurchaseLayout from '@/components/layouts/purchase/PurchaseLayout';

interface ContentsProps {
    tabContents: string;
    tabIndex: string;
    activeTab: number;
}


const TabContentsComponent = ({ tabContents, tabIndex, activeTab }: ContentsProps) => {

    if (activeTab !== Number(tabIndex)) {
        return null;
    }

    return (
        <>
            <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                    <div className="block" id={`link${tabIndex}`}>
                        <PurchaseLayout />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabContentsComponent;
