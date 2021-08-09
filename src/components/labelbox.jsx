import React from 'react';
import './labelbox.css';

const LabelBox = ({top, left, width, height}) => {
    //Math.max(x - startX, startX - x
    const style = {
        top : top ,
        left : left,
        width : Math.max(left-width, width- left) ,
        height:  Math.max(top-height, height- top),
    }
   const labelClick =()=>{
       console.log('dpdp')
   }

    return(
        <div className="labelwrap" style={style} >
            <label onClick={labelClick}>라벨</label>
        </div>
    )
  
    }

export default LabelBox;