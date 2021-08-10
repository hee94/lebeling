import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Board from './components/board';
import './App.css'

const App = ({photos}) => {
  const [photoData, setPhotoData] = useState(null);
  const [create , setCreate] = useState(false);
  const [select, setSelect] = useState(false);
   
  useEffect(()=>{
    photos.photodata()
    .then(data =>setPhotoData(data[55].url))
  },[photos]);

 const onclick =()=>{
   if(!create){
    setCreate(true);
   }else setCreate(false);
 }
 const onselect =()=>{
   if(!select){
    setSelect(true);
 }else setSelect(false);

   }
  
  return(
    <main>
       <Header />
       <section>
        <Nav createClick={onclick} onselect={onselect} />
        <Board photo={photoData} click={create} onreset={onreset} select={select}/>
       </section>
    </main>
  
  )
}

export default App;