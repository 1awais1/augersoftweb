import React, { Component } from 'react'  


import Carousel from 'react-bootstrap/Carousel'  
import BlogImg1 from "../../assets/images/carousel/img1.jpg";
import BlogImg2 from "../../assets/images/carousel/img2.jpg";
import BlogImg3 from "../../assets/images/carousel/lake.jpg";


export class BootstrapCarousel extends Component {  

        render() {  

  

                return (  

                        <div>  

                         <div class='container-fluid' >  

                          <div className="row title" style={{ marginBottom: "50px",marginTop:"50px" }} >  

                          {/* <div class="col-sm-12 btn btn-warning">  

                          How To Use Bootstrap Carousel In ReactJS  

                         </div>   */}

                         </div>  

                         </div>  

                         <div className='container-fluid' >  
                         <div className="col-lg-12 col-md-12">
                         <Carousel>   

                         <Carousel.Item style={{'height':"500px"}} >  

                         <img style={{'width':"300px",'height':"400px"}}  

                         className="d-block w-100"  

                        src={BlogImg1}  />  

                           <Carousel.Caption>  

                             <h3>First Demo </h3>  

                                 </Carousel.Caption>  

                                 </Carousel.Item  >  

                                 <Carousel.Item style={{'height':"500px  "}} >  

<img style={{'width':"400px",'height':"400px"}}  

                                   className="d-block w-100"  

                                    src={BlogImg2}    />  

                                       <Carousel.Caption>  

                                   <h3>Second Demo</h3>  

                                      </Carousel.Caption>  

                                         </Carousel.Item>  

                                         <Carousel.Item style={{'height':"500px  "}} >  

<img style={{'width':"400px",'height':"400px"}}  

                                        className="d-block w-100"  

                                         src={BlogImg3}   />  

                                        <Carousel.Caption>  

                                          <h3>Third Demo</h3>  

                                          </Carousel.Caption>  

                                         </Carousel.Item>  

                                        </Carousel>  
</div>
                                </div>  

                        </div>  

                )  
        }  

}  

  

export default BootstrapCarousel  