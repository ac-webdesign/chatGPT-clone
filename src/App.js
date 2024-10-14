import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import './App.css';
import Header from './components/Header';
import { MiddleOptions } from './components/MiddleOptions';

function App() {
  const [messages, setMessages] = useState([]);
  // const [botResponse, setBotResponse] = useState('');
  // const [userMessage, setUserMessage] = useState('');

  const handleSend = (message) => {
    const middleOptions = document.querySelector('.middle-options')

    setMessages([...messages, { sender: 'user', text: message }]);
    middleOptions.style.display = 'none'

    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'This is a bot response.' },
      ]);

    }, 1000);
  };
  const handleOptionClick = (option) => {
    let newUserMessage = '';
    let newBotResponse = '';
    const middleOptions = document.querySelector('.middle-options')

    switch (option) {
      case 'option-1':
        newUserMessage = 'Please create an illustration of sheaves.';
        newBotResponse = 'Here is the illustration of sheaves in a field. It depicts the peaceful, rural landscape of the harvest season. Feel free to take a closer look!';
        middleOptions.style.display = 'none'
        break;
      case 'option-2':
        newUserMessage = 'Add a global perspective to our project.';
        newBotResponse = `Here is the global perspective of our project. It showcases the diverse cultures and traditions of the world. Feel free to take a closer look!`;
        middleOptions.style.display = 'none'
        break;
      case 'option-3':
        newUserMessage = 'Develop a personal website for my business.';
        newBotResponse = 'Here is the personal website for my business. It showcases the unique perspective of my business. Feel free to take a closer look!';
        middleOptions.style.display = 'none'
        break;
      case 'option-4':
        newUserMessage = 'Create a unique design for my business website.';
        newBotResponse = 'Here is the unique design for my business website. It showcases the unique perspective of my business. Feel free to take a closer look!';
        middleOptions.style.display = 'none'
        break;
      default:
        newBotResponse = 'Default bot response.';
    }

    setMessages([...messages, { sender: 'user', text: newUserMessage }]);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: newBotResponse },
      ]);
    }, 1000);
  };

  return (
    <div className="app">
      <Header />
      <MiddleOptions onOptionClick={handleOptionClick} />
      <ChatWindow messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}

export default App;