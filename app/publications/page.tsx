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
    author: string;
    link: string;
}

const postData: DataType[] = [
    {
        heading: 'Comparing Mixed Reality Agent Representations: Studies in the Lab and in the Wild',
        name: "VRST '23: Proceedings of the 29th ACM Symposium on Virtual Reality Software and Technology",
        date: 'October, 2023',
        //imgSrc: '',
        author: 'Ben J Congdon, Gun Woo Park, Jingyi Zhang, Anthony Steed',
        link: 'https://dl.acm.org/doi/abs/10.1145/3611659.3615719'
    },
    {
      heading: 'Extending the Open Source Social Virtual Reality Ecosystem to the Browser in Ubiq',
      name: "Proceedings of the 28th International ACM Conference on 3D Web Technology",
      date: 'October, 2023',
      //imgSrc: '',
      author: 'Sebastian Friston, Ben Congdon, Nels Numan, Klara Brandstätter, Lisa Izzouzi, Felix Thiel, Jingyi Zhang, Daniele Giunchi, David Swapp, Anthony Steed',
      link: 'https://doi.org/10.1145/3611314.3615903'
  },
    {
        heading: 'Supporting Co-Presence in Populated Virtual Environments by Actor Takeover of Animated Characters',
        name: "2023 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)",
        date: 'October, 2023',
        //imgSrc: '',
        author: 'Jingyi Zhang, Klara Brandstätter, Anthony Steed',
        link: 'https://doi.org/10.1109/ISMAR59233.2023.00110'
    },
    {
      heading: 'Reviving the Euston Arch: A Mixed Reality Approach to Cultural Heritage Tours',
      name: "2023 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)",
      date: 'October, 2023',
      //imgSrc: '',
      author: 'Ziwen Lu, Jingyi Zhang, Kalila Shapiro, Nels Numan, Simon Julier, Anthony Steed',
      link: 'https://doi.org/10.1109/ISMAR-Adjunct60411.2023.00181'
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
                        <h3 className="text-4xl sm:text-6xl font-bold">Publications</h3>
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
                                            <h3 className='text-base font-normal pt-1 opacity-75'>{items.author}</h3>
                                            
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
