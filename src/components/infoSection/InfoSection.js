import React from 'react';
import Button from '../button/Button';
import "./infoSection.css";

const InfoSection = ({heading,paragraphOne,paragraphTwo,buttonLabel,reverse,image}) => {
    return (
        <section className="section">
            <div className="container">

                <div className="col-left" style={{order:reverse?'2':'1'}}>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/home" child={buttonLabel}> </Button>
                </div>

                <div className="col-right" reverse={reverse} style={{order:reverse?'2':'1'}}>
                    <img src={image} alt="home"/>
                </div>

            </div> 
        </section>
    )
}

export default InfoSection
