import { Button } from 'bootstrap';
import React from 'react';
import Button1 from './Button1';
import img1 from './Group 1.png'


const Para = () =>{
    return(
        <>
          <header>
              <section class="container main-hero-container">
                  <div className="row">
                      <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                          <h1 className="display-2">Find your next place <br/> to travel</h1>
                          <p className="main-hero-para">Lorem Ipsum has been the industry's standard dummy text ever since <br/> the 1500s, when an unknown printer took a galley of type.</p>
                          <div className="input-group mt-3">
                              <input type="text"  className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text"  
                              value="Burj khalifa, Dub"
                              />
                               
                              

                              <div className="input-group-button">
                                  Search
                                  
                              </div>

                          </div>

                      </div>
                      <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images ">
                          <img src={img1} alt="loading" className="img-fluid" />

                      </div>
                  </div>

              </section>
          </header>
        </>
    );
};

export default Para;