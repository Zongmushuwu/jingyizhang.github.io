"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function UIST2025() {
    return (
        <div className="bg-white py-20">
            <div className='mx-auto max-w-4xl px-8'>
                {/* Publication Header */}
                <div className="mb-12">
                    <div className="relative">
                        {/* Date in top right corner */}
                        <div className="absolute top-0 right-0 z-10">
                            <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300 shadow-sm">
                                Sep 2025
                            </span>
                        </div>
                        
                        <div className="mb-4">
                            <p className="text-lg font-normal" style={{color: '#898989'}}>
                                38th ACM Symposium on User Interface Software and Technology (UIST 2025)
                            </p>
                        </div>
                        
                        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                            Do You See What I See? Bring Live Pedestrians into an Outdoor Collaborative Mixed Reality Experience
                        </h1>
                        
                        <div className="space-y-3 mb-6">
                            <p className="text-lg font-normal">
                                <span className="font-bold" style={{color: '#898989'}}>Jingyi Zhang</span>, <span style={{color: '#898989'}}>Ziwen Lu</span>, <span style={{color: '#898989'}}>Changrui Zhu</span>, <span style={{color: '#898989'}}>Simon Julier</span>, <span style={{color: '#898989'}}>Anthony Steed</span>
                            </p>
                            <p className="text-lg font-normal" style={{color: '#898989'}}>
                                University College London
                            </p>
                        </div>
                        
                        <div className="mt-8">
                            <p className="text-lg text-gray-700">
                                <a href="https://dl.acm.org/doi/full/10.1145/3746059.3747667" className="inline-flex items-center rounded-md px-3 py-1.5 text-lg font-medium hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" style={{backgroundColor: '#E5E7EB', color: '#000000'}} target="_blank" rel="noopener noreferrer">
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
                <div className="mb-12 px-8">
                    <div className="bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image 
                            src="/images/publication/UIST25/uist25-teaser.jpg" 
                            alt="UIST 2025 Paper Teaser Image" 
                            width={1200} 
                            height={675} 
                            className="w-full h-auto object-contain"
                            quality={95}
                        />
                    </div>
                    <p className="text-left text-sm text-gray-600 mt-4 leading-relaxed">
                        Illustration of our system for bringing live pedestrians from the real world into the virtual environment; Left: AR — The AR user is on-site, controlling a virtual avatar through an AR headset. They can view the VR user&apos;s virtual representation as well as the real pedestrians moving around them in the physical environment. Right: VR — The VR user is remote, controlling a virtual avatar through a VR headset. They can see the AR user&apos;s virtual representative and virtual pedestrians, which correspond to real pedestrians in the same physical location, moving in real-time just as they do in the real world.
                    </p>
                </div>

                {/* Abstract */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">ABSTRACT</h2>
                    <p className="text-lg leading-relaxed text-gray-700 font-normal">
                    Collaborative use of mixed reality (MR) devices is blurring the line between virtual and physical worlds. A remote virtual reality (VR) user immersed in a virtual replica of a real-world environment can interact in real-time with an augmented reality (AR) user who is physically present in that location. One challenge with such a setting is that the virtual world experienced by the remote users often lacks the richness of the real world, particularly in outdoor settings where dynamic elements, such as pedestrians, are missing. The first contribution of this paper is to report findings from focus group sessions on an example collaborative outdoor mixed reality system. Participants noted that lack of synchronisation between the AR and VR worlds diminishes the VR user’s sense of having visited the real-world location together with the AR user. To address this, our second contribution is a system that brings live dynamics into a collaborative MR experience using pedestrians as an example. We conducted a user study using a tour-guide scenario, where an in-situ guide using AR interacts with a remote participant in VR. Results showed that in this scenario, most participants perceived the virtual avatars they saw as representations of real humans in situ.
                    </p>
                </div>

                {/* Teaser Video */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">TEASER VIDEO</h2>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/IS8QN25n8sM" 
                            title="UIST 2025 Teaser Video" 
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
                            src="https://www.youtube.com/embed/g51IJ-tnfH4" 
                            title="UIST 2025 Supplemental Video" 
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
                            title="UIST 2025 Video Presentation" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div> */}

                {/* BibTeX */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">BibTeX</h2>
                    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`@inproceedings{10.1145/3746059.3747667,
author = {Zhang, Jingyi and Lu, Ziwen and Zhu, Changrui and Julier, Simon and Steed, Anthony},
title = {Do You See What I See? Bring Live Pedestrians into an Outdoor Collaborative Mixed Reality Experience},
year = {2025},
isbn = {9798400720376},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3746059.3747667},
doi = {10.1145/3746059.3747667},
booktitle = {Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology},
articleno = {171},
numpages = {14},
keywords = {Virtual Reality, Augmented Reality, Mixed Reality Collaboration},
series = {UIST '25}}}`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
