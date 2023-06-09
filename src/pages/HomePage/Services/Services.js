import React from 'react';
import useServices from '../../../hooks/useServices';
import { Button, Card } from 'react-bootstrap';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const [services, getServices] = useServices([]);
    const imgPath = '../../../Images/';
    const navigate = useNavigate();

    const gotoCheckout = (id) => {
        console.log(id);
        navigate(`/checkout/${id}`);
    }

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
                <div onClick={() => gotoCheckout(services.id)} className='chkOut-btn'>
                    Checkout Now
                </div>

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