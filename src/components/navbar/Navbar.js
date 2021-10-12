import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import "./navbar.css"
import {menuData} from "../../data/MenuData"
import Button from '../button/Button';
import {FaBars} from "react-icons/fa";


const Navbar = ({toggle}) => {
    return (
        <nav>
            <Link to="/" style={{textDecoration:"none",display:"flex", color:"#fff", fontStyle:"italic", display:"flex", alignItems:"center", padding:"0 1rem", height:"100%", cursor:"pointer",border:"none"}}>ELEXIR</Link>
            <i className="menu-bars" >
            </i>
            <div className="bars">
                <FaBars onClick={toggle} style={{cursor:"pointer",height:"40px",width:"40px",position:"absolute",top:"0",right:"0", transform:"translate(-60%,25%)",color:"white"}}/>
            </div>
            <div className="nav-menu">
            <i>
                {menuData.map((item,index) => (
                    <Link to={item.link} key={index} style={{textDecoration:"none", color:"#fff", fontStyle:"italic" , alignItems:"center", padding:"0px 16px", height:"100%", cursor:"pointer"}}>
                        {item.title}
                    </Link>
                ))}
            </i>
            </div>
            <div className="nav-btn">
                <Button to="/contact" child="Contact Us"/>
            </div>
        </nav>
    )
}

export default Navbar;
