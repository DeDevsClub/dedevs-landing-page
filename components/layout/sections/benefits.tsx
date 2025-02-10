import { styles } from "@/app/styles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactIcon } from "@/components/ui/icon";
import type { icons } from "lucide-react";
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
    <section id="benefits" className="container sm:py-18 bg-primary/20 rounded-[20px] p-4">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-8 bg-black/60 rounded-[20px] p-4">
        <div>
          <h2 className={`${styles.topHeader} lg:text-lg text-primary mb-2 tracking-wider flex flex-row justify-center items-center`}>Member Benefits</h2>

          <h2 className={`${styles.bottomHeader} lg:text-3xl md:text-4xl font-bold mb-4 justify-center items-center flex flex-row`}>
            Our Applications
          </h2>
          <p className="text-sm lg:text-lg text-center text-white mb-8 bg-white/20 font-bespokeStencil rounded-[20px] p-2">
            DeDevs Club is a community of developers who learn and grow together.
            We offer a range of benefits to help you succeed. Join DeDevs Club today and start your journey to success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-2 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number rounded-[20px]"
            >
              {/* #'s */}
              <CardHeader>
                <div className="flex justify-between">
                  <ReactIcon
                    name={icon as keyof typeof icons}
                    size={36}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-2xl sm:text-3xl xl:text-4xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <CardTitle className="text-xl sm:text-2xl xl:text-3xl text-white">
                  {title}
                </CardTitle>
              </CardHeader>

              {/* Description */}
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
