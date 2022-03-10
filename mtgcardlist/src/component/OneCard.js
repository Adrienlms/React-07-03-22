import React, { useState } from "react";
import { Container , Row , Col} from 'react-bootstrap'


const OneCard = (props) => {      
    
    return (
        <Container fluid >
            <Row className="justify-content-md-center">
                <Col>
                    <div className="card-title">
                        <h2>{props.card.name}</h2>
                        <h5>by <u>{props.card.artist}</u> Published : <u>{props.card.released_at}</u> </h5>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    {props.card.image_uris ? <img src={props.card.image_uris.normal} className={"card-size"}></img> : ""}
                </Col>
                <Col md={4}>
                    <div className="box-legal">
                        <Row>
                        <Col md={6}>
                            {props.card.legalities ? <h5 className={props.card.legalities.standard === "legal" ? "legal-badge" : "non-legal-badge"}>{props.card.legalities.standard === "legal" ? "Legal" : "Non Legal"}</h5> : ""}
                            {props.card.legalities ? <h5 className={props.card.legalities.future === "legal" ? "legal-badge" : "non-legal-badge"}>{props.card.legalities.future === "legal" ? "Legal" : "Non Legal"}</h5> : ""}
                            {props.card.legalities ? <h5 className={props.card.legalities.pioneer === "legal" ? "legal-badge" : "non-legal-badge"}>{props.card.legalities.pioneer === "legal" ? "Legal" : "Non Legal"}</h5> : ""}
                            {props.card.legalities ? <h5 className={props.card.legalities.modern === "legal" ? "legal-badge" : "non-legal-badge"}>{props.card.legalities.modern === "legal" ? "Legal" : "Non Legal"}</h5> : ""}
                            {props.card.legalities ? <h5 className={props.card.legalities.commander === "legal" ? "legal-badge" : "non-legal-badge"}>{props.card.legalities.commander === "legal" ? "Legal" : "Non Legal"}</h5> : ""}
                        </Col>
                        <Col md={6}>
                            {props.card.legalities ? <h5>standard</h5> : ""}
                            {props.card.legalities ? <h5>future</h5> : ""}
                            {props.card.legalities ? <h5>pioneer</h5> : ""}
                            {props.card.legalities ? <h5>modern</h5> : ""}
                            {props.card.legalities ? <h5>commander</h5> : ""}
                        </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OneCard;






            