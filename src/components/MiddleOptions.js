import React from 'react'
import chatgptIcon from '../images/chatgpt-icon.png'
import './MiddleOptions.css'


export const MiddleOptions = ( { onOptionClick } ) => {
  return (
    <div className='middle-options'>
        <img src={chatgptIcon} alt="chatgpt-icon"/>
            <div className='middle-options-container'>
                <div className="option option-1" onClick={() => onOptionClick('option-1')}>
                    <i className="fas fa-seedling" style={{ color: 'red' }}></i>
                    <p>Please create an illustration of sheaves.</p>
                </div>
                <div className="option option-2" onClick={() => onOptionClick('option-2')}>
                    <i className="fas fa-globe" style={{ color: 'blue' }}></i>
                    <p>Add a global perspective to our project.</p>
                </div>
                <div className="option option-3" onClick={() => onOptionClick('option-3')}>
                    <i className ="fas fa-laptop-code" style={{ color: 'green' }}></i>
                    <p>Develop a personal website for my business.</p>
                </div>
                <div className="option option-4" onClick={() => onOptionClick('option-4')}>
                    <i className="fas fa-paint-brush" style={{ color: 'purple' }}></i>
                    <p>Create a unique design for my business website.</p>
                </div>
            </div>
        </div>
  )
}
