import React from 'react';

import menuHeader from '../images/xmasmenuheader.png'

const Header = (props) => {
    return ( 
        <div className="header">
            <img src={menuHeader} alt="menu header"></img>
            <div className="header-links">
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Rsvp</a>
            </div>
            {/* <hr></hr> */}
        </div>
     );
}
 
export default Header;