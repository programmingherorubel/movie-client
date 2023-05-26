import React from 'react';
import ResentMovie from '../ResentMovie/ResentMovie';
import SideNavbar from '../SideNavbar/SideNavbar';
import Tranding from '../Tranding/Tranding';
import Banner from './Banner/Banner';
import SideSlider from './SideSlider/SideSlider';
import Banner2 from './Banner2/Banner2';
import FullWidthPoster from './../FullWidthPoster/FullWidthPoster';
import TvSeris from '../TvSeris/TvSeris';
import Tv from './Tv/Tv';
import Footer from './Footer/Footer';


const Home = () => {
    return (
        <div>
            <SideNavbar></SideNavbar>
            <Banner></Banner>
            <SideSlider></SideSlider>
            <ResentMovie></ResentMovie>
            <Tranding></Tranding>
            <Banner2></Banner2>
            <FullWidthPoster></FullWidthPoster>
            <TvSeris></TvSeris>
            <Tv></Tv>
            <Footer></Footer>
        </div>
    );
};

export default Home;