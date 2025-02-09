import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}
/* Members enhance career prospects through industry insights, technical skill development, and community support in blockchain and AI engineering */

const plans: PlanProps[] = [
  {
    title: "Club",
    popular: 0,
    price: 0,
    description:
      "Blockchain and AI Technology Club",
    buttonText: "https://whop.com/dedevs",
    benefitList: [
      "Gated Discord",
      "Community Chat",
      "Tailored News Feed", 
      "Daily Reward Wheel",
    ],
  },
  /* Join to access courses that provide practical applications for building decentralized agents, LLMs, AI bots, websites, and more. Our courses are designed to grow your portfolio. */
  {
    title: "Academy",
    popular: 1,
    price: 50,
    description: "Courses to Build Your Portfolio",
    buttonText: "Get starterd",
    benefitList: [
      "Masterclasses",
      "Office Hours",
      "20+ Dev. Tools",
      "Code Templates",
      "100+ Resources",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Gain Access
      </h2>

      {/* <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </h3> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
<Link href={buttonText} target="_blank">
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >

                  {"Join Today"}
                </Button>
</Link>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
