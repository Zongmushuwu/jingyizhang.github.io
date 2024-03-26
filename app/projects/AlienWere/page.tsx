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
            <div className=" py-5" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>
                    {/* <Slider {...settings}> */}

                        <div className=' px-3 pt-5 pb-3 relative'>
                                        {/* <Image src='/images/room.png' alt="gaby" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="inline-block m-auto" /> */}
                                        {/* <div className="text-center"> */}
                        {/* <h3 className="text-blue text-lg font-normal tracking-widest">PUBLICATIONS</h3> */}
                            <h3 className="text-3xl sm:text-5xl font-bold pb-5">AlienWere - VR Game </h3>
                            
                            <h4 className='text-2xl font-bold text-black pt-3'>Master Group Coursework</h4>
                            <h3 className='text-base font-normal pt-1 opacity-75 pb-12'>Group member: Jingyi Zhang, Yuer Qiu, Ziheng Yin, Xiaohan Meng</h3>


                            <div className='text-xl font-normal text-black bg-lightgrey px-3 pt-3 rounded-3xl'> 
                                <h3 className='text-base font-bold text-black'>Abstract:</h3>
                                <h3 className='text-base font-normal text-black pb-2'>“ALIEN WERE” is a one-round 4-player game with the background of a spacecraft in danger. Players are assigned different identities - human or alien. To win the game, human players need to repair the spacecraft and execute the correct alien by voting, while the alien player has to kill all the humans and keep their identity secret. The game is built on the open-source library <Link href='http://ubiq.online/' className="text-blue">Ubiq</Link>.</h3>

                            </div>
                                <h3 className='text-xl font-bold text-black pt-10'>In-Game Screenshots</h3>
                            




                                <div className=" pt-5 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">

                                    <div className="mx-auto">
                                        <Image src="/images/Projects/AlienWere/point.png" width={600} height={306} alt="instaTwo" />
                                    </div>

                                    <div className="mx-auto">
                                        <Image src="/images/Projects/AlienWere/engine.png" width={600} height={306} alt="instaTwo" />
                                    </div>

                                    <div className="mx-auto">
                                        <Image src="/images/Projects/AlienWere/fire.png" width={600} height={306} alt="instaTwo" />
                                    </div>

                                    <div className="mx-auto">
                                        <Image src="/images/Projects/AlienWere/gun.png" width={600} height={306} alt="instaTwo" />
                                    </div>

                                    <div className="mx-auto">
                                        <Image src="/images/Projects/AlienWere/main.png" width={600} height={306} alt="instaTwo" />
                                    </div>

                                    <div className="mx-auto">
                                        <Image src="/images/Projects/AlienWere/oxygen.png" width={600} height={306} alt="instaTwo" />
                                    </div>

                                    <div className="mx-auto">
                                        <Image src="/images/Projects/AlienWere/user.png" width={600} height={306} alt="instaTwo" />
                                    </div>

                                    <div className="mx-auto">
                                        <Image src="/images/Projects/AlienWere/storage.png" width={600} height={306} alt="instaTwo" />
                                    </div>
                                </div>

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
