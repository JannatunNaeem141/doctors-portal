import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from './Shared/PrimaryButton';

const Services = () => {
    return (
        <div className='my-32 max-w-7xl mx-8 md:mx-12 lg:mx-auto'>
            <div className='text-center mt-12'>
                <h3 className='text-secondary font-bold'>OUR SERVICES</h3>
                <h1 className='text-neutral text-4xl'>Services We Provide</h1>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-10 lg:gap-10'>
                <Service name='Fluoride Treatment' description='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' img={cavity}></Service>
                <Service name='Cavity Filling' description='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' img={fluoride}></Service>
                <Service name='Teeth Whitening' description='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' img={whitening}></Service>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-0 lg:mx-28 my-24 mb-[200px] ">
                <figure><img className='rounded-lg  flex-1' src={treatment} alt="Album" /></figure>
                <div className="card-body ml-0 lg:ml-12 flex-1">
                    <h2 className="card-title font-bold text-4xl lg:text-5xl">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Services;