"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function VR2025() {
    return (
        <div className="bg-white py-20">
            <div className='mx-auto max-w-4xl px-8'>
                {/* Publication Header */}
                <div className="mb-12">
                    <div className="relative">
                        {/* Date in top right corner */}
                        <div className="absolute top-0 right-0 z-10">
                            <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300 shadow-sm">
                                Mar 2025
                            </span>
                        </div>
                        
                        <div className="mb-4">
                            <p className="text-lg font-normal" style={{color: '#898989'}}>
                                2025 IEEE Conference Virtual Reality and 3D User Interfaces (VR 2025)
                            </p>
                        </div>
                        
                        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                            Single Actor Controlling Multiple Avatars for Social Virtual Realities
                        </h1>
                        
                        <div className="space-y-3 mb-6">
                            <p className="text-lg font-normal">
                                <span className="font-bold" style={{color: '#898989'}}>Jingyi Zhang</span>, <span style={{color: '#898989'}}>Anthony Steed</span>
                            </p>
                            <p className="text-lg font-normal" style={{color: '#898989'}}>
                                University College London
                            </p>
                        </div>
                        
                        <div className="mt-8">
                            <p className="text-lg text-gray-700">
                                <a href="https://ieeexplore.ieee.org/abstract/document/10937446" className="inline-flex items-center rounded-md px-3 py-1.5 text-lg font-medium hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" style={{backgroundColor: '#E5E7EB', color: '#000000'}} target="_blank" rel="noopener noreferrer">
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
                            src="/images/publication/VR25/vr-25-teaser.jpg" 
                            alt="VR 2025 Paper Teaser Image" 
                            width={1200} 
                            height={675} 
                            className="w-full h-auto object-contain"
                            quality={95}
                        />
                    </div>
                    <p className="text-left text-sm text-gray-600 mt-4 leading-relaxed">
                        
                    </p>
                </div> */}

                {/* Abstract */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">ABSTRACT</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                    Social virtual reality applications aim to provide immersive, interactive experiences in populated environments with virtual characters. However, developing characters capable of natural verbal and non-verbal interactions remains a significant challenge, particularly when it comes to managing complex and unexpected interactions with users. To address these issues, we present a system that supports full-body avatars with six-point tracking and a streamlined switch control procedure, allowing one actor to assume control of multiple virtual humans and interact seamlessly with the users. The system supports both verbal and non-verbal interactions. In an experiment, we showed that our system enhances the sense of co-presence, creating the feeling that multiple distinct, human-controlled characters are present in the scene.
                    </p>
                </div>

                {/* Related Poster */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">RELATED POSTER</h2>

                        <p className="text-left text-base text-gray-700 mt-4 leading-relaxed">
                            The poster shown below is related to this paper and was presented at the 2024 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct).
                    </p>
                        <div className="mt-4 flex items-center gap-4">
                            <a href="https://doi.org/10.1109/ISMAR-Adjunct64951.2024.00175" className="inline-flex items-center rounded-md px-3 py-1.5 text-lg font-medium hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" style={{backgroundColor: '#E5E7EB', color: '#000000'}} target="_blank" rel="noopener noreferrer">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                                </svg>
                                Poster Publisher
                            </a>
                        </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        
                        <div className="mt-6">
                            <object data="/images/publication/VR25/poster.pdf" type="application/pdf" className="w-full h-[480px] md:h-[800px] rounded-md border border-gray-200">
                                <iframe src="/images/publication/VR25/poster.pdf" className="w-full h-full rounded-md" title="VR 2025 Poster PDF"></iframe>
                            </object>
                            <p className="text-xs text-gray-500 mt-2">If the PDF does not load, <a href="/images/publication/VR25/poster.pdf" className="underline" target="_blank" rel="noopener noreferrer">open it directly</a>.</p>
                        </div>
                        <div className="text-left text-sm text-gray-600 mt-4 leading-relaxed">
                            <p><span className="font-bold">Poster title:</span> Improved Takeover System: Enabling Single-Actor Control for Multi-Avatar Populated Virtual Realities</p>
                            <p className="mt-1"><span className="font-bold">Author:</span> Jingyi Zhang, Anthony Steed ｜  <span className="font-bold">Date:</span> Oct 24 </p>
                        </div>
                    </div>
                </div>

                {/* Poster Teaser Video */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">POSTER TEASER VIDEO</h2>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/aLmo0fbYpj4" 
                            title="VR 2025 Poster Teaser Video" 
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
                            src="https://www.youtube.com/embed/iVFHI_Ugt6Q" 
                            title="VR 2025 Supplemental Video" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* Video Presentation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">VIDEO PRESENTATION</h2>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/-r-9f6-Lkp0" 
                            title="VR 2025 Video Presentation" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* BibTeX */}
                <div>
                    <h2 className="text-2xl font-bold  mb-4">BibTeX</h2>
                    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`@INPROCEEDINGS{10937446,
  author={Zhang, Jingyi and Steed, Anthony},
  booktitle={2025 IEEE Conference Virtual Reality and 3D User Interfaces (VR)}, 
  title={Single Actor Controlling Multiple Avatars for Social Virtual Realities}, 
  year={2025},
  volume={},
  number={},
  pages={146-155},
  keywords={Human computer interaction;Three-dimensional displays;Avatars;Switches;Control systems;Systems support;Human computer interaction;Virtual reality;Social virtual reality},
  doi={10.1109/VR59515.2025.00039}}
`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
