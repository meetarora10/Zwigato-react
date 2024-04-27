import React, { useState } from 'react'
import './style.css'
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './Cardsdata';
import { useDispatch } from 'react-redux'
import { ADD } from '../redux/actions/action'
const Cards = () => {
    const [data, setData] = useState(Cardsdata);
    const dispatch = useDispatch();
    const send = (el) => {
        dispatch(ADD(el));
    }
    return (
        <>
            <Header />
            <div className='main mt-2' style={{backgroundColor:'white' ,color:'black'}}>
                <h2 className='text-center' style={{fontFamily:'Montserrat'}}>Popular restaurants</h2>
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        data.map((el, id) => {
                            return (
                                <>
                                    <Card style={{ width: '18rem', border: 'none' }} className='card mt-2 mx-3'>
                                        <Card.Img variant="top" src={el.imgdata} style={{ height: "17rem" }} />
                                        <Card.Body>
                                            <Card.Title>{el.rname}</Card.Title>
                                            <Card.Text>Meal for one : ₹ {el.price}</Card.Text>
                                            <div className="button d-flex justify-content-center">
                                                <Button variant="success" onClick={() => send(el)} style={{ width: '235px' }}>Add to Cart</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Cards
