import React, {  useState } from 'react';
import './board.css';
import LabelBox from './labelbox';

const Board = ({photo, click,  select}) => {
    const [startX, setStartX] = useState('');
    const [startY, setStartY] = useState('');
    const [label, setLabel] = useState([]);
    const [selecLabel, setSelecLabe] = useState([]);
 
   const dragStart =(e)=>{
    if(click){
       setStartX(e.clientX);
       setStartY( e.clientY);
    }
    }
    const dragEnd=(e)=>{
        if(click){
            setLabel([...label,{id : Date.now(), top : startY, left:startX, width : e.clientX, height : e.clientY}])
        } 
    };
    
    const onselect=(thislabel, onoff)=>{
        if(select){
            if(!onoff){
                setSelecLabe([...selecLabel, thislabel]);
            }else {
                setSelecLabe(selecLabel.filter(el => el.id !== thislabel.id));
            }
        };
    };


   React.useEffect(()=>{
   window.addEventListener('keydown',(e)=>{
    if(e.code === "Backspace" || e.code === "Delete"){
        const del = label.filter(el => !selecLabel.includes(el));
        setLabel(del);
        setSelecLabe([]);
    }
    });
   });

    return(
        <article onDragStart={dragStart} onDragEnd={dragEnd}>
            {
             label.map(el => (<LabelBox  
                key={el.id} label={el} select={onselect} onanchor={select}  />))                     //     
           }
            <img src={photo} alt="배경사진"  width="100%" height="100%"/>
        </article>
       
    );
};

export default Board;