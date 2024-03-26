"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        {/* <h3 className="text-blue text-lg font-normal tracking-widest">PUBLICATIONS</h3> */}
                        <h3 className="text-4xl sm:text-6xl font-bold">Projects</h3>
                    </div>


                    {/* <Slider {...settings}> */}
       
                              
                                  <div className='link-img :hover rounded-3xl m-3'>
                                    <div className='bg-white px-3 pt-3 pb-3 my-10 rounded-3xl relative'>
                                        {/* <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" /> */}

                                        
                                            {/* <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">{items.time} read</h3> */}
                                        <h3 className='text-base font-normal pt-1 opacity-75'>hii</h3>
                                        <h4 className='text-2xl font-bold pt-1 text-black'>testttt</h4>
                                        
                                        {/* <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4> */}

                                        <div>
                                            <h3 className='text-base font-normal pt-1 opacity-75'>testtt</h3>
                                            
                                            <h3 className='text-base font-normal pb-1 opacity-75'>testtt</h3>
                                        </div>
                                      </div>
                                    </div>
                              
                    {/* </Slider> */}
                </div>
            </div>

        );
    }
}
