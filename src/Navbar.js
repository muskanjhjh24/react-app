import React, {useState} from 'react';
//import {Link} from 'react-router-dom';
import Button from './Button1';
import Heading from './Heading'


const Navbar = () =>
{
    const [show,setShow]= useState(false);
    return(
        <>
        <section className ="navbar-bg">
         
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
      <Heading/>
    <a class="navbar-brand " href="#">Discover</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=> setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : ""}`} >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Destination</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About-us</a>
        </li>
       
        
      </ul>
      <form class="d-flex">
        
        
        <Button/>
      </form>
    </div>
  </div>
</nav>
</section>
        

             

        


        </>
        

    )
}

export  default  Navbar;