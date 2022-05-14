import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from './Shared/PrimaryButton';
import bannerBg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: 'cover' }}>
            <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-3 md:mx-12 lg:mx-auto">
                <img src={chair} alt="" className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className=" text-4xl md:text-5xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>get started</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;