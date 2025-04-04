import React from'react'
import child from "./child";
import {useState} from 'react';
export default function App17(props){
    const[count, setCount]=useState(0);
    const num= new Date()
    return(
    <div>
        <h3>App 17</h3>
        <child num={5}/>
        <p>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </p>
        <p>{count}</p>
        {props.num}
    </div>
)
}