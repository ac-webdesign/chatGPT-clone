import React from 'react';
import './Header.css';
import leftbar from '../images/leftbar.png';
import newchat from '../images/newchat.png';
import downarrow from '../images/downarrow.png';

const Header = () => {
  return (
    <div className="header">
      <div className="left-icons">
        <img src={leftbar} alt="Sidebar" className="sidebar-icon" />
        <img src={newchat} alt="New Chat" className="newchat-icon" />
        <div className="chatgpt-auto">
          <h2>ChatGPT-Auto</h2>
          <img src={downarrow} alt="Chat Auto" className="downarrow-icon" />
        </div>
      </div>
      <div className="profile">AL</div>

    </div>
  );
};

export default Header;