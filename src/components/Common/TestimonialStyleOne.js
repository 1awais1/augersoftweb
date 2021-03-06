import React from 'react';

import User1 from '../../assets/images/user1.jpg'
import User2 from '../../assets/images/user2.jpg'
import User3 from '../../assets/images/user3.jpg'
import TestimonialsImg from '../../assets/images/testimonials-img.jpg'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))
 
const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

const TestimonialStyleOne = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonials-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="testimonials-content">
                            <span className="sub-title">Testimonials</span>
                            <h2>What Our Clients Are Saying?</h2>

                            {display ? <OwlCarousel 
                                className="testimonials-slides owl-carousel owl-theme"
                                {...options}
                            >
                                <div className="single-testimonials-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src={User1} alt="User" />
                                            <div className="title">
                                                <h3>John Smith</h3>
                                                <span>Python Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-testimonials-item">
                                    <p>Thank you for your prompt deliveries to our Doe Plant.

In our business we must get our products to the stores on a regular schedule. We rely on dependable service from suppliers like you to help us keep our schedule and satisfy our customers. We want you to know that we appreciate your efforts and look forward to continuing our business relationship.</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src={User2} alt="User" />
                                            <div className="title">
                                                <h3>Sarah Taylor</h3>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-testimonials-item">
                                    <p>We want you to know how much we appreciate the way you have cared for our lawns and flowers this year. I can't remember a time when our lawns have looked so nicely groomed and weed-free, or when the flowers have been more beautiful. Several visitors to the corporate headquarters have commented on how nice things look. Thank you for your excellent service.</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src={User3} alt="User" />
                                            <div className="title">
                                                <h3>James Anderson</h3>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel> : ''}
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="testimonials-image">
                            <img src={TestimonialsImg} alt="Testimonials" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialStyleOne;