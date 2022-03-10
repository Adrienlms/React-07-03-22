import React , { useState, useEffect} from "react";
import axios from 'axios';
import { Container , Row , Col} from 'react-bootstrap'
import OneCard from "./OneCard";


const RandomCard = () => {

    const [data, setData] = useState({ hits: [] });
    useEffect( () => {
      poney();
    }, []) 
  
    const poney = async() => {
      const result = await axios(
        'https://api.scryfall.com/cards/random',
      );
      setData(result.data)
    }

    return (
        <div className="one-card">
            <OneCard card={data}/>
            <div className="new-card-button">
                <button onClick={poney}>
                    New Random Card
                </button>
            </div>
        </div>
        
    )
}

export default RandomCard;