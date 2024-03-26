"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    heading: string;
    date: string;
    //imgSrc: string;
    name: string;
    others: string;
    link: string;
}

const postData: DataType[] = [
    {
        heading: 'Supporting Co-Presence in Virtual Environments by Actor Control of Multiple Avatars',
        name: "Master - Thesis",
        date: 'Apr 2022 - Sep 2022',
        others: 'Supervisor: Prof Anthony Steed',
        link: '/projects/MasterThesis',
        //imgSrc: '',
    },
    {
      heading: 'AlienWere - VR Game',
      name: "Master - Group Coursework",
      date: 'Jan 2022 - Mar 2022',
      others: 'Group member: Jingyi Zhang, Yuer Qiu, Ziheng Yin, Xiaohan Meng',
      //imgSrc: '',
      link:'/projects/AlienWere'
  },
    {
        heading: 'Removal of Artifacts in Digitised Medical Optical Microscopy',
        name: "Undergrad - Thesis",
        date: 'Oct 2020 - Apr 2021',
        //imgSrc: '',
        others: 'Supervisor: Prof Delmiro Fernandez-Reyes',
        link:'/projects/UndergradThesis'
    },
    {
      heading: 'UCL-IXN + IBM: Intelligent Excursions',
      name: "Undergrad - Group Coursework",
      date: 'Jan 2018 - Jan 2019',
      //imgSrc: '',
      others: 'Group member: Jingyi Zhang, Zahra Essa, Ping Liu',
      link:'/projects/IntelligentExcursions'
  },

    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     name: "Published on Startupon",
    //     date: 'August 19, 2021',
    //     imgSrc: '/images/articles/article3.png',
    // },
    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     name: "Published on Startupon",
    //     date: 'August 19, 2021',
    //     imgSrc: '/images/articles/article.png',
    // },
    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     name: "Published on Startupon",
    //     date: 'August 19, 2021',
    //     imgSrc: '/images/articles/article2.png',
    // },
    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     name: "Published on Startupon",
    //     date: 'August 19, 2021',
    //     imgSrc: '/images/articles/article3.png',
    // },
]

// CAROUSEL SETTINGS


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
                        {postData.map((items, i) => (
                            <div key={i}  >
                              
                                <Link href= {items.link} >
                                  <div className='link-img :hover rounded-3xl m-3'>
                                    <div className='bg-white px-3 pt-3 pb-3 my-10 rounded-3xl relative'>
                                        {/* <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" /> */}

                                        
                                            {/* <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">{items.time} read</h3> */}
                                        <h3 className='text-base font-normal pt-1 opacity-75'>{items.name}</h3>
                                        <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading}</h4>
                                        
                                        {/* <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4> */}

                                        <div>
                                            <h3 className='text-base font-normal pt-1 opacity-75'>{items.others}</h3>
                                            
                                            <h3 className='text-base font-normal pb-1 opacity-75'>{items.date}</h3>
                                        </div>
                                      </div>
                                    </div>
                                </Link>
                              
                            </div>
                        ))}
                    {/* </Slider> */}
                </div>
            </div>

        );
    }
}
