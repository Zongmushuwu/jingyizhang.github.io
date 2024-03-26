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
               <Image src='/images/home.png' alt="gaby" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="inline-block m-auto" />

                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>
                    {/* <Slider {...settings}> */}

                        <div className=' px-3 pt-5 pb-3 relative'>
                                        {/* <div className="text-center"> */}
                        {/* <h3 className="text-blue text-lg font-normal tracking-widest">PUBLICATIONS</h3> */}
                            <h3 className="text-3xl sm:text-5xl font-bold pb-5">UCL-IXN + IBM: Intelligent Excursions </h3>
                            
                            <h4 className='text-2xl font-bold text-black pt-3'>Undergrad - Group Coursework</h4>
                            <h3 className='text-base font-normal pt-1 opacity-75 pb-12'>Group member: Jingyi Zhang, Zahra Essa, Ping Liu</h3>


                            <div className='text-xl font-normal text-black bg-lightgrey px-3 pt-3 rounded-3xl'> 
                                <h3 className='text-base font-bold text-black'>Abstract:</h3>
                                <h3 className='text-base font-normal text-black pb-2'>Intelligent Excursions is an application which generates personalized holiday recommedations based on a user's interests, requirements and 5 keywords. We decided to implement the solution in the form of a website using the Flask Python Web Framework. The recommendations are generated using external API calls to find the best combination of accommodation and travel options for the user. Recommendations are filtered through IBM's Natural Language Processing and Tone Analyser APIs in order to determine their suitability.</h3>

                            </div>
                                <h3 className='text-xl font-bold text-black pt-10 pb-5'>Project Poster</h3>
                            
                                <Image src="/images/poster.png" width={0} height={0} alt="quicktrips" sizes="100vw" style={{width:'100%', height:'auto'}} className="inline-block m-auto" />



                                <div>
                                <h3 className='text-xl font-bold text-black pt-10'>Demo Video</h3>
                                <h3 className='text-base font-bold text-black pt-1'>Will be updated soon</h3>
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
