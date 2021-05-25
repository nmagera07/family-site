import React, {useState} from 'react';
import axios from 'axios';

const Contact = (props) => {
    const [formInput, setInput] = useState({
        info: {
           name: "",
           guests: "",
           dishes: "" 
        }
    })
    const [state, setState] = useState()
    const [error, setError] = useState(false)

    const handleChanges = e => {
        setInput({
            info: {
                ...formInput.info,
                [e.target.name]: e.target.value
            }
        })
        
    }

    const addData = (e, data=formInput.info) => {
        let inputData = data
        e.preventDefault()
        
        axios 
            .post('https://reid-family-site.herokuapp.com/info', inputData)
            .then(response => {
                console.log(response)
                setState(response)
            })
            .catch(error => {
                console.log(error)
            })
        setInput({
            info: {
                name: "",
                guests: "",
                dishes: ""
            }
        })
    }

    const keyPress = () => {
        setError(true)
    }

    return ( 
        <div className="contact" id="bottom">
            <h1>How can you reach us?</h1>
            <p>Please use the form below to let us know if you're coming and what you're bringing!</p>
            <form>
                <label>Your Name:</label>
                <input
                type="text"
                name="name"
                onChange={handleChanges}
                value={formInput.info.name}
                ></input>
                <label>Number of guests:</label>
                <input
                type="number"
                name="guests"
                onChange={handleChanges}
                value={formInput.info.guests}
                onKeyDown={keyPress}
                min="1"
                max="10"
                ></input>
                <span>{error ? <p>*Please enter only numbers</p> : null}</span>
                <label>What you're bringing:</label>
                <textarea
                type="text"
                name="dishes"
                onChange={handleChanges}
                value={formInput.info.dishes}
                rows="4"
                cols="58"
                ></textarea>
                <button onClick={addData}>Submit</button>
            </form>
            <div className="contact-p">
                <p>Feel free to contact us at 412-257-0097 or joanreid@reid-home.com with any questions.</p>
            </div>
            <p>We look forward to hearing from you!</p>
            <div className="contact-a">
                <a href="#top">&#8593; Back to top</a>
            </div>
        </div>
     );
}
 
export default Contact;