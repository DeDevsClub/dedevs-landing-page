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
import { styles } from "@/app/styles";
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
		title: "DeDevs Club",
		popular: 0,
		price: 0,
		description: "Blockchain + AI Technology",
		buttonText: "https://whop.com/dedevs",
		benefitList: ["Discord", "Chat", "Feeds", "Raffles"],
	},
	/* Join to access courses that provide practical applications for building decentralized agents, LLMs, AI bots, websites, and more. Our courses are designed to grow your portfolio. */
	{
		title: "DeDevs Academy",
		popular: 1,
		price: 50,
		description: "Build Your Portfolio",
		buttonText: "https://whop.com/dedevs-academy",
		benefitList: [
			"Courses",
			"20+ Tools",
			"Code Templates",
			// "100+ Resources",
			"Club Access",
		],
	},
];

export const PricingSection = () => {
	return (
		<section id="pricing" className={`${styles.section} w-full`}>
			<h2
				className={`text-primary text-center tracking-wider ${styles.topHeader}`}
			>
				Pricing
			</h2>

			<h2 className={`text-center font-bold ${styles.bottomHeader}`}>
				Gain Access
			</h2>

			{/* <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </h3> */}
			<div className="sm:container rounded-[12px] p-6 grid grid-cols-1 sm:grid-cols-2 lg:gap-4 sm:my-8 justify-center">
				{/* <div className="mt-2 sm:container sm:mx-12 sm:space-x-12 flex flex-col sm:grid sm:grid-cols-2  
        gap-8 sm:grid-cols-2 sm:gap-8 lg:gap-4 w-full sm:w-[84vw] max-w-screen-2xl sm:my-12 justify-center"> */}
				{plans.map(
					({ title, popular, price, description, buttonText, benefitList }) => (
						<Card
							key={title}
							className={`justify-center items-center flex flex-col
								${
									popular === PopularPlan?.YES &&
									"lg:scale-[1] border-gradient-to-r from-primary via-primary/70 to-primary animate-pulse border-primary border-2 w-full"
								}
              `}
							style={{
								backgroundColor: "rgba(26, 26, 26, 0.8)",
								backdropFilter: "blur(10px)",
								borderRadius: "12px",
							}}
						>
							<CardHeader
								className="w-full h-full
                 bg-primary/10 h-[4vh] border-b-4 text-md border-b-primary rounded-[8px] -space-y-4 items-center justify-center gap-2 -pb-4"
							>
								<CardTitle className="p-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bespokeStencilBold text-primary">
									{title}
								</CardTitle>

								{/* <CardDescription className="hidden md:block pb-4 text-sm md:text-lg lg:text-2xl">
									{description}
								</CardDescription> */}

								<div
								// className="flex flex-row items-center justify-center text-secondary pb-2"
								>
									<span className="font-nippo">${price}</span>
									<span className="font-nippo"> /month</span>
								</div>
							</CardHeader>

							{/* Benefits Checklist */}
							<CardContent className="flex justify-center text-sm md:text-lg lg:text-2xl mt-4 font-nippo">
								<div className="space-y-4">
									{benefitList.map((benefit) => (
										<span key={benefit} className="flex">
											<Check className="text-primary mr-2" />
											<h3>{benefit}</h3>
										</span>
									))}
								</div>
							</CardContent>

							<CardFooter className="">
								<Link href={buttonText} target="_blank">
									<Button
										variant={
											popular === PopularPlan?.YES ? "default" : "secondary"
										}
										className="flex w-[12vw] w-[32vw] sm:max-w-[24vw] lg:max-w-[18vw] xl:max-w-[12vw] text-md sm:text-lg lg:text-xl 
                      rounded-[8px] font-nippoBold overflow-hidden
                      "
									>
										{"Join Today"}
									</Button>
								</Link>
							</CardFooter>
						</Card>
					),
				)}
			</div>
		</section>
	);
};
