import React from 'react';

const Location = (props) => {
    return ( 
        <div className="location">
            <h1>When's the party?</h1>
            <p>The party will be on Sunday, July 20th, 2025 from 2:00pm until whenever.</p>
            <div className="address">
                <p>The Reids' House
                    <br/>
                3305 Washington Pike
                    <br/>
                Bridgeville, PA 15017</p>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.178285402522!2d-80.12622588435279!3d40.33839086832364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883457b4257b3ddb%3A0x38fa882dbbeb387b!2s3305%20Washington%20Pike%2C%20Bridgeville%2C%20PA%2015017!5e0!3m2!1sen!2sus!4v1576524147783!5m2!1sen!2sus" width="400" height="300" title="home map"></iframe>
            </div>
            <p>There will be food and fun for all!</p>
        </div>
     );
}
 
export default Location;