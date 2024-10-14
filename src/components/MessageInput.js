import React, { useState } from 'react';
import './MessageInput.css';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message ChatGPT"
      />
      <div 
        className={`send-button ${message.trim() ? 'active' : ''}`} 
        onClick={handleSend}
      >
        <i className="fas fa-arrow-up"></i>
      </div>
      <div className="paperclip"><i className="fas fa-paperclip"></i></div>
    </div>
  );
};

export default MessageInput;
