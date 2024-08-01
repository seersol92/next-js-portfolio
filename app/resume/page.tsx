import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";
import "./custom.css";

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
      fieldValue: "+92 306 705 1251",
    },
    {
      fieldName: "Experince",
      fieldValue: "8+ Years",
    },
    {
      fieldName: "Eamil",
      fieldValue: "hamad.seersol@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
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

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid at amet laboriosam, eaque repellendus.",
  list: [
    {
      icon: "",
      name: "",
    },
    {
      icon: "",
      name: "",
    },
    {
      icon: "",
      name: "",
    },
    {
      icon: "",
      name: "",
    },
    {
      icon: "",
      name: "",
    },
    {
      icon: "",
      name: "",
    },
    {
      icon: "",
      name: "",
    },
    {
      icon: "",
      name: "",
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
          <TabsList className="flex flex-col gap-6 w-full lg:w-[300px] mx-auth lg:mx-0">
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
          <TabsContent value="skills">My Skills</TabsContent>
          <TabsContent value="about">My About</TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
