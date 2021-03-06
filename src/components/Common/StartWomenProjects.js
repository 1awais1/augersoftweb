import React from 'react';
import { Link } from "gatsby"

import ProjectStartImg from '../../assets/images/banner-img6.png'

import Shape2 from '../../assets/images/shape/shape2.png'
import Shape3 from '../../assets/images/shape/shape3.png'
import Shape5 from '../../assets/images/shape/shape5.png'
import Shape6 from '../../assets/images/shape/shape6.png'
import Shape7 from '../../assets/images/shape/shape7.png'
import Shape13 from '../../assets/images/shape/shape13.png'

const StartWomenProject = () => {
    return (
        <div className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src={ProjectStartImg} alt="Project" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <span className="sub-title">Get Started with our All women resources</span>
                            <h2>Kick-start your project</h2>
                            <p>Professional expertise and rapid development just a click away. Offering 100% women only resources for rapid development to kick-start your projects.Let's get started !.</p>
                            
                            <Link to="/contact" className="default-btn">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape2"><img src={Shape2} alt="Shape" /></div>
            <div className="shape3"><img src={Shape3} alt="Shape" /></div>
            <div className="shape5"><img src={Shape5} alt="Shape" /></div>
            <div className="shape6"><img src={Shape6} alt="Shape" /></div>
            <div className="shape7"><img src={Shape7} alt="Shape" /></div>
            <div className="shape13"><img src={Shape13} alt="Shape" /></div>
        </div>
    )
}

export default StartWomenProject;