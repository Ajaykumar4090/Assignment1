import React from 'react';
import '../Dashboard Component/Dashboard.css';


const Widget = ({ widget, onRemove }) => {
    return (
        <div>
            <h3>{widget.name}</h3>
            <p>{widget.text}</p>
            <button onClick={onRemove}>Remove ×</button>
        </div>
    );
};

export default Widget;
