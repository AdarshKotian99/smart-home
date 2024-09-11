import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import carousalimage1 from "../assets/carousal-image1.png"
import carousalimage2 from "../assets/carousal-image2.png"
import carousalimage3 from "../assets/carousal-image3.png"


export default function CarouselElement(){
    return(
        <div>
            <div className="carousal-header">
                <h1>Featured Projects</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
            <Carousel className="carousal-element">
                <Carousel.Item>
                    <img src={carousalimage1} className="banner-image" alt="banner" />
                    <Carousel.Caption>
                        <div className="carousal-data">
                            <div className="project-name">
                                <h3>Luxury Grand Residence City</h3>
                                <p>By Smart Home Developer Limited.</p>    
                            </div>
                            <div className="carousal-button"><b style={{fontSize:'1vw'}}>View Details</b></div>
                            <div className="project-details">
                                <h3>1,2,3 BHK Apartments</h3>

                                <p>San Diego, California</p>    
                            </div>
                            <div className="project-amount"><b style={{fontSize:'1.3vw'}}>$50,000 - $80,000</b></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>  
                    <img src={carousalimage2} className="banner-image" alt="banner" />
                    <Carousel.Caption>
                    <div className="carousal-data">
                            <div className="project-name">
                                <h3>Grand Vista Residences</h3>
                                <p>By Smart Home Developer Limited.</p>    
                            </div>
                            <div className="carousal-button"><b style={{fontSize:'1vw'}}>View Details</b></div>
                            <div className="project-details">
                                <h3>1,2,3 BHK Apartments</h3>
                                <p>Sacramento, California</p>    
                            </div>
                            <div className="project-amount"><b style={{fontSize:'1.3vw'}}>$50,000 - $90,000</b></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item> 
                    <img src={carousalimage3} className="banner-image" alt="banner" />
                    <Carousel.Caption>
                    <div className="carousal-data">
                            <div className="project-name">
                                <h3>Sapphire Springs Apartments</h3>
                                <p>By Smart Home Developer Limited.</p>    
                            </div>
                            <div className="carousal-button"><b style={{fontSize:'1vw'}}>View Details</b></div>
                            <div className="project-details">
                                <h3>1,2,3 BHK Apartments</h3>
                                <p>San Diego, California</p>    
                            </div>
                            <div className="project-amount"><b style={{fontSize:'1.3vw'}}>$40,000 - $80,000</b></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}