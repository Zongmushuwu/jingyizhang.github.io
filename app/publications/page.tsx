"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

// PUBLICATION DATA

interface DataType {
    heading: string;
    date: string;
    imgSrc: string;
    venue: string;
    author: string;
    link: string;
    category: string;
}

const postData: DataType[] = [
    {
        heading: 'Do You See What I See? Bring Live Pedestrians into an Outdoor Collaborative Mixed Reality Experience',
        venue: "38th ACM Symposium on User Interface Software and Technology (UIST 2025)",
        date: 'Sep 25',
        imgSrc: '/images/publication/welcome page/uist25.jpeg',
        author: 'Jingyi Zhang, Ziwen Lu, Changrui Zhu, Simon Julier, Anthony Steed',
        link: '/publications/uist2025',
        category: 'UIST'
    },
    {
        heading: 'Single Actor Controlling Multiple Avatars for Social Virtual Realities',
        venue: "2025 IEEE Conference Virtual Reality and 3D User Interfaces (VR 2025)",
        date: 'Mar 25',
        imgSrc: '/images/publication/welcome page/vr25.png',
        author: 'Jingyi Zhang, Anthony Steed',
        link: '/publications/vr2025',
        category: 'VR'
    },
    {
        heading: 'Reviving the Euston Arch: A Mixed Reality Approach to Cultural Heritage Tours',
        venue: "2023 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct 2023)",
        date: 'Oct 23',
        imgSrc: '/images/publication/welcome page/ismaradj23.png',
        author: 'Ziwen Lu, Jingyi Zhang, Kalila Shapiro, Nels Numan, Simon Julier, Anthony Steed',
        link: '/publications/ismaradj2023',
        category: 'ISMAR-Adjunct'
    },
    {
        heading: 'Supporting Co-Presence in Populated Virtual Environments by Actor Takeover of Animated Characters',
        venue: "2023 IEEE International Symposium on Mixed and Augmented Reality (ISMAR 2023)",
        date: 'Oct 23',
        imgSrc: '/images/publication/welcome page/ismar23.png',
        author: 'Jingyi Zhang, Klara Brandstätter, Anthony Steed',
        link: '/publications/ismar2023',
        category: 'ISMAR'
    },
    {
        heading: 'Comparing Mixed Reality Agent Representations: Studies in the Lab and in the Wild',
        venue: "29th ACM Symposium on Virtual Reality Software and Technology (VRST 2023)",
        date: 'Oct 23',
        imgSrc: '/images/publication/welcome page/vrst23.jpeg',
        author: 'Ben J Congdon, Gun Woo Park, Jingyi Zhang, Anthony Steed',
        link: 'https://dl.acm.org/doi/abs/10.1145/3611659.3615719',
        category: 'VRST'
    },
    {
        heading: 'Extending the Open Source Social Virtual Reality Ecosystem to the Browser in Ubiq',
        venue: "28th International ACM Conference on 3D Web Technology",
        date: 'Oct 23',
        imgSrc: '/images/publication/welcome page/web3d.png',
        author: 'Sebastian Friston, Ben Congdon, Nels Numan, Klara Brandstätter, Lisa Izzouzi, Felix Thiel, Jingyi Zhang, Daniele Giunchi, David Swapp, Anthony Steed',
        link: 'https://doi.org/10.1145/3611314.3615903',
        category: 'Web3D'
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

export default function Publications() {
    // Function to format author names with bold for Jingyi Zhang
    const formatAuthors = (authors: string) => {
        return authors.split(', ').map((author, index) => {
            if (author.includes('Jingyi Zhang')) {
                return (
                    <span key={index}>
                        <strong>{author}</strong>
                        {index < authors.split(', ').length - 1 && ', '}
                    </span>
                );
            }
            return (
                <span key={index}>
                    {author}
                    {index < authors.split(', ').length - 1 && ', '}
                </span>
            );
        });
    };

    return (
        <div className="bg-lightgrey py-20" id="publications-section">
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center mb-16">
                        <h3 className="text-3xl sm:text-4xl font-black tracking-wider uppercase">Publications</h3>
                    </div>

                <div className="space-y-6">
                    {postData.map((publication, i) => (
                        <Link href={publication.link} key={i} className="block">
                            <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl mx-auto">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Left side - Visual element */}
                                    <div className="lg:w-1/3 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative">
                                        <Image 
                                            src={publication.imgSrc} 
                                            alt={publication.heading}
                                            fill
                                            className="object-cover"
                                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        />
                                    </div>

                                    {/* Right side - Text content */}
                                    <div className="lg:w-2/3 p-6 relative">
                                        {/* Date in top right corner */}
                                        <div className="absolute top-6 right-6 z-10">
                                            <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-300 shadow-sm">
                                                {publication.date}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl lg:text-2xl text-black mb-4 font-bold tracking-wide pr-20">
                                            {publication.heading}
                                        </h3>
                                        
                                        <div className="mb-2">
                                            <span className="text-sm font-medium" style={{ color: '#9CA3AF' }}>{publication.venue}</span>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {formatAuthors(publication.author)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
