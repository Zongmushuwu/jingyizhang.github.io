import Image from "next/image";
import Link from "next/link";
import React from "react";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}
const Dedicated = () => {
    return (
        <div className="relative">

            {/* <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" /> */}

            <div className='mx-auto max-w-7xl px-4 my-2 lg:my-40 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-2 lg:my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/profile1.jpg" alt="man-icon" width={400} height={530} className="mx-auto md:mx-0 w-64 h-auto md:w-[400px] md:h-auto" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        {/* <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" /> */}
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Hi!</h2>
                        <p className="font-medium text-lightblack text-xl mt-5 text-left">I am Jingyi Zhang, a second-year PhD student at <a href="https://www.ucl.ac.uk" className="underline">UCL</a>, in the <a href="https://www.ucl.ac.uk/engineering/computer-science/research/research-groups-and-centres/virtual-environments-and-computer-graphics" className="underline">VECG Group</a>, supervised by <a href="https://wp.cs.ucl.ac.uk/anthonysteed/" className="underline">Prof. Anthony Steed</a> and Prof. Ifat Yasin.</p>
                        <p className="font-medium text-lightblack text-xl mt-5 text-left">My research focuses on virtual characters, virtual agents, human–computer interaction, and the application of artificial intelligence in virtual and mixed reality.</p>
                        <p className="font-medium text-lightblack text-xl mt-5 text-left">I am currently seeking internship opportunities! ^_^</p>
                        {/* <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> Cathy Hills, CEO</p> */}
                        <div className="pt-5 flex justify-center lg:justify-start gap-6">
                            <Link href="https://scholar.google.com/citations?user=atM9JlMAAAAJ&hl=enm" className="hover:opacity-70 transition-opacity">
                                <Image src={'/images/google-scholar-square.svg'} alt="scholar" width={32} height={32} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/jingyi-zhang-1045161a9" className="hover:opacity-70 transition-opacity">
                                <Image src={'/images/linkedin.svg'} alt="linkedin" width={32} height={32} />
                            </Link>
                            <Link href="mailto:jy.zhang@ucl.ac.uk" className="hover:opacity-70 transition-opacity">
                                <Image src={'/images/envelope.svg'} alt="email" width={32} height={32} />
                            </Link>
                        </div>
                        
                        
                    </div>

                    {/* COLUMN-1 */}

                    {/* Google Scholar, Github, LinkedIn */}
                    <div>
                        
                    </div>

                    {/* CLOUMN-2/3 */}

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
