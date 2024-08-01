import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { CiMail, CiPhone } from "react-icons/ci";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores explicabo eaque atque quae, repellat mollitia.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hamad Hassan",
    },
    {
      fieldName: "Phone",
      fieldValue: <Link href="tel:+923067051251" className="flex gap-2 justify-center items-center underline text-accent hover:accent-hover">
      <CiPhone/> +92 306 705 1251 
     </Link>,
    },
    {
      fieldName: "Experince",
      fieldValue: "8+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: <Link href="mailto:hamad.seersol@gmail.com" className="flex gap-2 justify-center items-center underline text-accent hover:accent-hover">
         <CiMail/> hamad.seersol@gmail.com 
        </Link>,
    },
    {
      fieldName: "Freelance",
      fieldValue: <div className="flex">
        Available<span className="block w-[6px] h-[6px] rounded-full bg-accent"></span>
      </div>,
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ],
};

const experience = {
  title: "My experince",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque deleniti ipsa, expedita quos molestias.",
  info: [
    {
      compnay: "Seersol Inc.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      compnay: "INF.se",
      position: "Senior Laravel Developer",
      duration: "2020 - 2023",
    },
    {
      compnay: "Pixiders",
      position: "Web Developer",
      duration: "2018 - 2020",
    },
    {
      compnay: "Tech Acdemy",
      position: "Teacing",
      duration: "2016 - 2017",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque deleniti ipsa, expedita quos molestias.",
  info: [
    {
      institute: "Codeacdemy",
      degree: "Full Stack Developer Bootcamp",
      duration: "2020",
    },

    {
      institute: "Tech Institute",
      degree: "Web Development Certification",
      duration: "2016 - 2017",
    },
    {
      institute: "University Of Sargodha",
      degree: "Bachelor in Computer Science (BCS)",
      duration: "2012 - 2016",
    },
  ],
};

const skillsList = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid at amet laboriosam, eaque repellendus.",
  groups: [
    {
      title: "FrontEnd",
      skills: [
        {
          title: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
        },
        {
          title: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
        },
        {
          title: "Tailwind Css",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
        },
        {
          title: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        },
        {
          title: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
      ],
    },
    {
      title: "BackEnd",
      skills: [
        {
          title: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
        {
          title: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
        },
        {
          title: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
        {
          title: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          title: "Mysql",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        },
        {
          title: "PostgreSql",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg",
        },
        {
          title: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
        },
        {
          title: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg",
        },
      ],
    },
    {
      title: "Mobile App Development",
      skills: [
        {
          title: "React Native",
          icon: "https://reactnative.dev/img/header_logo.svg",
        },
      ],
    },

    {
      title: "Tools",
      skills: [
        {
          title: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
        },
        {
          title: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
        },
        {
          title: "k8s",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain-wordmark.svg",
        },
      ],
    },
  ],
};

export default function page() {
  return (
    <section className="min-h-[60vh] py-12 xl:py-0 flex items-center justify-center">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col gap-6 w-full md:w-[300px] mx-auth lg:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center lg:text-start">
              <h2 className="h2 capitalize">{experience.title}</h2>
              <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {experience.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex flex-col justify-center items-center gap-4 px-10 py-6 bg-black/50 rounded-xl lg:items-start hover:cursor-pointer"
                    >
                      <p className="text-accent">{item.duration}</p>
                      <h2>{item.position}</h2>
                      <div className="flex items-center  justify-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/50"> {item.compnay} </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center lg:text-start">
              <h2 className="h2">{education.title}</h2>
              <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {education.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex flex-col justify-center items-center gap-4 px-10 py-6 bg-black/50 rounded-xl lg:items-start hover:cursor-pointer"
                    >
                      <p className="text-accent">{item.duration}</p>
                      <h2>{item.degree}</h2>
                      <div className="flex items-center  justify-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/50"> {item.institute} </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px] text-center lg:text-start">
              <h2 className="h2">{skillsList.title}</h2>
              <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                {skillsList.description}
              </p>
              {skillsList.groups.map((group, index) => {
                return (
                  <div key={index}>
                    <h3 className="h3 capitalize flex justify-start">
                      {group.title}
                    </h3>
                    <span className="block border-b border-white/60 mt-4"></span>
                    <ul
                      key={index}
                      className="grid grid-cols-2 lg:grid-cols-5 gap-4 py-6"
                    >
                      {group.skills.map((skill, index) => {
                        return (
                          <li
                            key={index}
                            className="flex flex-col justify-center items-center gap-4 hover:cursor-pointer"
                          >
                            <Image
                              src={skill.icon}
                              width={90}
                              height={90}
                              alt={skill.title}
                              title={skill.title}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="about" className="w-full">
            <div className="flex flex-col gap-[30px] text-center lg:text-start">
              <h2 className="h2">{about.title}</h2>
              <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {about.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex  justify-center items-center lg:justify-start gap-4 px-10 py-6 bg-black/50 rounded-xl lg:items-start hover:cursor-pointer"
                    >
                      <span className="font-bold">{item.fieldName}: </span>
                      <span>{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
