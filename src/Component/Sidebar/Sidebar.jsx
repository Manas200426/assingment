
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="logo-container">
        <img
          src="/imgs/Group 5.png"
          alt="Company Logo"
          className={`logo ${isCollapsed ? "collapsed-logo" : ""}`}
        />
      </div>

      {!isCollapsed && <hr className="line" />}

    
      <div className={`limited-height-section ${isCollapsed ? "collapsed" : ""}`}>
       
        {!isCollapsed && (
          <>
            <Link to="/" className="menu-item">
              <img src="/imgs/Frame 89.png" alt="Company Logo" className="menu-icon" />
            </Link>
            <Link to="/SampleProject" className="menu-item">
              <img src="/imgs/Frame 88.png" alt="Company Logo" className="menu-icon" />
            </Link>
            {!isCollapsed && <hr className="line" />}
            <Link to="/Apps" className="menu-item">
              <img src="/imgs/Frame 87.png" alt="Company Logo" className="menu-icon" />
            </Link>
            <Link to="/Introduction" className="menu-item">
              <img src="/imgs/Group 9.png" alt="Company Logo" className="menu-icon" />
            </Link>
          </>
        )}
      </div>

      

      <div className="bottom-options">
        {!isCollapsed && (
          <>
            <Link to="/help-support" className="bottom-option">
              <img src="/imgs/Frame 91.png" alt="Company Logo" className="bottom-icon" />
            </Link>
            <Link to="/feedback" className="bottom-option">
              <img src="/imgs/Frame 92.png" alt="Company Logo" className="bottom-icon" />
            </Link>
          </>
        )}
      </div>


      <button className="collapse-button" onClick={toggleCollapse}>
        {isCollapsed ? <FiChevronRight className="icon" /> : <FiChevronLeft className="icon" />}
        <span>{isCollapsed ? "" : "Collapse"}</span>
      </button>

   
     

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
