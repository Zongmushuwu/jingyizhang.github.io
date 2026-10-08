import Image from "next/image";
import Link from "next/link";
import React from "react";
import News from "../News";
import { researchInterests } from "../../data/profile";

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

            <div className='mx-auto max-w-7xl px-4 mt-8 mb-12 lg:mt-20 lg:mb-12 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center my-2 lg:my-0'>

                    {/* COLUMN-1 */}
                    <div className="flex flex-col items-center">
                        <Image src="/images/dedicated/profile1.jpg" alt="Jingyi Zhang" width={400} height={530} className="w-64 h-auto md:w-[400px] md:max-w-full" />
                        <nav aria-label="Contact and profiles" className="mt-6 flex items-center justify-center gap-6">
                            <Link href="https://scholar.google.com/citations?user=atM9JlMAAAAJ&hl=enm" aria-label="Google Scholar" className="opacity-60 hover:opacity-100 transition-opacity">
                                <Image src="/images/google-scholar-square.svg" alt="" width={26} height={26} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/jingyi-zhang-1045161a9" aria-label="LinkedIn" className="opacity-60 hover:opacity-100 transition-opacity">
                                <Image src="/images/linkedin.svg" alt="" width={26} height={26} />
                            </Link>
                            <Link href="mailto:jy.zhang@ucl.ac.uk" aria-label="Email" className="opacity-60 hover:opacity-100 transition-opacity">
                                <Image src="/images/envelope.svg" alt="" width={26} height={26} />
                            </Link>
                        </nav>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        {/* <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" /> */}
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Hi!</h2>
                        <p className="font-medium text-lightblack text-xl mt-5 text-left">I am Jingyi Zhang, a fourth-year PhD student at <a href="https://www.ucl.ac.uk" className="underline">UCL</a>, in the <a href="https://www.ucl.ac.uk/engineering/computer-science/research/research-groups-and-centres/virtual-environments-and-computer-graphics" className="underline">VECG Group</a>, supervised by <a href="https://wp.cs.ucl.ac.uk/anthonysteed/" className="underline">Prof. Anthony Steed</a> (Deputy Head, Department of Computer Science) and Prof. Ifat Yasin (Vice-Dean – Equality, Diversity and Inclusion, Faculty of Engineering).</p>
                        <p className="font-medium text-lightblack text-xl mt-5 text-left">{researchInterests}</p>
                        {/* <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> Cathy Hills, CEO</p> */}
                        <News />
                        
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Dedicated;
