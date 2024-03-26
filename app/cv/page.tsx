import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";


const Dedicated = () => {
    return (
<div className="relative" >
    <Image src='/images/cv.png' alt="cv" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}}/>
        {/* <Link href='JingyiZhang_CV_academic.jpg'></Link> */}
</div>
    )



}

export default Dedicated;