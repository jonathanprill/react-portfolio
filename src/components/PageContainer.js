import React, { useState } from 'react';
import NavButtons from './NavButtons';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Welcome from './pages/Welcome';
import Projects from './pages/Projects';
import Footer from './Footer';
import Static from './pages/Static';
import Xbox from './pages/Xbox';

function PageContainer() {

    const [currentPage, setCurrentPage] = useState('Welcome');

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

    const renderProjects = () => {
        if (currentPage === 'Portfolio') {
            return <Projects />
        }
    }
    const renderStatic = () => {
        if (currentPage === 'Welcome') {
            return <Static />
        }
        else {
            return <Xbox />
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
        </div>
    )
}

export default PageContainer;
