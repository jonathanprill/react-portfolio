import React, { useState } from 'react';
import NavButtons from './NavButtons';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Welcome from './pages/Welcome';
import Projects from './pages/Projects';
import Footer from './Footer';

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



    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div className='hero'>
            <div className='moon'>
                <div className='tv-container'><div className='tv-image'><NavButtons currentPage={currentPage} handlePageChange={handlePageChange} /></div></div>

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
