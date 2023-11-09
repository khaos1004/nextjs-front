type TabProps = {
    content: React.ReactNode;
};

const TabContents: React.FC<TabProps> = ({ content }) => {
    return (
        <>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {content}
                </p>
            </div>
        </>
    );
}

export default TabContents;