import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        let cities = ["Goa", "Darjeeling", "Lonavala"];
        return(
           <>
            <ol>
                {cities.map((city, idx) => (
                    <li key={"location" +(idx+1)}>{city}</li>
                ))}
            </ol>
           </>
        )
    }
}


export default App;
