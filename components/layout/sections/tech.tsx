"use client";

import { styles } from "@/app/styles";
import { LucideIcon, ReactIcon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import type { icons } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiDrizzle,
  SiSupabase,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiReact,
} from "react-icons/si";
interface techProps {
  icon: React.ReactNode;
  name: string;
}

const technologies: techProps[] = [
  {
    icon: <SiVercel />,
    name: "Vercel",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiTypescript />,
    name: "Typescript",
  },
  {
    icon: <SiReact />,
    name: "React",
  },
  {
    icon: <SiPostgresql />,
    name: "PostgreSQL",
  },
  {
    icon: <SiDrizzle />,
    name: "Drizzle",
  },
];

export const TechSection = () => {
  return (
    // <section id="sponsors" className="max-w-[98%] mx-auto p-2 bg-black rounded-[20px] border-2 border-primary">
		<section id="tech" className={`${styles.section} bg-black/60 rounded-[20px] mx-auto`}>

    {/* <h2 className="text-lg font-bespokeStencil md:text-xl text-center mb-6">
        Made Possible By
      </h2> */}

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {technologies.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium gap-2"
            >
              {icon}
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
