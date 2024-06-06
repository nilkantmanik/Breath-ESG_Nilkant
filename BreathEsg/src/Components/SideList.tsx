import React, { useState } from "react";
import "./sideList.scss"; 
import TopBar from "./TopBar";
import DataEntry from "./DataEntry"
import Tracker from "./Tracker"

const SideList = () => {

  const [activeTab, setActiveTab] = useState('DATA ENTRY');

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };

  return (
    <div className="side-list">
      <TopBar activeTab={activeTab} handleTabClick={handleTabClick} />

      {activeTab=='DATA ENTRY' ?(

        <DataEntry />
      ):(
      <>
      <Tracker />
      </>

      )}
    </div>
  );
};

export default SideList;
