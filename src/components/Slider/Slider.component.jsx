import React from 'react';

 export const  Slider = (props)=> {
    return (

        <section className="hero-slider hero-style">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image"
                             data-background="https://images.unsplash.com/photo-1578934191836-ff5f608c2228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80">
                            <div className="container">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>GUITAR CLASSES
                                        FOR KIDS</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Want to see your kid become more expressive?</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <a href="#" className="theme-btn-s2">Register now</a>
                                    <a href="#" className="theme-btn-s3"><i
                                        className="fas fa-chevron-circle-right"></i> Get Info</a>
                                </div>
                            </div>
                        </div>
                        //
                    </div>

                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image"
                             data-background="https://images.unsplash.com/photo-1579003087287-997fd4d18771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
                            <div className="container">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>GUITAR CLASSES
                                        FOR KIDS</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Want to see your kid become more expressive?</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <a href="#" className="theme-btn-s2">Register now</a>
                                    <a href="#" className="theme-btn-s3"><i className="fas fa-chevron-circle-right"></i>Get
                                        Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </section>
    );
}

