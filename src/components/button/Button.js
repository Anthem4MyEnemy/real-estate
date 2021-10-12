import React from 'react';
import "./button.css";
import { Link } from 'react-router-dom';
import {IoMdArrowRoundForward} from 'react-icons/io';

const Button = (props) => {
    return (
        <div className="btn" >
            <Link style={{whiteSpace:"nowrap",outline:"none",border:"none",minWidth:"0px",maxWidth:"200px",cursor:"pointer",textDecoration:"none",transition:"0.3s",display:"flex",justifyContent:"center",alignItems:"center",padding:"16px 24px",color:"#fff",fontSize:"20px"}} to={props.to}>
            {props.child}
            </Link>
        </div>
    )
}

export default Button;