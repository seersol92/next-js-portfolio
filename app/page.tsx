import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="container h-full mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center md:pt-12 pt-2">
        {/*Intro text*/}
        <div className=" order-2 md:order-none text-center md:text-left">
          <span className="text-xl">🚀 Software Developer 🚀</span>
          <h1 className="h1 mb-5">
            Hello i'm <br />
            <span className=" text-accent">Hamad Hassan</span>
          </h1>
          <p className=" max-w-[500px] mb-6 text-white/70">
            Passionate about crafting seamless digital experiences from
            front-end elegance to back-end robustness. I bring a blend of
            creativity and technical expertise to build, scale, and optimize
            applications that not only meet but exceed user expectations.
            <br />
            Let’s transform your ideas into reality with cutting-edge solutions!
          </p>

          {/* Download Cv and social links */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
              <Button
                variant="outline"
                size="lg"
                className="flex uppercase justify-center   items-center gap-3"
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>

            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles="flex gap-6 items-center"
                iconStyles="w-9 h-9 border border-accent hover:transition-all duration-1000 fu rounded-full flex justify-center items-center text-base text-accent hover:text-primary hover:bg-accent"
              />
            </div>
          </div>
        </div>

        {/*Picture*/}
        <div className="order-1 md:order-none mb-8 md:mb-0">
          <Photo />
        </div>
      </div>
    </section>
  );
}
