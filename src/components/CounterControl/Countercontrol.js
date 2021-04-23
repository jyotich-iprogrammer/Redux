import React from 'react';
import  './Countercontrol.css';


const Countercontrol=(props)=>(
    <div className="Countercontrol" onClick={props.clicked}>
        {props.label}
    </div>
);





export default Countercontrol;