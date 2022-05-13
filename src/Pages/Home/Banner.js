import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from './Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            backgroundImage: "url(https://i.ibb.co/qr1x2Rx/bg.png)"
        }}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" class="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>get started</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;