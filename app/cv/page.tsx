import React from "react";
import Link from "next/link";

const CV = () => {
    return (
        <div className="mx-auto max-w-4xl pt-5 px-6">
            {/* Name */}
            <div className="text-center mb-12 relative">
                {/* PDF Button in top right corner */}
                <div className="absolute top-0 right-0 z-10">
                    <a href="/JingyiZhang_CV.pdf" className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" style={{backgroundColor: '#E5E7EB', color: '#000000'}} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                        </svg>
                        PDF
                    </a>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900">Jingyi Zhang</h1>
                <p className="text-lg mt-2" style={{color: '#7F7F7F'}}>jy.zhang@ucl.ac.uk | <Link href="/" className="group inline-flex items-baseline" target="_blank" rel="noopener noreferrer"><svg className="w-4 h-4 mr-1 text-yellow-600" style={{color: '#ca8a04'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg><span className="group-hover:text-yellow-600 group-hover:underline">jingyizhang.com</span></Link> | <Link href="https://linkedin.com/in/jingyi-zhang-1045161a9" className="group inline-flex items-baseline" target="_blank" rel="noopener noreferrer"><svg className="w-4 h-4 mr-1 text-yellow-600" style={{color: '#ca8a04'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg><span className="group-hover:text-yellow-600 group-hover:underline">linkedin.com/in/jingyi-zhang-1045161a9</span></Link></p>
            </div>

            {/* Education Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
                <div className="border-b border-gray-200 mb-6"></div>
                
                <div className="mb-6">
                    <div className="mb-2">
                        <div className="flex items-center gap-2 justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">PhD Computer Science <span style={{color: '#7F7F7F'}}>| University College London</span></h3>
                            <p className="font-medium whitespace-nowrap" style={{color: '#000000'}}>04/2023 - now</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-normal">Supervisors:</span> <span className="font-light">Prof. Anthony Steed, Prof. Ifat Yasin</span></p>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-2">
                        <div className="flex items-center gap-2 justify-between">
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg font-semibold text-gray-900">MSc Computer Graphics, Vision and Imaging <span style={{color: '#7F7F7F'}}>| University College London</span></h3>
                                <span className="text-yellow-600 text-sm font-medium" style={{color: '#ca8a04'}}>
                                    Distinction
                                </span>
                            </div>
                            <p className="font-medium whitespace-nowrap" style={{color: '#000000'}}>09/2021 - 09/2022</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-normal">Modules:</span> <span className="font-light" style={{wordBreak: 'break-word', hyphens: 'auto'}}>Machine Learning for Visual Computing | Image Processing | Computer Graphics | Machine Vision | Numerical Optimisation | Perception and Interfaces | Robot Vision and Navigation | Virtual Environment</span></p>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-normal">Thesis:</span> <Link href="/projects/MasterThesis" className="group inline-flex items-baseline" target="_blank" rel="noopener noreferrer"><svg className="w-4 h-4 mr-1 text-yellow-600" style={{color: '#ca8a04'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg><span className="font-light group-hover:text-yellow-600 group-hover:underline">&ldquo;Supporting Co-Presence in Virtual Environments by Actor Control of Multiple Avatars&rdquo;</span></Link>, <span className="font-normal">Supervisor:</span> <span className="font-light">Prof. Anthony Steed</span> <span className="text-yellow-600 font-medium" style={{color: '#ca8a04'}}>Developed to a <Link href="/publications/ismar2023" className="group inline-flex items-baseline" target="_blank" rel="noopener noreferrer"><svg className="w-4 h-4 mr-1 text-yellow-600" style={{color: '#ca8a04'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg><span className="group-hover:text-yellow-600 group-hover:underline">Paper</span></Link> submitted to ISMAR 2023</span></p>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-2">
                        <div className="flex items-center gap-2 justify-between">
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg font-semibold text-gray-900">BSc Computer Science <span style={{color: '#7F7F7F'}}>| University College London</span></h3>
                                <span className="text-yellow-600 text-sm font-medium" style={{color: '#ca8a04'}}>
                                    1st Class Honours
                                </span>
                            </div>
                            <p className="font-medium whitespace-nowrap" style={{color: '#000000'}}>09/2018 - 06/2021</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-normal">Thesis:</span> <Link href="/projects/UndergradThesis" className="group inline-flex items-baseline" target="_blank" rel="noopener noreferrer"><svg className="w-4 h-4 mr-1 text-yellow-600" style={{color: '#ca8a04'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg><span className="font-light group-hover:text-yellow-600 group-hover:underline">&ldquo;Removal of Artefacts in Digitised Medical Optical Microscopy&rdquo;</span></Link>, <span className="font-normal">Supervisor:</span> <span className="font-light">Prof. Delmiro Fernandez-Reyes</span></p>
                    </div>
            </div>
        </div>

            {/* Work Experience Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
                <div className="border-b border-gray-200 mb-6"></div>
                
                <div className="mb-6">
                    <div className="mb-2">
                        <div className="flex items-center gap-2 justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">Teaching Assistant <span style={{color: '#7F7F7F'}}>| University College London</span></h3>
                            <p className="font-medium whitespace-nowrap" style={{color: '#000000'}}>09/2023 - now</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• COMP0016 System Engineering - Coursework marking, student project management.</span></p>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• COMP0113 Virtual Environment - Coursework marking, lab tutorial (Unity, Ubiq, C#).</span></p>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• COMP0026 Image Processing - Coursework Marking, lab Q&A.</span></p>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-2">
                        <div className="flex items-center gap-2 justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">Research Assistant <span style={{color: '#7F7F7F'}}>| University College London</span></h3>
                            <p className="font-medium whitespace-nowrap" style={{color: '#000000'}}>Nov 2022 - Dec 2022</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Conducted Research on comparing agent representation in mixed reality.</span> <span className="text-yellow-600 font-medium" style={{color: '#ca8a04'}}>Developed to a <Link href="https://doi.org/10.1145/3611659.3615719" className="group inline-flex items-baseline" target="_blank" rel="noopener noreferrer"><svg className="w-4 h-4 mr-1 text-yellow-600" style={{color: '#ca8a04'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg><span className="group-hover:text-yellow-600 group-hover:underline">Paper</span></Link> submitted to VRST 2023.</span></p>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-2">
                        <div className="flex items-center gap-2 justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">Student Summer Internship <span style={{color: '#7F7F7F'}}>| Tencent (Shenzhen, Guangdong, China)</span></h3>
                            <p className="font-medium whitespace-nowrap" style={{color: '#000000'}}>Aug 2021 - Sep 2021</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Collaborated with senior researchers to produce demo of Volumetric video and motion capture technique.</span></p>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Responsible for writing group project plan and progress report.</span></p>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Wrote speech scripts and PPT for technology conference.</span></p>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Wrote an industry survey about metaverse techniques and companies.</span></p>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-2">
                        <div className="flex items-center gap-2 justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">Student Summer Internship <span style={{color: '#7F7F7F'}}>| Microsoft (Guangzhou, Guangdong, China)</span></h3>
                            <p className="font-medium whitespace-nowrap" style={{color: '#000000'}}>Jul 2020 - Aug 2020</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Developed a speech to speech translation software for conference use by calling Microsoft Azure Cognitive Service API, and released the tutorial in official account to promote it and the Neural Speech Service.</span> <span className="text-yellow-600 font-medium" style={{color: '#ca8a04'}}><Link href="https://mp.weixin.qq.com/s/Jll490zMTIG8HaI35xB53A" className="group inline-flex items-baseline" target="_blank" rel="noopener noreferrer"><svg className="w-4 h-4 mr-1 text-yellow-600" style={{color: '#ca8a04'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg><span className="group-hover:text-yellow-600 group-hover:underline">Wechat Article</span></Link></span></p>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Used MXchip and Raspberry Pi as the physical device, popularized the scientific applications of the Internet of Things, Microsoft Azure, Power BI through small projects such as Auto Voice Weather Forecast and Word Cloud, which was published on country&apos;s biggest video-sharing site.</span> <span className="text-yellow-600 font-medium" style={{color: '#ca8a04'}}><Link href="https://m.bilibili.com/video/BV1Kk4y1C7Ru" className="group inline-flex items-baseline" target="_blank" rel="noopener noreferrer"><svg className="w-4 h-4 mr-1 text-yellow-600" style={{color: '#ca8a04'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg><span className="group-hover:text-yellow-600 group-hover:underline">Bilibili Video</span></Link></span></p>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Wrote a tutorial about how to train a reinforcement learning agent with Azure Machine learning and its future applications.</span></p>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-2">
                        <div className="flex items-center gap-2 justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">Student Summer Internship <span style={{color: '#7F7F7F'}}>| Intel (Shanghai, China)</span></h3>
                            <p className="font-medium whitespace-nowrap" style={{color: '#000000'}}>Jun 2019 - Aug 2019</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Responsible for AI Ecosystem info collection.</span></p>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Project matchmaking with AI startup companies.</span></p>
                        <p className="mb-1" style={{color: '#7F7F7F'}}><span className="font-light">• Wrote Wechat Official Account articles.</span></p>
                    </div>
                </div>
            </div>

            {/* Publications Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Publications</h2>
                <div className="border-b border-gray-200 mb-6"></div>
                
                <div className="space-y-6">
                    {/* UIST 2025 */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <Link href="/publications/uist2025" className="block group" target="_blank" rel="noopener noreferrer">
                                    <span className="text-yellow-600 font-medium mr-2" style={{color: '#ca8a04'}}>
                                        <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 inline group-hover:text-yellow-600 group-hover:underline" style={{color: '#000000'}}>Do You See What I See? Bring Live Pedestrians into an Outdoor Collaborative Mixed Reality Experience</h3>
                                </Link>
                                <p className="text-sm mb-1" style={{color: '#7F7F7F'}}><span className="font-light italic">38th ACM Symposium on User Interface Software and Technology (UIST 2025)</span></p>
                                <p className="text-base mb-1" style={{color: '#7F7F7F'}}><span className="font-light"><strong>Jingyi Zhang</strong>, Ziwen Lu, Changrui Zhu, Simon Julier, Anthony Steed</span></p>
                            </div>
                            <p className="font-medium whitespace-nowrap flex-shrink-0" style={{color: '#000000'}}>Sep 2025</p>
                        </div>
                    </div>

                    {/* VR 2025 */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <Link href="/publications/vr2025" className="block group" target="_blank" rel="noopener noreferrer">
                                    <span className="text-yellow-600 font-medium mr-2" style={{color: '#ca8a04'}}>
                                        <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 inline group-hover:text-yellow-600 group-hover:underline" style={{color: '#000000'}}>Single Actor Controlling Multiple Avatars for Social Virtual Realities</h3>
                                </Link>
                                <p className="text-sm mb-1" style={{color: '#7F7F7F'}}><span className="font-light italic">2025 IEEE Conference Virtual Reality and 3D User Interfaces (VR 2025)</span></p>
                                <p className="text-base mb-1" style={{color: '#7F7F7F'}}><span className="font-light"><strong>Jingyi Zhang</strong>, Anthony Steed</span></p>
                            </div>
                            <p className="font-medium whitespace-nowrap flex-shrink-0" style={{color: '#000000'}}>Mar 2025</p>
                        </div>
                    </div>

                    {/* ISMAR-Adjunct 2023 */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <Link href="/publications/ismaradj2023" className="block group" target="_blank" rel="noopener noreferrer">
                                    <span className="text-yellow-600 font-medium mr-2" style={{color: '#ca8a04'}}>
                                        <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 inline group-hover:text-yellow-600 group-hover:underline" style={{color: '#000000'}}>Reviving the Euston Arch: A Mixed Reality Approach to Cultural Heritage Tours</h3>
                                </Link>
                                <p className="text-sm mb-1" style={{color: '#7F7F7F'}}><span className="font-light italic">2023 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct 2023)</span></p>
                                <p className="text-base mb-1" style={{color: '#7F7F7F'}}><span className="font-light">Ziwen Lu, <strong>Jingyi Zhang</strong>, Kalila Shapiro, Nels Numan, Simon Julier, Anthony Steed</span></p>
                            </div>
                            <p className="font-medium whitespace-nowrap flex-shrink-0" style={{color: '#000000'}}>Oct 2023</p>
                        </div>
                    </div>

                    {/* ISMAR 2023 */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <Link href="/publications/ismar2023" className="block group" target="_blank" rel="noopener noreferrer">
                                    <span className="text-yellow-600 font-medium mr-2" style={{color: '#ca8a04'}}>
                                        <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 inline group-hover:text-yellow-600 group-hover:underline" style={{color: '#000000'}}>Supporting Co-Presence in Populated Virtual Environments by Actor Takeover of Animated Characters</h3>
                                </Link>
                                <p className="text-sm mb-1" style={{color: '#7F7F7F'}}><span className="font-light italic">2023 IEEE International Symposium on Mixed and Augmented Reality (ISMAR 2023)</span></p>
                                <p className="text-base mb-1" style={{color: '#7F7F7F'}}><span className="font-light"><strong>Jingyi Zhang</strong>, Klara Brandstätter, Anthony Steed</span></p>
                            </div>
                            <p className="font-medium whitespace-nowrap flex-shrink-0" style={{color: '#000000'}}>Oct 2023</p>
                        </div>
                    </div>

                    {/* VRST 2023 */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <Link href="https://dl.acm.org/doi/abs/10.1145/3611659.3615719" className="block group" target="_blank" rel="noopener noreferrer">
                                    <span className="text-yellow-600 font-medium mr-2" style={{color: '#ca8a04'}}>
                                        <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 inline group-hover:text-yellow-600 group-hover:underline" style={{color: '#000000'}}>Comparing Mixed Reality Agent Representations: Studies in the Lab and in the Wild</h3>
                                </Link>
                                <p className="text-sm mb-1" style={{color: '#7F7F7F'}}><span className="font-light italic">29th ACM Symposium on Virtual Reality Software and Technology (VRST 2023)</span></p>
                                <p className="text-base mb-1" style={{color: '#7F7F7F'}}><span className="font-light">Ben J Congdon, Gun Woo Park, <strong>Jingyi Zhang</strong>, Anthony Steed</span></p>
                            </div>
                            <p className="font-medium whitespace-nowrap flex-shrink-0" style={{color: '#000000'}}>Oct 2023</p>
                        </div>
                    </div>

                    {/* Web3D 2023 */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <Link href="https://doi.org/10.1145/3611314.3615903" className="block group" target="_blank" rel="noopener noreferrer">
                                    <span className="text-yellow-600 font-medium mr-2" style={{color: '#ca8a04'}}>
                                        <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 inline group-hover:text-yellow-600 group-hover:underline" style={{color: '#000000'}}>Extending the Open Source Social Virtual Reality Ecosystem to the Browser in Ubiq</h3>
                                </Link>
                                <p className="text-sm mb-1" style={{color: '#7F7F7F'}}><span className="font-light italic">28th International ACM Conference on 3D Web Technology</span></p>
                                <p className="text-base mb-1" style={{color: '#7F7F7F'}}><span className="font-light">Sebastian Friston, Ben Congdon, Nels Numan, Klara Brandstätter, Lisa Izzouzi, Felix Thiel, <strong>Jingyi Zhang</strong>, Daniele Giunchi, David Swapp, Anthony Steed</span></p>
                            </div>
                            <p className="font-medium whitespace-nowrap flex-shrink-0" style={{color: '#000000'}}>Oct 2023</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Awards & Scholarship Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Awards & Scholarship</h2>
                <div className="border-b border-gray-200 mb-6"></div>
                
                <div className="space-y-6">
                    {/* ISMAR 2023 Award */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Honorable Mention for Best Design Award <span style={{color: '#7F7F7F'}}>| ISMAR 2023 Student Competition</span></h3>
                            </div>
                            <p className="font-medium whitespace-nowrap flex-shrink-0" style={{color: '#000000'}}>2023</p>
                        </div>
                    </div>

                    {/* Rabin Ezra Scholarship */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <Link href="https://www.rabinezrascholarship.org.uk/" className="group inline-flex items-baseline" target="_blank" rel="noopener noreferrer">
                                    <svg className="w-4 h-4 mr-1 text-yellow-600" style={{color: '#ca8a04'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 inline group-hover:text-yellow-600 group-hover:underline">Rabin Ezra Scholarship</h3>
                                </Link>
                            </div>
                            <p className="font-medium whitespace-nowrap flex-shrink-0" style={{color: '#000000'}}>2023-2024</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
                <div className="border-b border-gray-200 mb-6"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Programming Languages</h3>
                        <p className="text-sm" style={{color: '#7F7F7F'}}>Python, Java, C, C#, JavaScript, HTML, CSS, R, SQL, Haskell</p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Operating Systems</h3>
                        <p className="text-sm" style={{color: '#7F7F7F'}}>Windows, macOS, Linux, iOS, Android</p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Frameworks & Libraries</h3>
                        <p className="text-sm" style={{color: '#7F7F7F'}}>TensorFlow, PyTorch, scikit-learn, Hugging Face, OpenCV, NumPy, Pandas, Unity XR Interaction Toolkit, Meta SDK, OpenXR</p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">XR / VR Development</h3>
                        <p className="text-sm" style={{color: '#7F7F7F'}}>Unity, Meta Quest SDK, OpenXR Toolkit, Ubiq Networking Framework, Mixed Reality Toolkit (MRTK), Blender (basic)</p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Data & Analysis Environments</h3>
                        <p className="text-sm" style={{color: '#7F7F7F'}}>Jupyter Notebook, Google Colab, SPSS, MATLAB</p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Hardware & Prototyping</h3>
                        <p className="text-sm" style={{color: '#7F7F7F'}}>Arduino, Raspberry Pi, Processing</p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud & DevOps</h3>
                        <p className="text-sm" style={{color: '#7F7F7F'}}>Microsoft Azure, Docker, Git, GitHub</p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Creative Tools</h3>
                        <p className="text-sm" style={{color: '#7F7F7F'}}>Figma, Adobe XD, Adobe Photoshop, Adobe Premiere Pro</p>
                    </div>
                </div>
                
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Other Interests :) (basic level)</h3>
                    <p className="text-sm" style={{color: '#7F7F7F'}}>Piano, Violin, Guzheng, Guqin, Guitar, Harmonica, and Marching Band (snare drum).</p>
                </div>
            </div>
        </div>
    );
};

export default CV;