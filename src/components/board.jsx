import React, { useState } from 'react';
import './board.css';
import LabelBox from './labelbox';

const Board = ({photo, click,onreset}) => {
    const [startX, setStartX] = useState('');
    const [startY, setStartY] = useState('');
    const [endX, setEndX] = useState('');
    const [endY, setEndY] = useState('');
    const [label, setLabel] = useState([])
 
   const dragStart =(e)=>{
    if(click){
       setStartX(e.clientX);
       setStartY( e.clientY);
    }
    }
    const dragEnd=(e)=>{
        if(click){
            setEndX(e.clientX);
            setEndY( e.clientY);
            onreset(true);
            setLabel([...label,{id : Date.now(), top : startY, left:startX, width : e.clientX, height : e.clientY}])
        } 
    }
    
    console.log(endY, endX);
   
    return(
        <article onDragStart={dragStart} onDragEnd={dragEnd} >
           
           {
             //  endX && <LabelBox left={startX} top={startY} />
             endX &&label.map(el => (<LabelBox left={el.left} top={el.top} key={el.id}
                                     width={el.width} height={el.height}   />)) 
                                       
           }
            <img src={photo} alt="배경사진"  width="100%" height="976px"/>
        </article>
       
    )
};

export default Board;