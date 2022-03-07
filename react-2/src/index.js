import React from "react";
import ReactDOM from "react-dom";

const Content = props => {
    return(
        <div>Bonjour tout le monde</div>
    )
}
const div = document.getElementById('app');

ReactDOM.render(<Content />, div);


