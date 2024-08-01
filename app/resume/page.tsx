import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";
import './custom.css';

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
      compnay: "Codeacdemy",
      degree: "Full Stack Developer Bootcamp",
      duration: "2020",
    },

    {
      compnay: "Tech Institute",
      position: "Web Development Certification",
      duration: "2016 - 2017",
    },
    {
      compnay: "University Of Sargodha",
      position: "Bachelor in Computer Science (BCS)",
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
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col gap-6 w-full xl:w-[300px] mx-auth xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="w-full">
            <TabsContent value="experience">My Experience</TabsContent>
            <TabsContent value="education">My Education</TabsContent>
            <TabsContent value="skills">My Skills</TabsContent>
            <TabsContent value="about">My About</TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
