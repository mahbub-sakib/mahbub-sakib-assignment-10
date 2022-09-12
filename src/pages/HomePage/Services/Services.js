import React from 'react';
import useServices from '../../../hooks/useServices';
import { Button, Card } from 'react-bootstrap';
import './Services.css';

const Services = () => {
    const [services, getServices] = useServices([]);
    const imgPath = '../../../Images/';
    const renderCard = (services, index) => {
        return (
            <Card key={index} >
                <Card.Img variant="top" className='card_img' src={imgPath + services.image} />
                <Card.Body>
                    <Card.Title>Name: {services.name}</Card.Title>
                    <Card.Text>
                        Description: {services.desc}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Price: {services.price}</small>
                    </Card.Text>
                </Card.Body>
                <div className='chkOut-btn'>
                    Checkout Now
                </div>
                {/* <Card.Footer>

                </Card.Footer> */}
            </Card>
        )
    }
    return (
        <div className='mt-4'>
            <h1 >Sakib's Pet Photography Services</h1>
            <div className='use-grid m-4'>
                {services.length != 0 && services.map(renderCard)}
            </div>
        </div>

    );
};

export default Services;