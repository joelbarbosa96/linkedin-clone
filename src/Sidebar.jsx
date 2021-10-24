import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Joel Barbosa</h2>
        <h4>joelbarbosa10@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,800</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,125</p>
        </div>
        <div className="sidebar__stat"></div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("flutter")}
        {recentItem("javascript")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
