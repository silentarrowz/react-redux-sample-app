import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import './index.scss';

const TopButtons = (props) => (   
    <div className="buttonContainer"> 
        <Button ><Link to ='/animals'>Animals</Link></Button>
        <Button><Link to ='/fruits'>Fruits</Link></Button> 
    </div>         
)

export default TopButtons;