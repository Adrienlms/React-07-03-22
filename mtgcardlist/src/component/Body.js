import React , { useState, useEffect} from "react";
import axios from 'axios';
import { Container , Row , Col} from 'react-bootstrap'

const Body = () => {

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
        <Container fluid className="test">
            <Row className="justify-content-md-center">
                <Col>
                    <div className="card-title">
                        <h2>{data.name}</h2>
                        <h5>par {data.artist} Publié le : {data.released_at} </h5>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    {data.image_uris ? <img src={data.image_uris.normal}></img> : ""}
                </Col>
                <Col md={4}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="box-legal">
                        <Row>
                        <Col md={6}>
                            {data.legalities ? <h5 className={data.legalities.standard === "legal" ? "legal-badge" : "non-legal-badge"}>standard</h5> : ""}
                            {data.legalities ? <h5 className={data.legalities.future === "legal" ? "legal-badge" : "non-legal-badge"}>future</h5> : ""}
                            {data.legalities ? <h5 className={data.legalities.pioneer === "legal" ? "legal-badge" : "non-legal-badge"}>pioneer</h5> : ""}
                            {data.legalities ? <h5 className={data.legalities.modern === "legal" ? "legal-badge" : "non-legal-badge"}>modern</h5> : ""}
                            {data.legalities ? <h5 className={data.legalities.commander === "legal" ? "legal-badge" : "non-legal-badge"}>commander</h5> : ""}
                            {data.legalities ? <h5 className={data.legalities.standard === "legal" ? "legal-badge" : "non-legal-badge"}>standard</h5> : ""}
                        </Col>
                        <Col md={6}>
                            {data.legalities ? <h5 className={data.legalities.standard === "legal" ? "legal-badge" : "non-legal-badge"}>standard</h5> : ""}
                            {data.legalities ? <h5 className={data.legalities.future === "legal" ? "legal-badge" : "non-legal-badge"}>future</h5> : ""}
                            {data.legalities ? <h5 className={data.legalities.pioneer === "legal" ? "legal-badge" : "non-legal-badge"}>pioneer</h5> : ""}
                            {data.legalities ? <h5 className={data.legalities.modern === "legal" ? "legal-badge" : "non-legal-badge"}>modern</h5> : ""}
                            {data.legalities ? <h5 className={data.legalities.commander === "legal" ? "legal-badge" : "non-legal-badge"}>commander</h5> : ""}
                            {data.legalities ? <h5 className={data.legalities.standard === "legal" ? "legal-badge" : "non-legal-badge"}>standard</h5> : ""}
                        </Col>
                        </Row>
                
                    </div>
                </Col>
            </Row>
            
            
            
            <button onClick={poney}>
              nouvelle carte
            </button>
        </Container>
       
    )
}

export default Body;