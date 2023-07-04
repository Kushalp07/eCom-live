import React, { useState } from 'react';
import "../css/Banner.css";
import { HiArrowRight, HiArrowLeft} from "react-icons/hi";

function Banner() {
    const[slide,setSlide]=useState(0);
    const data = [
        "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
        "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
        "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    ];

    const prevSlide=()=>{
        setSlide(slide===0?2:(prev)=>prev-1);
    };
    const nextSlide=()=>{
        setSlide(slide===2?0:(prev)=>prev+1);
    };
  return (
    <div className='overflow'>
        <div className='banner'>
            <div style={{transform:`translateX(-${slide * 100}vw)`}} className='main_banner'>
                <img  className='banner_img' src={data[0]} alt="img1" />
                <img className='banner_img' src={data[1]} alt="img2" />
                <img className='banner_img' src={data[2]} alt="img3" />
            </div>
            <div className="arrow_pos">
            <div className='banner_arrow mx-auto'>
                <div onClick={prevSlide} className='left'>
                    <HiArrowLeft/>
                </div>
                <div onClick={nextSlide} className='right'>
                    <HiArrowRight/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
