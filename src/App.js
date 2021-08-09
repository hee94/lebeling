import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Board from './components/board';
import './App.css'

const App = ({photos}) => {
  const [photoData, setPhotoData] = useState(null);
  const [click , setClick] = useState(false);
   
  useEffect(()=>{
    photos.photodata()
    .then(data =>setPhotoData(data[94].url))
  },[photos]);
 const onclick =()=>{
   setClick(true);
 }
 const onreset=(blen)=>{
   blen&& setClick(false)
 }
  return(
    <main>
       <Header />
       <section>
        <Nav createClick={onclick} />
        <Board photo={photoData} click={click} onreset={onreset}/>
       </section>
    </main>
  
  )
}

export default App;