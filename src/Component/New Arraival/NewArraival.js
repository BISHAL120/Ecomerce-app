import React, { useState } from 'react';
import './NewArraival.css'
import { useNavigate } from 'react-router-dom';

const NewArraival = (props) => {
    const { _id, tittle, rating, price, img1 } = props.tshart;


    const navigate = useNavigate();
    const detail = (_id) => {
        navigate(`product/${_id}`)
    }

    let Tittle = tittle;
    if(tittle.length > 45){
        Tittle = `${Tittle.slice(0, 45)} ...`;
    }

    return (
        <div>
            <section onClick={() => detail(_id)} className='Arraival-section1'>
                <div className="container-xxl">
                    <div className="row mx-auto">
                        <div className="cart">
                            <img src={img1} alt="t-shart-img" />
                            <div className='cart-detail'>
                                <h2 className='tittle mt-5'>{Tittle}</h2>
                                <p className='rating'>Rating : {rating}</p>
                                <p className='price'>${price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewArraival;