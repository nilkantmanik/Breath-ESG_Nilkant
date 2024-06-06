import React from 'react';
import Sidebar from './Sidebar';
import SideList from './SideList';
import './home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="content-container">
        <SideList />
      </div>
    </div>
  );
};

export default Home;
