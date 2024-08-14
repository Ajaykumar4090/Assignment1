import React, { useState } from 'react';
import '../Dashboard Component/Dashboard.css';

const AddWidget = ({ onAdd }) => {
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');

    const handleAdd = () => {
        if (widgetName && widgetText) {
            onAdd({ name: widgetName, text: widgetText });
            setWidgetName('');
            setWidgetText('');
        }
    };

    return (
        <div className='search'>
            <input className='search-bar'
                type="text" 
                placeholder="Widget Name" 
                value={widgetName} 
                onChange={(e) => setWidgetName(e.target.value)} 
            /> 
            <br/>
            <input className='search-bar'
                type="text" 
                placeholder="Widget Text" 
                value={widgetText} 
                onChange={(e) => setWidgetText(e.target.value)} 
            />
            <button className="add-category-button"  onClick={handleAdd}>Add Widget</button>
        </div>
    );
};

export default AddWidget;
