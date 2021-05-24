import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Menu = (props) => {
    const [state, setState] = useState([])

    useEffect(() => {
        axios
            .get('https://reid-family-site.herokuapp.com/info')
            .then(response => {
                // console.log(response.data)
                setState(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [state])

    // console.log('props', props)
    return ( 
        <div className="menu" id="mid">
            <h1>What's on the Menu?</h1>

            <table>
                <thead>
                    <tr>
                        <th>Guest (# attending)</th>
                        <th>Dish</th>
                    </tr>
                </thead>
                <tbody>
            {state.map((element, i) => {
                return <tr key={i}>
                            <td>{element.name} ({element.guests})</td>
                            <td>{element.dishes}</td>       
                    </tr>
                })} 

                </tbody>
            </table>
        </div>
     );
}
 
export default Menu;