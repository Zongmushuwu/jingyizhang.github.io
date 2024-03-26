import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import autoprefixer from "autoprefixer";


const Dedicated = () => {
    return (
        <div className="mx-auto max-w-7xl pt-5">
            <div className="relative">
            {/* <a href='../../images/JingyiZhang_CV_academic.pdf'> */}
                <Image src='/images/cv.png' alt="cv" width={0} height={0} sizes="50vw"  style={{width:'50%', height:'auto', margin:'auto'}}/>
                    {/* </a> */}
            </div>
        </div>

    )



}

export default Dedicated;