import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';
const MenuItem = (props) =>{
     console.log(props);
    return (
        <div className=''>
            <Card style={{margin:"10px"}}>
                <CardBody >
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                        style={{opacity:"0.5"}}
                      />
                    <CardImgOverlay>
                        <CardTitle
                        onClick={() => props.DishSelect(props.dish)}
                        style={{color:"yellow", fontSize:"32px",cursor:"pointer" }}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>

                </CardBody>
            </Card>
        </div>
    );

}
export default MenuItem;
