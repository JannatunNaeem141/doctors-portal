import React from 'react';

const InfoCard = ({ img, cardTitle, cardText, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl  ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{cardTitle}</h2>
                <p className='text-white'>{cardText}</p>
            </div>
        </div>
    );
};

export default InfoCard;