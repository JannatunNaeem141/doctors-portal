import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase">{children}</button>
        </div>
    );
};

export default PrimaryButton;