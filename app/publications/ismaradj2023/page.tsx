"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ISMARAdj2023() {
    return (
        <div className="bg-white py-20">
            <div className='mx-auto max-w-4xl px-8'>
                {/* Publication Header */}
                <div className="mb-12">
                    <div className="relative">
                        {/* Date in top right corner */}
                        <div className="absolute top-0 right-0 z-10">
                            <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300 shadow-sm">
                                Oct 2023
                            </span>
                        </div>
                        
                        <div className="mb-4">
                            <p className="text-lg font-normal" style={{color: '#898989'}}>
                                2023 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct 2023)
                            </p>
                        </div>
                        
                        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                            Reviving the Euston Arch: A Mixed Reality Approach to Cultural Heritage Tours
                        </h1>
                        
                        <div className="mb-4">
                            <p className="text-lg font-medium" style={{color: '#ca8a04'}}>
                                Honorable Mention for Best Design Award at ISMAR 2023 Student Competition
                            </p>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                            <p className="text-lg font-normal">
                                <span style={{color: '#898989'}}>Ziwen Lu</span>, <span className="font-bold" style={{color: '#898989'}}>Jingyi Zhang</span>, <span style={{color: '#898989'}}>Kalila Shapiro</span>, <span style={{color: '#898989'}}>Nels Numan</span>, <span style={{color: '#898989'}}>Simon Julier</span>, <span style={{color: '#898989'}}>Anthony Steed</span>
                            </p>
                            <p className="text-lg font-normal" style={{color: '#898989'}}>
                                University College London
                            </p>
                        </div>
                        
                        <div className="mt-8">
                            <p className="text-lg text-gray-700">
                                <a href="https://ieeexplore.ieee.org/abstract/document/10322275" className="inline-flex items-center rounded-md px-3 py-1.5 text-lg font-medium hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" style={{backgroundColor: '#E5E7EB', color: '#000000'}} target="_blank" rel="noopener noreferrer">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                                    </svg>
                                    Publisher
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Teaser Image */}
                {/* <div className="mb-12 px-8">
                    <div className="bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image 
                            src="/images/publication/ISMARAdj23/ismar23-teaser.jpg" 
                            alt="ISMAR-Adjunct 2023 Paper Teaser Image" 
                            width={1200} 
                            height={675} 
                            className="w-full h-auto object-contain"
                            quality={95}
                        />
                    </div>
                    <p className="text-left text-sm text-gray-600 mt-4 leading-relaxed">
                        Illustration of the Euston Arch reconstruction in mixed reality, showing how cultural heritage sites can be virtually restored and experienced through immersive technology for educational and tourism purposes.
                    </p>
                </div> */}

                {/* Abstract */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">ABSTRACT</h2>
                    <p className="text-lg leading-relaxed text-gray-700 font-normal">
                    Augmented Reality (AR) and Virtual Reality (VR) users have distinct capabilities and experiences during Extended Reality (XR) collaborations: while AR users benefit from real-time contextual information due to physical presence, VR users enjoy the flexibility to transition between locations rapidly, unconstrained by physical space.Our research aims to utilize these spatial differences to facilitate engaging, shared XR experiences. Using Google Geospatial Creator, we enable large-scale outdoor authoring and precise localization to create a unified environment. We integrated Ubiq to allow simultaneous voice communication, avatar-based interaction and shared object manipulation across platforms.We apply AR and VR technologies in cultural heritage exploration. We selected the Euston Arch as our case study due to its dramatic architectural transformations over time. We enriched the co-exploration experience by integrating historical photos, a 3D model of the Euston Arch, and immersive audio narratives into the shared AR/VR environment.
                    </p>
                </div>

                {/* Teaser Video */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">TEASER VIDEO</h2>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/bmGqmYb22Jw" 
                            title="ISMAR-Adjunct 2023 Teaser Video" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* Demo Video */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">SUPPLEMENTAL VIDEO</h2>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/z4xJjbyGJNk" 
                            title="ISMAR-Adjunct 2023 Supplemental Video" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* Video Presentation */}
                {/* <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">VIDEO PRESENTATION</h2>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/VIDEO_ID" 
                            title="ISMAR-Adjunct 2023 Video Presentation" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div> */}

                {/* Sydney Demo Video */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">DEMO at ISMAR 2023</h2>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/mbAin91cGpo" 
                            title="ISMAR-Adjunct 2023 Sydney Demo" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* BibTeX */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">BibTeX</h2>
                    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`@INPROCEEDINGS{10322275,
  author={Lu, Ziwen and Zhang, Jingyi and Shapiro, Kalila and Numan, Nels and Julier, Simon and Steed, Anthony},
  booktitle={2023 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)}, 
  title={Reviving the Euston Arch: A Mixed Reality Approach to Cultural Heritage Tours}, 
  year={2023},
  volume={},
  number={},
  pages={821-826},
  keywords={Location awareness;Solid modeling;Social computing;Three-dimensional displays;Scalability;Collaboration;Mixed reality;Human-centered computing [Human computer interaction (HCI)];Collaborative and social computing;Collaborative and social computing systems and tools;Interaction paradigms;Mixed/augmented reality},
  doi={10.1109/ISMAR-Adjunct60411.2023.00181}}
`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
