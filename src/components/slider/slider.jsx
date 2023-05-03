import React, {useState} from 'react';
import "./slider.scss";
import { sliderData } from '../../slider-data';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = sliderData.length;

    const nextSlide = () => {
        setCurrent (current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent (current === 0 ? length - 1 : current -1);
    };

    return (
        <div className="slider">
            <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
            <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>
            {sliderData.map((slide,index) => {
                const {image, heading, desc} = slide
                return (
                    <div key={index} className={index === current ? "slide current" : "slide"}>
                        {index === current && (
                            <>
                                <img src={image} alt=''></img>
                                <div className="content">
                                    <h2>{heading}</h2>
                                    <p>{desc}</p>
                                    <hr />
                                    <Link to="/products"><Button variant='contained' className='btn_shop'>Shop Now</Button></Link>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Slider