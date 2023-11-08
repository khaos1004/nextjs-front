type TabProps = {
    label: string;
};

const TabContents: React.FC<TabProps> = ({ label }) => {
    return (
        <>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p className="text-sm text-gray-500 dark:text-gray-400">{label} <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
            </div>
        </>
    );
}

export default TabContents;