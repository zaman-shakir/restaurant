import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText} from 'reactstrap';

const DisDetail = (props) =>{
    return (
        <div>
            <Card  style={{marginTop:"10px"}}>
                <CardBody style={{textAlign:"left",padding:"10px"}}>
                    <CardImg top src={props.dish.image} alt={props.dish.name} />
                    <CardTitle  style={{marginTop:"15px"}}>
                        {props.dish.name}
                    </CardTitle>
                    <CardText>
                    <p>{props.dish.description}</p>
                    <p>{props.dish.price}/-</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default DisDetail;
