import React from 'react';

const Location = (props) => {
    return ( 
        <div className="location">
            <h1>When's the party?</h1>
            <p id="top">The party will be on Saturday, December 31st, 2022 from 2:00pm until whenever.</p>
            <div className="address">
                {/* <p>The Reid's House</p>
                <p>3305 Washington Pike</p>
                <p>Bridgeville, PA 15017</p> */}
                <p>Missi's House</p>
                <p>171 Lincoln Drive</p>
                <p>Indianola PA 15051</p>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.178285402522!2d-80.12622588435279!3d40.33839086832364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883457b4257b3ddb%3A0x38fa882dbbeb387b!2s3305%20Washington%20Pike%2C%20Bridgeville%2C%20PA%2015017!5e0!3m2!1sen!2sus!4v1576524147783!5m2!1sen!2sus" width="400" height="300" title="home map"></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.0979412676265!2d-79.85726788434789!3d40.56151435474455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883493a320ffadbf%3A0x9ba74ec2f8378e21!2s171%20Lincoln%20Dr%2C%20Indianola%2C%20PA%2015051!5e0!3m2!1sen!2sus!4v1670881303156!5m2!1sen!2sus" width="600" height="450" style={"border:0;"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="home map"></iframe> */}
            </div>
            <p>There will be food and fun for all!</p>
        </div>
     );
}
 
export default Location;