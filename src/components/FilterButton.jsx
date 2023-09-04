import React from 'react';
import '../styles.css';

const FilterButton = ({ types, activeFilter, setActiveFilter }) => {
    return (
        <div className='filterbox'>
            <button
                onClick={() => setActiveFilter(null)}
                className={`button-54 ${activeFilter === null ? 'active' : ''}`}
            >
                All
            </button>
            {types.map(type => (
                <button
                    key={type}
                    onClick={() => setActiveFilter(type)}
                    className={`button-54 ${activeFilter === type ? 'active' : ''}`}
                >
                    {type}
                </button>
            ))}
        </div>
    );
};

export default FilterButton;
