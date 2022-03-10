import React  , { useState, useEffect} from 'react';
import '../App.css';
import NavBar from '../component/NavBar';
import axios from 'axios';
import { Container , Row , Col} from 'react-bootstrap'
function SetList() {

    const [ dataList, setDataList] = useState([]);
    const [ dataCardList, setDataCardList] = useState(null);
    
    useEffect( () => {
      poney();
    }, []) 
  
    const poney = async () => {
      const result = await axios(
        'https://api.scryfall.com/sets',
      );
      setDataList(result.data.data)
    }

    const handleClick = async (event) => {
        console.log(event.target.value)
        const result = await axios(
            event.target.value,
          );
          console.log(result.data.data)
        setDataCardList(result.data.data)
        
    }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
        <NavBar/>
        <Row className="justify-content-md-center select-set">
            <select onChange={handleClick}>
                {dataList.map((item, index) => (
                    <option  key={index} name={item} value={item.search_uri} > {item?.name ?? ""} </option>
                ))}
            </select>
        </Row>
        <Row className='card-list-row'>
            {dataCardList ? dataCardList.map((item, index) => (
                <Col md={3}  className='card-list-col'>
                    {item.image_uris ? <img src={item.image_uris.png} className={"card-size"}></img> : null}
                </Col>
            )) : ""}
        </Row>
    </div>
  );
}

export default SetList;
