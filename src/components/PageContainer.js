import React, { useState } from 'react';
import NavButtons from './NavButtons';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Welcome from './pages/Welcome';
// import Projects from './pages/Projects';
import ProjectCards from './pages/ProjectCards';
import Footer from './Footer';
import Static from './pages/Static';
import AboutTv from './pages/AboutTv';
import ContactTv from './pages/ContactTv';
import SkillsTv from './pages/SkillsTv';
import ProjectsTv from './pages/ProjectsTv';
import Directory from './Directory';

function PageContainer() {
    // will change pages based on currentPage but will default start on Welcome
    const [currentPage, setCurrentPage] = useState('Welcome');

    // will render pages based upon which nav button was clicked
    const renderPage = () => {
        if (currentPage === 'Welcome') {
            return <Welcome />
        }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Skills') {
            return <Skills />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }

    };
    // renders projects if clicked
    const renderProjects = () => {
        if (currentPage === 'Portfolio') {
            return <ProjectCards />
        }
    }
    // will render Tv Station based upon which nav button was clicked
    const renderStatic = () => {
        if (currentPage === 'Welcome') {
            return <Static />
        }
        if (currentPage === 'About') {
            return <AboutTv />
        }
        if (currentPage === 'Contact') {
            return <ContactTv />
        }
        if (currentPage === 'Skills') {
            return <SkillsTv />
        }
        if (currentPage === 'Portfolio') {
            return <ProjectsTv />
        }
    }



    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div className='hero'>
            <div className='moon'>
                <div className='tv-container'>
                    <div className='tv-image'><NavButtons currentPage={currentPage} handlePageChange={handlePageChange} /></div>
                    {renderStatic()}
                </div>

                <div className='card-container'>
                    {renderPage()}
                </div>
            </div>
            {renderProjects()}
            <Footer />
            <Directory currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    )
}

export default PageContainer;
