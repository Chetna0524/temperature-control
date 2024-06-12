import React, { useState, useEffect } from 'react'
import TempDisplay from './TempDisplay'
import Button from './Button'


export default function Home() {
  const [counter, setCounter] = useState(0); 
 const [background, setBackground] = useState("cold")
  function incr(){
    setCounter(prev => prev + 10);    
  }

function decr(){
    setCounter(prev => prev - 10)    
  } 

  useEffect(() => {
    if(counter > 30){
        setBackground("hot");
      }else{
        setBackground("cold")
      }
  },[counter])

 
  console.log(counter);
  return (
    <>
        <div className={`temp-box ${background}`}>
            <TempDisplay counter={counter} />
            <Button onClick={incr}> + </Button>
            <Button onClick={decr}> - </Button> 
        </div>
    </>
  )
}
