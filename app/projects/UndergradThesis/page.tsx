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
            <div className="" id="blog-section">
                <Image src='/images/artifact.jpg' alt="gaby" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="inline-block m-auto" />

                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>
                    {/* <Slider {...settings}> */}

                        <div className=' px-3 pt-5 pb-3 relative'>
                                        {/* <div className="text-center"> */}
                        {/* <h3 className="text-blue text-lg font-normal tracking-widest">PUBLICATIONS</h3> */}
                            <h3 className="text-3xl sm:text-5xl font-bold pb-5">Removal of Artifacts in Digitised Medical Optical Microscopy </h3>
                            
                            <h4 className='text-2xl font-bold text-black pt-3'>Bachelor Thesis</h4>
                            <h3 className='text-base font-normal pt-1 opacity-75 pb-12'>Supervisor: Prof Delmiro Fernandez-Reyes</h3>


                            <div className='text-xl font-normal text-black bg-lightgrey px-3 pt-3 rounded-3xl'> 
                                <h3 className='text-base font-bold text-black'>Abstract:</h3>
                                <h3 className='text-base font-normal text-black pb-2'>Malaria remains to be a global health challenge causing half a million deaths annually. With imaging processing and deep learning, many approaches have been proposed to analyze Microscopic Blood Films automatedly; however, the presence of artifacts increases the difficulties of digital pathology. This project mainly focuses on stain artifacts in Giemsa stained thin blood smear. We aim to verify the feasibility of image processing method and machine learning models that could help remove artifacts in appointed images. The critical challenges of this project are lacking cell-level labels, corresponded supervised dataset, and the difficulty of separating parasites and artifacts which looks similar.</h3>
                                <h3 className='text-base font-normal text-black pb-2'>The proposed image processing algorithm is concerning both color difference and area difference of artifacts and cells. The algorithm divides the artifacts into two sets (inside and outside the cells) and removes them under similar ideas by selecting out all artifacts, making masks for the selected area, and then inpaint the mask. However, due to the random feature of artifacts, it is impossible to find a suitable threshold for all types of artifacts, and there are too many of them, so we conclude this algorithm to be inefficient. We have applied the CycleGAN framework to our dataset and fine-tune it to be suitable for our problem, and we find this method is effective in removing small artifacts but may perform weaker on larger ones.</h3>
                            </div>
                                

                                

                </div>

                            
                                        
                                            {/* <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">{items.time} read</h3> */}
                        
                        
                        {/* <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4> */}

                        {/* <div>
                            <h3 className='text-base font-normal pt-1 opacity-75'>testtt</h3>
                            
                            <h3 className='text-base font-normal pb-1 opacity-75'>testtt</h3> */}
                        {/* </div> */}
                        {/* </div> */}
                              
                    {/* </Slider> */}
                </div>
            </div>

        );
    }
}
