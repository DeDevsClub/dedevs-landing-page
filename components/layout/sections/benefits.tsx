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
    icon: "Blocks",
    title: "Community Forum",
    description:
      "Our community forum, which allows our members to communicate in an organized manner.",
  },
  {
    icon: "LineChart",
    title: "Community Chat",
    description:
      "Native community chat for our community to collaborate and communicate with one another.",
  },
  {
    icon: "Wallet",
    title: "News Feed",
    description:
      "View timeline of tweets from DeDevsClub about blockchain and AI development and news.",
  },
  {
    icon: "Wallet",
    title: "Discord Server",
    description:
      "Get access to our exclusive Discord server and interact with the rest of the community.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container sm:py-18 bg-primary/20 rounded-[20px] p-4">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 bg-black/60 rounded-[20px] p-4">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Member Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Applications
          </h2>
          <p className="text-xl text-white mb-8 bg-primary/20 font-bespokeStencil rounded-[20px] p-4">
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
              <CardHeader>
                <div className="flex justify-between">
                  <ReactIcon
                    name={icon as keyof typeof icons}
                    size={36}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

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
