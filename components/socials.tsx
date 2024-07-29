import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa';

const socialLinks = [
    { icon: <FaGithub/>, profileUrl: '' },
    { icon: <FaLinkedin/>, profileUrl: '' },
    { icon: <FaYoutube/>, profileUrl: '' },
];

interface socialProps {
    containerStyles?: string,
    iconStyles?: string
}


const socials: React.FC<socialProps> = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {  socialLinks.map((social, index) => {
            return <Link href={social.profileUrl} key={index} className={iconStyles}> 
                {social.icon}
            </Link>
        } ) }
    </div>
  )
}

export default socials;
