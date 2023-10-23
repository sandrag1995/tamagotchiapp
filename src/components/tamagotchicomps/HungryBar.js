import React from 'react';

const HungryBar = ({size}) => {

    return (
        <div>
            <div className="hungry-bar">
            <div className="hungry" style={{width: `${size}%`}}></div>
            </div>
        </div>
    );
};

export default HungryBar;