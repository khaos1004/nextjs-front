type TabProps = {
    label: string;
};


const TabHeader: React.FC<TabProps> = ({ label }) => {
    return (
        <>
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{label}</button>
                </li>
            </ul>
        </>
    );
}

export default TabHeader;