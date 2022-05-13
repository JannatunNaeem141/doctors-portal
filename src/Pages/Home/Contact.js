import React from 'react';
import contactBg from '../../assets/images/appointment.png'
import PrimaryButton from './Shared/PrimaryButton';

const Contact = () => {
    return (
        <section className='my-28 py-12' style={{ backgroundImage: `url(${contactBg})` }}>
            <div className='text-center mt-12'>
                <h3 className='text-secondary font-bold'>Contact Us</h3>
                <h1 className='text-4xl text-white mb-7'>Stay connected with us</h1>
            </div>
            <div className='grid justify-center align-middle gap-5'>
                <input type="email" placeholder="Email Address" class="input w-full lg:w-[450px] max-w-xs" />
                <input type="text" placeholder="Subject" class="input w-full max-w-xs" />
                <textarea class="textarea mb-7" placeholder="Your message"></textarea>
            </div>
            <div className='text-center pb-12'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default Contact;