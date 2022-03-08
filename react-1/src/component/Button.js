import React, { useState } from "react";


const Button = (props) => {
    const [monBoutton, setState] = useState('MonBoutton')
    const handleClick = (monBoutton) => {
        monBoutton === 124 ? setState("MonBoutton") : setState(124);
        console.log(monBoutton)
    }
        return(
        <div>
            <button onClick={() => handleClick(monBoutton)}>{ monBoutton + " / " + props.monPremierProps }</button>
        </div>
    )
}

export default Button;