import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from './Shared/PrimaryButton';

const Appointment = () => {
    return (
        // <div class="card lg:card-side bg-base-100 shadow-xl my-28 " style={{ backgroundImage: `url(${appointment})` }}>
        //     <figure><img src={doctorSmall} alt="Album" /></figure>
        //     <div class="card-body">
        //         <h3 className='text-secondary font-bold'>Appointment</h3>
        //         <h1 className='text-white text-4xl card-title '>Make an appointment Today</h1>
        //         <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        //         <div class="card-actions justify-start">
        //             <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">GET STARTED</button>
        //         </div>
        //     </div>
        // </div>
        <section className='flex justify-center items-center my-28' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctorSmall} alt="" />
            </div>
            <div className='flex-1'>
                <div>
                    <h3 className='text-secondary font-bold'>Appointment</h3>
                    <h1 className='text-white text-4xl card-title '>Make an appointment Today</h1>
                    <p className='text-white w-3/4 mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                </div>
                <div class="card-actions justify-start">
                    <PrimaryButton>get started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Appointment;