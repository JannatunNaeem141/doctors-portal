import React from 'react';

const Service = ({ img, name, description }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl my-12 mx-12">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;