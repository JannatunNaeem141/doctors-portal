import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MyAppointment from './MyAppointment';
import Services from './Services';
import Footer from './Shared/Footer';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MyAppointment></MyAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;