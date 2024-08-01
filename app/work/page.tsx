"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import Image from "next/image";
import { Swiper as SwiperCore } from 'swiper';

// Project data
const projects = [
  {
    id: "01",
    title: "Chat Bot APP",
    category: "Full stack",
    description:
      "A chatbot application built with modern web technologies to assist with various tasks.",
    stack: ["Html5", "Css3", "Tailwind", "Next.js"],
    image: "https://via.placeholder.com/600x400?text=Chat+Bot+APP",
    live: "https://example.com/chat-bot-app",
    github: "https://github.com/example/chat-bot-app",
  },
  {
    id: "02",
    title: "Next.js APP",
    category: "Full stack",
    description:
      "A web application using Next.js to build a performant and scalable user interface.",
    stack: ["Html5", "Css3", "Tailwind", "Next.js"],
    image: "https://via.placeholder.com/600x400?text=Next.js+APP",
    live: "https://example.com/nextjs-app",
    github: "https://github.com/example/nextjs-app",
  },
  {
    id: "03",
    title: "ReactNative APP",
    category: "Mobile",
    description:
      "A mobile application built with React Native for cross-platform compatibility.",
    stack: ["React Native", "JavaScript", "Expo"],
    image: "https://via.placeholder.com/600x400?text=ReactNative+APP",
    live: "https://example.com/react-native-app",
    github: "https://github.com/example/react-native-app",
  },
  {
    id: "04",
    title: "E-commerce Platform",
    category: "Full stack",
    description:
      "An e-commerce platform with features such as product listings, shopping cart, and checkout.",
    stack: ["Node.js", "Express", "MongoDB", "React"],
    image: "https://via.placeholder.com/600x400?text=E-commerce+Platform",
    live: "https://example.com/e-commerce-platform",
    github: "https://github.com/example/e-commerce-platform",
  },
  {
    id: "05",
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "A personal portfolio website to showcase projects, skills, and contact information.",
    stack: ["Html5", "Css3", "JavaScript", "React"],
    image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    live: "https://example.com/portfolio-website",
    github: "https://github.com/example/portfolio-website",
  },
  {
    id: "06",
    title: "Blog Platform",
    category: "Full stack",
    description:
      "A blog platform that supports multiple users and allows for posting and commenting.",
    stack: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    image: "https://via.placeholder.com/600x400?text=Blog+Platform",
    live: "https://example.com/blog-platform",
    github: "https://github.com/example/blog-platform",
  },
  {
    id: "07",
    title: "Social Media App",
    category: "Mobile",
    description:
      "A mobile app for social media interactions including posts, likes, and messaging.",
    stack: ["React Native", "Firebase"],
    image: "https://via.placeholder.com/600x400?text=Social+Media+App",
    live: "https://example.com/social-media-app",
    github: "https://github.com/example/social-media-app",
  },
  {
    id: "08",
    title: "Chat Application",
    category: "Real-time",
    description:
      "A real-time chat application using WebSockets for live communication.",
    stack: ["Socket.io", "Node.js", "Express", "React"],
    image: "https://via.placeholder.com/600x400?text=Chat+Application",
    live: "https://example.com/chat-application",
    github: "https://github.com/example/chat-application",
  },
  {
    id: "09",
    title: "Task Manager",
    category: "Productivity",
    description:
      "A task management application to keep track of tasks, deadlines, and priorities.",
    stack: ["Angular", "TypeScript", "Firebase"],
    image: "https://via.placeholder.com/600x400?text=Task+Manager",
    live: "https://example.com/task-manager",
    github: "https://github.com/example/task-manager",
  },
  {
    id: "10",
    title: "Recipe Finder",
    category: "Food",
    description:
      "A web application that allows users to search for recipes and save their favorites.",
    stack: ["Vue.js", "Vuex", "Axios"],
    image: "https://via.placeholder.com/600x400?text=Recipe+Finder",
    live: "https://example.com/recipe-finder",
    github: "https://github.com/example/recipe-finder",
  },
];

export default function Page() {
  const [project, setProject] = useState(projects[0]);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const handleChangeSlide = (swiperInstance: SwiperCore) => {
    setProject(projects[swiperInstance.activeIndex]);
    if (swiperInstance) {
      const isBeginning = swiperInstance.isBeginning;
      const isEnd = swiperInstance.isEnd;
      setDisableButtons({
        prev: isBeginning,
        next: isEnd,
      });
    }
  };

  const [disableButtons, setDisableButtons] = useState({
    prev: true,
    next: false,
  });

  useEffect(() => {
    if (swiper) {
      const isBeginning = swiper.isBeginning;
      const isEnd = swiper.isEnd;
      setDisableButtons({
        prev: isBeginning,
        next: isEnd,
      });
    }
  }, [swiper]);

  return (
    <section className="container mx-auto min-h-[90vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="flex flex-col lg:flex-row lg:gap-[25px]">
        <div className="w-full lg:w-[50%] group order-2 lg:order-none lg:h-[460px] flex flex-col gap-5 lg:justify-between">
          <h1 className="h1 text-transparent text-outline group-hover:text-outline-hover">
            {project.id}
          </h1>
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <p className="text-white/30">{project.description}</p>
          <ul className="flex gap-4">
            {project.stack.map((val, index) => (
              <li
                key={index}
                className="bg-accent px-6 rounded-full text-white"
              >
                {val}
              </li>
            ))}
          </ul>

          <div className="border border-white/20"></div>

          <div className="flex gap-5">
            <Link
              href={project.live}
              title="Live Project"
              className="flex justify-center items-center bg-white/5 rounded-full w-[68px] h-[68px]"
            >
              <FiArrowUpRight className="text-white text-3xl hover:text-accent" />
            </Link>

            <Link
              href={project.github}
              title="Github repository"
              className="flex justify-center items-center bg-white/5 rounded-full w-[68px] h-[68px]"
            >
              <FiGithub className="text-white text-3xl hover:text-accent" />
            </Link>
          </div>
        </div>

        <div className="w-full relative lg:w-[50%] order-1 lg:order-none">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            modules={[Navigation]}
            onSlideChange={({swiper}) => handleChangeSlide(swiper)}
            className="h-[520px] mb-12"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            onSwiper={setSwiper}
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="h-[460px] flex justify-center items-center "
              >
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className=" object-cover"
                />{" "}
                {/* Replace with actual image or content */}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 z-10">
            <button
              className={`flex justify-center items-center text-3xl bg-primary text-accent h-[50px] w-[50px] rounded-full ${
                disableButtons.prev ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={disableButtons.prev}
              onClick={() => swiper?.slidePrev()}
            >
              <FiArrowLeft />
            </button>
            <button
              className={`flex justify-center items-center text-3xl bg-primary text-accent h-[50px] w-[50px] rounded-full ${
                disableButtons.next ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={disableButtons.next}
              onClick={() => swiper?.slideNext()}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
