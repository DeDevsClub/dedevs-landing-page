import { styles } from "@/app/styles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ReactIcon } from "@/components/ui/icon";
import { Arrow } from "@radix-ui/react-select";
import type { icons } from "lucide-react";
import Link from "next/link";
import { Star } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Gavel",
    title: "Forum",
    description:
      "Our community forum, which allows our members to communicate in an organized manner.",
  },
  {
    icon: "MessageSquare",
    title: "Chatroom",
    description:
      "Native community chat for our community to collaborate and communicate with one another.",
  },
  {
    icon: "Newspaper",
    title: "Feeds",
    description:
      "View timeline of tweets from DeDevsClub about blockchain and AI development and news.",
  },
  {
    icon: "Users",
    title: "Discord",
    description:
      "Get access to our exclusive Discord server and interact with the rest of the community.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container md:py-18 bg-primary/20 rounded-[20px] p-4">
      <div className="grid lg:grid-cols-1 place-items-center text-center lg:gap-8 bg-black/60 rounded-[20px] p-2">
          {/* // lg:text-lg text-primary mb-2 tracking-wider flex flex-row justify-center items-center */}
          <h2 className={`${styles.topHeader} text-2xl lg:text-4xl font-bespokeStencilBold text-center p-2 w-full`}>Member Benefits</h2>

          {/* // lg:text-3xl md:text-4xl font-bold mb-4 justify-center items-center flex flex-row */}
          <h2 className={`${styles.bottomHeader} text-xl lg:text-3xl font-bespokeStencilBold text-center p-2 w-full`}>
            Our Applications
          </h2>
          {/* <div className="text-sm lg:text-lg text-center text-white mb-8 bg-white/20 font-besdivokeStencil rounded-[20px] p-2">
          {`
          DeDevs Club is a community of developers who learn and grow together.
          We offer a range of benefits to help you succeed. Join DeDevs Club today and start your journey to success.
          `}
          </div> */}
        </div>
          <div>

        <div className="grid lg:grid-cols-2 gap-2 w-full my-2 mx-auto">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="justify-center items-center text-center
              bg-muted/50 bg-black/60 hover:bg-background transition-all border-2 border-white/20
              delay-75 group/number rounded-[20px] p-4 md:p-0"
            >
              {/* #'s */}
              <CardHeader className="hidden md:block">
                <div className="flex justify-between">
                  <ReactIcon
                    name={icon as keyof typeof icons}
                    size={36}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-md sm:text-3xl xl:text-4xl text-muted-foreground/30 font-medium 
                    transition-all delay-75 justify-center items-center flex flex-row group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <CardTitle className="text-2xl md:text-3xl xl:text-4xl text-primary bg-white/20 rounded-[12px] border-2 border-primary/90 px-2 py-1">
                  {title}
                </CardTitle>
              </CardHeader>

              {/* Description */}
              <CardContent className="block text-muted-foreground text-sm sm:text-xl lg:text-2xl">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};