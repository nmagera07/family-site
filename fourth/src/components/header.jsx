import React from 'react';

// import menuHeader from '../images/xmasmenuheader.png'

const Header = (props) => {
    return ( 
        <div className="header">
            {/* <img src={menuHeader} alt="menu header"></img> */}
            <div className="header-links">
                <a href="#top">About</a>
                <a href="#mid">Menu</a>
                <a href="#bottom">Rsvp</a>
            </div>
        </div>
     );
}
 
export default Header;