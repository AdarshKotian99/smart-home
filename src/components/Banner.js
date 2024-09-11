import React from "react";
import bannerImg from "../assets/banner-bg.png"


export default function Banner(){
    return(
        <div className="banner-container">
            <img src={bannerImg} className="banner-image" alt="banner"/>
        </div>
    )
}