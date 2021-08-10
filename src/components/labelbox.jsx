import React, { useState } from 'react';
import './labelbox.css';

const LabelBox = ({label,select,onanchor}) => {
   const [anchor, setAnchor] = useState(false);
   const [moveX, setMoveX ] =useState('');
   const [moveY, setMoveY] = useState('')

    const { top, left, width, height } = label;
    const style = {
        top : moveY? moveY : top ,
        left : moveX? moveX : left,
        width : Math.max(left-width, width- left) ,
        height:  Math.max(top-height, height- top),
    }
   
   const onSelect =()=>{
    select(label ,anchor);
    console.log(anchor)
    if(onanchor){
        if(!anchor){
            setAnchor(true)
        }else {
            setAnchor(false)
        }
    }
    
   }
   const onMove=(e)=>{
 
    setMoveX(e.clientX);
    setMoveY(e.clientY);
   }
   console.log(moveX, moveY)
    return(
        <div onClick={onSelect} onDragEnd={onMove} className={anchor ? 'anchor' : 'labelwrap'} 
        style={style}>
        </div>
    )
  
    }
    

export default LabelBox;