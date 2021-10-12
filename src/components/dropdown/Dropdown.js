import React from 'react';
import"./dropdown.css";
import {Link} from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import { menuData } from '../../data/MenuData';
import Button from '../button/Button';

const Dropdown = ({toggle,isOpen}) => {
    return (
        <div className="dropdown-container" isOpen={isOpen} onClick={toggle} style={{opacity: isOpen?1:0, top:isOpen?0:"-100%"}} >

            <div className="icon" onClick={toggle} >
                <FaTimes className="close-item"/>
            </div>

                <div className="dropdown-wrapper">
                    <div className="dropdown-menu">
                        {menuData.map((item,index) =>(
                           <Link className="dropdown-link" to={item.link} key={index}>
                               {item.title}
                           </Link> 
                        ))}
                    </div>
                    
                    <div className="btn-wrapper">
                        <Button to="/contact" child="Contact Us">
                        </Button>
                    </div>
                </div>

        </div>
    )
}

export default Dropdown
