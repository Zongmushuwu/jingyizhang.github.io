import Image from "next/image";
import Link from "next/link";

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

            <div className='mx-auto max-w-7xl px-4 my-40  lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/profile1.jpg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        {/* <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" /> */}
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Hi!</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">I am Jingyi Zhang, a second year PhD student at University College London under the supervision of Prof. Anthony Steed and Prof. Ifat Yasin. My current interests are virtual characters, virtual agents, human-computer interaction, and virtual and mixed reality.</p>
                        {/* <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> Cathy Hills, CEO</p> */}
                    </div>

                    {/* COLUMN-1 */}

                    {/* Google Scholar, Github, LinkedIn */}
                    {/* <div className='flex gap-4'>
                        <div className='footer-icons'>
                            <Link href="https://facebook.com"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
                        </div>
                        <div className='footer-icons'>
                            <Link href="https://twitter.com"><Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} /></Link>
                        </div>
                        <div className='footer-icons'>
                            <Link href="https://instagram.com"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                        </div>
                    </div> */}

                    {/* CLOUMN-2/3 */}

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
