import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Menu = (props) => {
    const [state, setState] = useState([])

    useEffect(() => {
        axios
            .get('https://reid-family-site.herokuapp.com/info/fourth')
            .then(response => {
                // console.log(response.data)
                setState(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [state])

    let arr = []

    // console.log('set data', state.map(item => parseInt(item.guests)).reduce((a,b) => a + b, 0))
    // console.log('data', state.map(item => arr.push(item.guests)))
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
            <table className="total">
                <td>Total Guests: {state.map(item => parseInt(item.guests)).reduce((a,b) => a + b, 0)}</td>
                </table>
        </div>
     );
}
 
export default Menu;