
"use client";

import Button from '../Button';
import IconLink from '../IconLink';
import { CiMail, CiMobile3 } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";

import LabeInput from './../form/LabeInput';
import { H1, H3 } from '../Headings';
import { BiMapPin } from 'react-icons/bi';
import SocialIcons from '../SocialIcons';
function ContactUs() {
    return (

        <div className='flex flex-col max-w-[750px] gap-2 bg-[rgba(200,200,200,.2)] backdrop-blur-lg p-5 rounded-md shadow-xl mx-auto text-textWhite '>
            
            <H3> For Quetion & Queries! </H3>

        <div className='grid grid-cols-1 md:grid-cols-2 w-full text-textWhite'>
            <div>
                <form className='flex flex-col text-start gap-7 w-full text-white'>
                    <LabeInput
                        type="text"
                        label='Username'
                        placeholder='Your full name'
                    />

                    <LabeInput
                        type="email"
                        label='Email'
                        placeholder='your valid email id'
                    />
                    <LabeInput
                        type="number"
                        label='Mobile'
                        placeholder='your contact number'
                    />
                    <label className="flex flex-col gap-1">
                        <span> Message </span>
                        <textarea className="w-full rounded focus:outline-none p-2" rows="5" onChange={(e)=> console.log(e.target.value)}></textarea>
                    </label>

                    <Button type="submit"> Submit </Button>
                </form>
            </div>
            <div className='flex flex-col gap-4 p-4 relative'>

                <H3 className="flex items-center gap-1 underline underline-offset-4">
                    Contact Us
                    <span> <BiMapPin /> </span>
                </H3>

                <div className="text-start">
                    <H3 className="text-xl"> 
                        146, Subhash Nagar Bankhandi Rishikesh  
                    </H3>
                    <H3 className="text-xl">
                        Dehradun, Uttarakhand 249201
                    </H3>
                </div>

                <div className='flex flex-col gap-2 text-xl'>
                    <IconLink
                        icon={<CiMobile3 />}
                        href="tel:+919997077644"
                        number="9997077644"
                        className="text-start text-xl"
                    />
                    <IconLink
                        icon={<CiMail />}
                        href="mailto:twinkle9997@gmail.com"
                        number="twinkle9997@gmail.com"
                        className="text-start text-xl"
                    />
                    <IconLink
                        icon={<PiWhatsappLogoThin />}
                        href="9997077644"
                        number="9997077644"
                        className="text-start text-xl"
                    />
                </div>


                <SocialIcons className="absolute gap-4 text-3xl bottom-1 right-1"/>
            </div>
        </div>
        </div>


    )
}

export default ContactUs