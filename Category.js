import React, { useState } from 'react';
import Widget from '../Widget Component/Widget';
import AddWidget from '../AddWidget Component/AddWidget';
import SearchWidgets from '../SearchWidgets Components/SearchWidgets';
import '../Dashboard Component/Dashboard.css';

const Category = ({ category }) => {
    const [widgets, setWidgets] = useState(category.widgets);
    const [filteredWidgets, setFilteredWidgets] = useState(widgets);

    const addWidget = (widget) => {
        const updatedWidgets = [...widgets, widget];
        setWidgets(updatedWidgets);
        setFilteredWidgets(updatedWidgets);
    };

    const removeWidget = (index) => {
        const updatedWidgets = widgets.filter((_, i) => i !== index);
        setWidgets(updatedWidgets);
        setFilteredWidgets(updatedWidgets);
    };

    const handleSearch = (term) => {
        if (term === '') {
            setFilteredWidgets(widgets);
        } else {
            setFilteredWidgets(
                widgets.filter((widget) =>
                    widget.name.toLowerCase().includes(term.toLowerCase())
                )
            );
        }
    };

    return (
        <div>
            <h2>{category.name}</h2>
            <SearchWidgets widgets={widgets} onSearch={handleSearch} />
            {filteredWidgets.map((widget, index) => (
                <div key={index} className="widget">
                    <Widget widget={widget} onRemove={() => removeWidget(index)} />
                </div>
            ))}
            <AddWidget onAdd={addWidget} />
        </div>
    );
};

export default Category;