import React from 'react';
import { useState } from 'react'

// Header Component 
function Header () {
  const websiteName = "Cool Profile"
  
  return (
    <header>
      <h1>{websiteName}</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
    )
}

// Body component 
function Body () {
   const myName = "Eunice";
  const myAge = 21;
  const hobby = "gardening"
  const specialSkill = "making tinctures with plants"
  
  return (
    <div>
     <h2>{myName}</h2>
     <p>my age is {myAge}</p>
     <h3>About Me</h3>
     <p>My favorite pastime is {hobby} and {specialSkill} .</p>
    </div> )
}


// JSX
// Footer component 
function Footer () {
 return ( <p>Eunice 2026</p>)
}



// react functions are called Components 
function App () {
  // start code 
 
 // html goes inside return 
  
  return (
    // jsx uses className instead of special js word class
    <div className="blue">
      <Header/>
      <Body/>
      <Footer/>
    </div>
    )
  
  
  // end code 
}

export default App
