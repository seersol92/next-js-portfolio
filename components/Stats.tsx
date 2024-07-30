"use client";
import CountUp from "react-countup";

const statsList = [
  {
    title: "Years of experince",
    count: 8,
  },
  {
    title: "Projects completed",
    count: 30,
  },
  {
    title: "Tech mastered",
    count: 10,
  },
  {
    title: "Code commits",
    count: 999,
  },
];

export default function Stats() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap mx-auto gap-6">
        {statsList.map((stats, index) => {
          return (
            <div
              className="flex flex-1 gap-5 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                start={0}
                end={stats.count}
                delay={2}
                duration={5}
                className=" text-3xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stats.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/50`}
              >
                {stats.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
