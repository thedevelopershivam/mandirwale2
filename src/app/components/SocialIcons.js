import { Facebook, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import  Link  from 'next/link';
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

function SocialIcons({ className }) {
    return (<div className={`flex items-center  gap-4 ${className}`}>
        <Link href="#">
            <FaFacebook className='duration-300 hover:scale-[1.1] hover:text-blue-400' />
        </Link>
        <Link href="#">
            <BsInstagram className='duration-300 hover:scale-[1.1] hover:text-pink-400' />
        </Link>
        <Link href="#">
            <BsWhatsapp className='duration-300 hover:scale-[1.1] hover:text-green-400' />
        </Link>
        <Link href="#">
            <BsLinkedin className='duration-300 hover:scale-[1.1] hover:text-blue-400' />
        </Link>
    </div>
    )
}

export default SocialIcons