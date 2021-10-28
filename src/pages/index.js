import React,{useState} from 'react'
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import AboutMeSection from '../components/AboutMeSection';
import { aboutMeOne,aboutMeTwo,aboutMeThree } from '../components/AboutMeSection/Data';
import Navbar from '../components/Navbar'
import ResumeSection from '../components/Resume';
import Sidebar from '../components/Sidebar'
import Hobbies from '../components/Hobbies';
import PortfolioSection from '../components/Portfolio';

const Home = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/> 
         <MainSection/>
         <AboutMeSection {...aboutMeOne}/>
         <AboutMeSection {...aboutMeTwo}/>
         <AboutMeSection {...aboutMeThree}/>
         <Hobbies/>
         <PortfolioSection/>
         <ResumeSection/>
         <Footer/>
        </>
    )
}

export default Home