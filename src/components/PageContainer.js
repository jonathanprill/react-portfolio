import React, { useState } from 'react';
import Welcome from './pages/Welcome';


function PageContainer() {

    
    const [currentPage, setCurrentPage] = useState('Welcome');

    const renderPage = () => {
        if (currentPage === 'Welcome') {
            return <Welcome />
        }
      

    };




    return (
        <div> {renderPage()}</div>
        
    )
}

export default PageContainer;
