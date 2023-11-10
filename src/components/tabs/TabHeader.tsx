type TabProps = {
    tabName: string;
};


const TabHeader = ({ tabName }: TabProps) => {
    return (
        <>
            <li className="mr-2" role="presentation">
                <button
                    className={`inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2`} role="tab">
                    {tabName}
                </button>
            </li>
        </>
    );
}

export default TabHeader;

{/* <li className="mr-2" role="presentation">
    <button
        className={`inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2
                                ${activeTab === 'profile' ? 'text-gray-800 border-gray-600' : 'text-gray-500 border-transparent'}`}
        onClick={() => changeTab('profile')}
        role="tab"
    >
        {tabName}
    </button>
</li> */}