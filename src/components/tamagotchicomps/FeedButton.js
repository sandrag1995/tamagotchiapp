import React from 'react';

const FeedButton = ({feed}) => {
    return (
        <div>
            <button  onClick={feed}>Feed Pet (10$)</button>
        </div>
    );
};

export default FeedButton;