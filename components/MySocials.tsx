import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, profileUrl: "https://github.com/seersol92" },
  {
    icon: <FaLinkedin />,
    profileUrl: "https://pk.linkedin.com/in/hamad-hassan-907b49137",
  },
  { icon: <FaYoutube />, profileUrl: "" },
];

interface socialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const MySocials: React.FC<socialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((social, index) => {
        return (
          <Link
            href={social.profileUrl}
            key={index}
            className={iconStyles}
            target={"_blank"}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default MySocials;
