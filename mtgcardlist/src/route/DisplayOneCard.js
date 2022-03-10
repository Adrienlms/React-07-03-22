import React  , { useState, useEffect} from 'react';
import '../App.css';
import NavBar from '../component/NavBar';
import axios from 'axios';
import { Container , Row , Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import OneCard from '../component/OneCard';
import { useLocation , useParams } from 'react-router-dom'

function DisplayOneCard() {
    const param = useParams();
    const [data, setData] = useState("");

    useEffect( () => {
      poney();
    }, []) 
  
    const poney = async() => {
      const result = await axios(
        'https://api.scryfall.com/cards/' + param.id,
      );
      setData(result.data)
    }

    return (
        <div className="one-card">
            <NavBar/>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <OneCard card={data}/>
        </div>
        
    )
}

export default DisplayOneCard;
