import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from './Shared/PrimaryButton';

const MyAppointment = () => {
    return (
        <section className='my-28' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='flex justify-center items-center max-w-7xl mx-3 md:mx-12 lg:mx-auto'>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-100px]' src={doctorSmall} alt="" />
                </div>
                <div className='flex-1'>
                    <div className='p-5 lg:p-0'>
                        <h3 className='text-secondary font-bold'>Appointment</h3>
                        <h1 className='text-white text-4xl card-title '>Make an appointment Today</h1>
                        <p className='text-white w-3/4 mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    </div>
                    <div className="card-actions justify-start p-5 lg:p-0">
                        <PrimaryButton>get started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyAppointment;