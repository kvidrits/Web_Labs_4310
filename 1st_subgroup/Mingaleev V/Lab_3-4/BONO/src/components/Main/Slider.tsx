import React from 'react';
import classes from './Slider.module.css'
import sliderDivanSoho from '../../assets/images/slider-divan-soho.jpg'
import sliderOffice from '../../assets/images/slider-office.jpg'
import sliderSpring from '../../assets/images/slider-spring-scaled.jpg'

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className={`carousel slide ${classes.slider}`}  data-mdb-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div  className="carousel-inner h-100">
                <div className={`carousel-item active h-100 ${classes['carousel-img1']}`}></div>
                <div className={`carousel-item h-100 ${classes['carousel-img2']}`}></div>
                <div className={`carousel-item h-100 ${classes['carousel-img3']}`}></div>
            </div>
            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide="prev">
                <span className={`carousel-control-prev-icon ${classes['slider-control']}`} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide="next">
                <span  className={`carousel-control-next-icon ${classes['slider-control']}`} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;