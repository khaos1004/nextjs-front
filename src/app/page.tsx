"use client";
import React, {useContext} from "react";

type Datatype = {
  tabHeader: string;
  tabContents: React.ReactNode;
}


const Home: React.FC<Datatype> = ({ tabHeader, tabContents }) => {

  const [openTab, setOpenTab] = React.useState<number>(0);
 
  const changeIndex = () => {
    setOpenTab(prevOpentab => prevOpentab + 1)
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex text-center">
              <button
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white  bg-gray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  setOpenTab(1)
                }}
                data-toggle="tab"                
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> {tabHeader}
              </button>
            </li>           
            <li className="-mb-px mr-2 last:mr-0 flex text-center">
              <button
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-gray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"                
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>  Settings
              </button>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex text-center">
              <button
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-gray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  // e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"                
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i>  Options
              </button>
            </li>
          </ul>
          <div className="flex flex-col min-w-0 break-words bg-white w-[100%] mb-6 shadow-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    {tabContents}
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;