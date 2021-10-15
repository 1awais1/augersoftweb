import React from 'react';
import { Link } from "gatsby"

import PortfolioImg1 from '../../assets/images/portfolio/portfolio-img1.jpg'
import PortfolioImg2 from '../../assets/images/portfolio/portfolio-img2.jpg'
import PortfolioImg3 from '../../assets/images/portfolio/portfolio-img3.jpg'
import PortfolioImg4 from '../../assets/images/portfolio/portfolio-img4.jpg'
import PortfolioImg5 from '../../assets/images/portfolio/portfolio-img5.jpg'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 10,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
};

const CaseStudies = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="portfolio-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Women In Tech</span>
                    <h2>Check out our distinct accomplishments as All women Development Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>

            <div className="container-fluid">
                {display ? <OwlCarousel 
                    className="portfolio-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-portfolio-item">
                        <Link to="/single-portfolio" className="image d-block">
                            <img src={PortfolioImg1} alt="Portfolio" />
                        </Link>

                        <div className="content">
                            <h3>
                        
                                    Customer Satisfaction for a Digital Marketing Agency
                               
                            </h3>
                            <Link to="/single-portfolio" className="link-btn">
                                <i className="flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="single-portfolio-item">
                        <Link to="/single-portfolio" className="image d-block">
                            <img src={PortfolioImg2} alt="Portfolio" />
                        </Link>

                        <div className="content">
                            <h3>
                                
                                    Return on Investment for Various Digital Marketing Strategies
                               
                            </h3>
                            <Link to="/single-portfolio" className="link-btn">
                                <i className="flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="single-portfolio-item">
                        <Link to="/single-portfolio" className="image d-block">
                            <img src={PortfolioImg3} alt="Portfolio" />
                        </Link>

                        <div className="content">
                            <h3>
                                
                                    Google Search Engine Marketing Case Study Analysis
                                
                            </h3>
                            <Link to="/single-portfolio" className="link-btn">
                                <i className="flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="single-portfolio-item">
                        <Link to="/single-portfolio" className="image d-block">
                            <img src={PortfolioImg4} alt="Portfolio" />
                        </Link>

                        <div className="content">
                            <h3>
                                
                                    Analysis of New Product Launch Using Google Double Click
                                
                            </h3>
                            <Link to="/single-portfolio" className="link-btn">
                                <i className="flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="single-portfolio-item">
                        <Link to="/single-portfolio" className="image d-block">
                            <img src={PortfolioImg5} alt="Portfolio" />
                        </Link>

                        <div className="content">
                            <h3>
                                
                                    Social Media Strategies for Online Shopping Cart
                               
                            </h3>
                            <Link to="/single-portfolio" className="link-btn">
                                <i className="flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default CaseStudies;