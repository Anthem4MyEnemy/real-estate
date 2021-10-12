import React,{useState,useRef,useEffect } from 'react';
import Button from '../button/Button';
import "./hero.css";
import {IoArrowForward,IoArrowBack} from 'react-icons/io5';


const Hero = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide =() => {
            setCurrent(current =>(current===length-1 ? 0 : current+1))
        };
        
        timeout.current = setTimeout(nextSlide,3000);
        return function () {
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current,length ])

    const nextSlide =() =>{
        if(timeout.current){
            clearTimeout(timeout.current)
        };

        setCurrent(current === length-1?0:current +1);
    }
    const prevSlide =() =>{
        if(timeout.current){
            clearTimeout(timeout.current)
        };

        setCurrent(current === 0? length-1 :current - 1);
    }

    if(!Array.isArray(slides) || slides.length<=0){
        return null;
    }
    return (
        <section className="hero-section">
            <div className="hero-wrapper">
                {slides.map((slide,index)=>{  
                    return(
                        <div className="hero-slide" key={index}>
                            {index===current &&(

                                <div className="hero-slider">
                            <img src={slide.image} alt={slide.alt} className="hero-img"/>
                                <div className="hero-content">
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button 
                                    to={slides.path} 
                                    child={slide.label} 
                                    />
                                </div>                             
                            </div>
                            )}
                        </div>
                        )
                    })}
                    <div className="slider-btns">
                        <IoArrowBack className="back-arrow" onClick={prevSlide} />
                        <IoArrowForward className="forward-arrow" onClick={nextSlide}/>
                    </div>
            </div>
        </section>
    )
}

export default Hero
