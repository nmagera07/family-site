import React from 'react';

import menuHeader from '../images/xmasmenuheader.png'

const Header = (props) => {
    return ( 
        <div className="header">
            <img src={menuHeader} alt="menu header"></img>
            <div className="header-links">
                <h2>ABOUT</h2>
                <h2>MENU</h2>
                <h2>RSVP</h2>
            </div>
        </div>
     );
}
 
export default Header;