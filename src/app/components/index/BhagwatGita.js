"use client"
import Image from 'next/image';
import Wrapper from '../Wrapper';
import { EditAttributes, FacebookOutlined, FacebookSharp, FacebookTwoTone, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import { LiaEditSolid } from "react-icons/lia";
import { BsEye, BsEyeSlash } from "react-icons/bs";




import Link from 'next/link';
import { useState } from 'react';

function Card({ file = "/assets/images/bhagwat_gita/krishna_ji_1.jpg" }) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="w-full h-[350px] sm:max-h-[350px] bhagwatGita relative group/socialIcons shadow-shadowDown overflow-y-auto p-4" style={{ "--file": `url(${file})` }}>

            {
                !isVisible &&
                <>
                    <div className='content vs'>

                        <p className='text-2xl font-semibold'>
                            प्रथम अध्याय: श्लोक 1
                        </p>
                        <p className='my-1 font-semibold'>
                            श्री कृष्ण उवाच
                        </p>
                        <p className='text-xl flex flex-col font-semibold text-shadow py-2'>
                            <span>
                                यो न हृष्यति न द्वेष्टि न शोचति न काङ्‍क्षति।
                            </span>
                            <span>
                                शुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः॥
                            </span>
                        </p>
                        <p className="mt-2 py-2 font-semibold">
                            भगवान श्री कृष्ण के अनुसार, वह व्यक्ति जो कभी भी ज्यादा हर्षित होता है, न किसी से द्वेष करता है, न शोक करता है, न कामना करता है। जो शुभ और अशुभ कर्मों से ऊपर उठ चुका है, ऐसा भक्त श्री कृष्ण को प्रिय होता है।
                        </p>
                    </div>
                    <div className='absolute left-0 bottom-0 opacity-0 pointer-event-none flex justify-between items-center h-[60px] w-full px-8 bg-bgMaroonL duration-300 group-hover/socialIcons:opacity-[1] group-hover/socialIcons:backdrop-blur-lg text-white'>
                        <Link href="#"> <FacebookTwoTone /> </Link>
                        <Link href="#"> <WhatsApp /> </Link>
                        <Link href="#"> <LinkedIn /> </Link>
                        <Link href="#"> <Instagram /> </Link>
                        <Link href="#"> <LiaEditSolid size={30} /> </Link>
                    </div>
                </>
            }

            <div className='absolute right-1 top-1 opacity-0 w-[35px] h-[35px] bg-bgSafron rounded-full flex justify-center items-center shadow-lg text-white cursor-pointer group-hover/socialIcons:opacity-[1] group-hover/socialIcons:backdrop-blur-lg' onClick={() => setIsVisible(isVisible ? false : true)}>
                {
                    !isVisible ? <BsEye size={20} /> :<BsEyeSlash size={20} />
                }
            </div>
        </div>
    )
}


function BhagwatGita() {
    return (
        <>
            <Wrapper className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Card file="/assets/images/bhagwat_gita/krishna_ji_addressing_arjun1.png"/>
                <Card file="/assets/images/bhagwat_gita/krishna_ji_addressing_arjun2.png" />
                <Card file="/assets/images/bhagwat_gita/krishna_ji_addressing_arjun3.png" />
                <Card file="/assets/images/bhagwat_gita/krishna_ji_addressing_arjun4.png" />
            </Wrapper>
            <Link href="#" className="flex justify-end items-center pr-11 mt-5 font-semibold">
                View All
            </Link>
        </>
    )
}

export default BhagwatGita