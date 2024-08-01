import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";

const serviceList = [
  {
    id: "01",
    title: "Frontend Development",
    description:
      "Expert in building responsive and interactive user interfaces with modern frameworks and libraries like React.js, Next.js, and Tailwind CSS. Ensuring a seamless user experience with optimized performance.",
  },
  {
    id: "02",
    title: "Backend Development",
    description:
      "Skilled in creating robust server-side applications and APIs using technologies like Node.js, Express.js, and Laravel. Focused on scalability, security, and efficient data handling.",
  },
  {
    id: "03",
    title: "Database Management",
    description:
      "Proficient in designing and managing databases using MySQL, PostgreSQL, MongoDB, and Firebase. Ensuring data integrity, efficient queries, and scalable database solutions.",
  },
  {
    id: "04",
    title: "DevOps",
    description:
      "Experienced in implementing CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes. Ensuring smooth deployment processes and system reliability.",
  },
  {
    id: "05",
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications with React Native. Leveraging modern mobile development practices to deliver high-performance and user-friendly apps.",
  },
  {
    id: "06",
    title: "API Integration",
    description:
      "Integrating third-party APIs and services into web and mobile applications to extend functionality and enhance user experience. Skilled in handling various API protocols and authentication methods.",
  },
];



export default function page() {
    return (
      <section className="container mx-auto min-h-[90vh] mt-20 flex flex-col justify-center py-12 xl:py-0">
        <div className=" grid grid-cols-2  gap-[60px]">
          {
            serviceList.map((service, index) => {
              return <div className="flex-1 flex flex-col justify-center gap-6 group hover:cursor-pointer" key={index}>
                <div className=" flex justify-between items-center w-full">

                  <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover">
                    {service.id}
                  </div>

                  <Link href={''} className="w-[60px] bg-white h-[60px] rounded-full flex justify-center items-center hover:bg-accent transition-all duration-500
                   hover:-rotate-45 "> 
                    <FiArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>

                <h2 className=" text-[30px] leading-none font-bold group-hover:text-accent transition-all duration-500 ">{service.title}</h2>

                <p className=" text-white/50">{service.description}</p>

                <div className=" block border-b-2 border-white/60 w-full"></div>
              </div>
            } )
          }
        </div>
      </section>
    )
  }
  