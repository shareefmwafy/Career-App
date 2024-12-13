import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Projects from "./Sidebar/components/Projects/Projects";
import Portfolio from "./Sidebar/components/Portfolio/Portfolio";
import ChangeInfo from "./Sidebar/components/ChangeInformation/ChangeInformation";
import FriendRequests from "./Sidebar/components/FriendRequests/FriendRequests";
import Friends from './Sidebar/components/Friends/Friends'
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <Sidebar />
      
        <Routes>
          <Route path="projects" element={<Projects />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="change-info" element={<ChangeInfo />} />
          <Route path="friend-requests" element={<FriendRequests />} />
          <Route path="friends" element={<Friends />} />
          <Route
            path=""
            element={<Projects />} 
          />
        </Routes>
      
    </div>
  );
};

export default Settings;
