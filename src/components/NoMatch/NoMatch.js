import React from 'react';
import NavOther from '../NavOther/NavOther';

const NoMatch = () => {
    return (
        <div className="container">
            <NavOther></NavOther>
            <h1 style={{textAlign:"center", marginTop:"100px",fontWeight: "900", fontSize: "100px"}}>404 Page Not Found</h1>
            
        </div>
    );
};

export default NoMatch;