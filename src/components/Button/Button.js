import React from 'react';
import './Button.css';

const Button = ({content, buttonClick, type}) => {

    return (
    <div className={`Button ${content === '0' ? 'zero' : ''}
        ${content === '=' ? 'equals' : ''} ${content === '' ? 'blank' : ''} ${type || ''}`}
        onClick={buttonClick(content)}>
            {content}
    </div>
    );
};

export default Button;