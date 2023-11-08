import React, { ReactNode } from 'react';

import TabHeader from '../../tabs/TabHeader';
import TabContents from '../../tabs/TabContents';

interface LayoutProps {
    contents: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ contents }) => {
    return (
        <>
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <TabHeader label="tabs"/>
            </div>
            <div id="default-tab-content">
                <TabContents label="This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling." />
            </div>
        </>
    );
}

