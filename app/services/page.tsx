import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";

const serviceList = [
  {
    "id": "01",
    "title": "Frontend Development",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a exercitationem, excepturi vero eius aut."
  },
  {
    "id": "02",
    "title": "Backend Development",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a exercitationem, excepturi vero eius aut."
  },
  {
    "id": "03",
    "title": "Databases",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a exercitationem, excepturi vero eius aut."
  },
  {
    "id": "04",
    "title": "Devops",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a exercitationem, excepturi vero eius aut."
  },
];


export default function page() {
    return (
      <section className="container mx-auto min-h-[90vh] flex flex-col justify-center py-12 xl:py-0">
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

                <div className="border-b-1 border-white/60 w-full"></div>
              </div>
            } )
          }
        </div>
      </section>
    )
  }
  