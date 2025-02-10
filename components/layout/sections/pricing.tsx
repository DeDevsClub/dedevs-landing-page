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
		title: "Club",
		popular: 0,
		price: 0,
		description: "Blockchain and AI Technology Club",
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
		buttonText: "https://whop.com/dedevs-academy",
		benefitList: [
			"Masterclasses",
			"20+ Dev. Tools",
			"Code Templates 👩🏻‍💻",
			"100+ Resources",
			"+ Club Benefits",
		],
	},
];

export const PricingSection = () => {
	return (
		<section id="pricing" className={styles.section}>
			<h2
				className={`text-primary text-center tracking-wider ${styles.topHeader}`}
			>
				Pricing
			</h2>

			<h2
				className={`text-center font-bold ${styles.bottomHeader}`}
			>
				Gain Access
			</h2>

			{/* <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </h3> */}
			<div className="container -mx-12 sm:mx-12 -space-x-1 sm:space-x-12 grid grid-cols-2 sm:gap-8 lg:gap-4 sm:w-[84vw] max-w-screen-2xl sm:my-12 justify-center">
				{plans.map(
					({ title, popular, price, description, buttonText, benefitList }) => (
						<Card
							key={title}
							className={
								popular === PopularPlan?.YES
                ? "scale-[1.1] lg:scale-[1.1] border-2 border-primary w-full"
                : ""
								// 	? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
								// 	: ""
							}
							style={{
								backgroundColor: "rgba(26, 26, 26, 0.8)",
								backdropFilter: "blur(10px)",
								borderRadius: "12px",
							}}
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

              {/* Benefits Checklist */}
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
										className="w-full rounded-full"
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
