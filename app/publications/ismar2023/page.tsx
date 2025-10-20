"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ISMAR2023() {
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
                                2023 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)
                            </p>
                        </div>
                        
                        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                            Supporting Co-Presence in Populated Virtual Environments by Actor Takeover of Animated Characters
                        </h1>
                        
                        <div className="space-y-3 mb-6">
                            <p className="text-lg font-normal">
                                <span className="font-bold" style={{color: '#898989'}}>Jingyi Zhang</span>, <span style={{color: '#898989'}}>Klara Brandstätter</span>, <span style={{color: '#898989'}}>Anthony Steed</span>
                            </p>
                            <p className="text-lg font-normal" style={{color: '#898989'}}>
                                University College London
                            </p>
                        </div>
                        
                        <div className="mt-8">
                            <p className="text-lg text-gray-700">
                                <a href="https://doi.org/10.1109/ISMAR59233.2023.00110" className="inline-flex items-center rounded-md px-3 py-1.5 text-lg font-medium hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" style={{backgroundColor: '#E5E7EB', color: '#000000'}} target="_blank" rel="noopener noreferrer">
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
                            src="/images/publication/ISMAR23/ismar23-teaser.jpg" 
                            alt="ISMAR 2023 Paper Teaser Image" 
                            width={1200} 
                            height={675} 
                            className="w-full h-auto object-contain"
                            quality={95}
                        />
                    </div>
                    <p className="text-left text-sm text-gray-600 mt-4 leading-relaxed">
                    Scenario with one actor jumping between several “agent avatars” and interacting with the user when necessary. (a) The user enters the scene and discovers three agent avatars. All three agent avatars are playing pre-recorded, loopable clips. Two of them portray customers while the third one acts as the barista. An actor, who is invisible to the user, is ready to take over any of the agent avatars and interact with the user. (b) The actor realizes that the participant intended to interact with agent avatar number 0, who is playing the role of a barista. Consequently, the actor plans to take control of that agent avatar and embody it to respond to and interact with the user. (c) The actor takes control of Avatar0 and is now interacting with the user. Meanwhile, all the other agent avatars continue to play their pre-recorded clips. (d) The actor releases control of Avatar0 and switches to another agent avatar to interact with the user. This creates the illusion that all three agent avatars were being controlled by real humans.
                    </p>
                </div>

                {/* Abstract */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">ABSTRACT</h2>
                    <p className="text-lg leading-relaxed text-gray-700 font-normal">
                    Online social virtual worlds are now becoming widely available on consumer devices including virtual reality headsets. One goal of a virtual world could be to give a user an experience of a crowded environment with many virtual humans. However, gathering enough personnel to control the necessary number of avatars for creating a realistic scene is usually difficult. Additionally, current technology is not capable of fully simulating avatars with behaviours, especially when interaction with users is required. In this paper, we develop a system that enables an actor to take over control of one of a set of avatars. We built an immersive interface that allows an actor to select an avatar to take over and then segue into the currently playing animation. By allowing one person to take control of multiple avatars, we can enhance the plausibility of environments inhabited by simulated characters. In an experiment, we show that in a cafe scenario, one actor can take over the roles of a barista and two customers. Experiment participants reported experiencing the scene as if it were populated by more than one actor. This system and experiment demonstrate the feasibility of one actor controlling multiple avatars sequentially, thus enhancing users’ feelings of being in a populated environment.
                    </p>
                </div>

                {/* Demo Video */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">SUPPLEMENTAL VIDEO</h2>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/5je4EwTVOi8" 
                            title="ISMAR 2023 Supplemental Video" 
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
                            src="https://www.youtube.com/embed/iIpDjR1eHmk" 
                            title="ISMAR 2023 Video Presentation" 
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
{`@INPROCEEDINGS{10316418,
  author={Zhang, Jingyi and Brandstätter, Klara and Steed, Anthony},
  booktitle={2023 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)}, 
  title={Supporting Co-Presence in Populated Virtual Environments by Actor Takeover of Animated Characters}, 
  year={2023},
  volume={},
  number={},
  pages={940-949},
  keywords={Headphones;Avatars;Virtual environments;Animation;Personnel;Augmented reality;Human-centered computing;Human computer interaction (HCI);Interaction paradigms;Virtual reality},
  doi={10.1109/ISMAR59233.2023.00110}}
`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
