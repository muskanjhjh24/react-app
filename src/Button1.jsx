import React from 'react';
import Button from 'react-bootstrap/Button';


function Button1(){
  
  const styles={
     backgroundColor: "FBB667",
     borderRadius: "90px",
     outline: "0",
     color:"white",
     width: "10rem",
     height:"4rem",
     fontSize: "1.2rem"
     
     //lineHeight:"3px",
     //marginBottom:"2px",

     
     
     
   }
   //const divButton={
    // borderRadius:"90px",
    // backgroundColor:"white",
    //  border:"2px solid black",
    // width:"400px",
    // boxShadow: "2px 2px 2px #737a85"
    
   //}

  return(
    
 
    <div className="div-button" >
       <Button variant="warning" className="button" style={styles}>BOOK A TOUR</Button>
    </div>
                      
   
     )
  
    
}

export default Button1;