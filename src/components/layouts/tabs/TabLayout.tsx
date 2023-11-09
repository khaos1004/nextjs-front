import React, { ReactNode } from 'react';

import TabHeader from '../../tabs/TabHeader';
import TabContents from '../../tabs/TabContents';

interface LayoutProps {
    contents: string;
    tabName: string;
}

const TabLayout = ({ tabName, contents } : LayoutProps) => {
    return (
        <>
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <TabHeader tabName={tabName} />                
            </div>
            <div id="default-tab-content">
                <TabContents content={contents} />        
            </div>
        </>
    );
}

export default TabLayout;

