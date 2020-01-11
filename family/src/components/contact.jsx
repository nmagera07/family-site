import React, {useState, useEffect} from 'react';

const Contact = (props) => {
    const [input, setInput] = useState({
        info: {
           name: "",
           email: "",
           guests: "",
           dishes: "" 
        }
    })

    const handleChanges = e => {
        setInput({
            info: {
                ...input.info,
                [e.target.name]: e.target.value
            }
        })
    }

    return ( 
        <div>
            <h1>How can you reach us?</h1>
            <p>Please use the form below to let us know if you're coming and what you're bringing!</p>
            <form>
                <label>Your Name:</label>
                <input
                type="text"
                name="name"
                onChange={handleChanges}
                value={input.info.name}
                ></input>
                <label>Your email:</label>
                <input
                type="email"
                name="email"
                onChange={handleChanges}
                value={input.info.email}
                ></input>
                <label>Number of guests:</label>
                <input
                type="text"
                name="guests"
                onChange={handleChanges}
                value={input.info.guests}
                ></input>
                <label>What you're bringing:</label>
                <input
                type="text"
                name="dishes"
                onChange={handleChanges}
                value={input.info.dishes}
                ></input>
                <button>Submit</button>
            </form>
            <p>Feel free to contact us with any questions.</p>
            <p>You can email joanreid@reid-home, call 412-257-0097, or text 412-215-6654.</p>
            <p>We look forward to hearing from you!</p>
            <p>&#8593; Back to top</p>
        </div>
     );
}
 
export default Contact;