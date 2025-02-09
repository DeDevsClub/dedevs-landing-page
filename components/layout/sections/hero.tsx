"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
// import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-md py-2">
            <span className="mr-2 text-primary">
              <Badge variant="outline" className="text-md py-2 bg-primary/20 text-primary font-nippoBold">
                New
              </Badge>
            </span>
            <span> Roadmap Coming Soon... </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Welcome DeDevs <span className="text-primary">👋🏻</span>
              {/* <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"> */}
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`We're a community of passionate
            creators. Get access to exclusive resources, tutorials, and support.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-full rounded-b-full font-nippoBold text-2xl w-full group/arrow opacity-100 text-black hover:opacity-80 border-2 border-white">
                            <Link
                href="https://whop.com/dedevs"
                target="_blank"
              >
                Join the Club
              </Link>
              {/* <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" /> */}
            </Button>

            {/* <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Join the Academy
              </Link>
            </Button> */}
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl" />
          <Image
            width={2400}
            height={2400}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
              "/hero-image.png"
              // theme === "light"
              //   ? "/hero-image-light.jpeg"
              //   : "/hero-image-dark.jpeg"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg" />
        </div>
      </div>
    </section>
  );
};
