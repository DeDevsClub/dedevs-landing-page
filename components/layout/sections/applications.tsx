import { styles } from "@/app/styles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ReactIcon } from "@/components/ui/icon";
import { Arrow } from "@radix-ui/react-select";
import type { icons } from "lucide-react";
import Link from "next/link";
// import { Star } from "lucide-react";
import appsList from "@/lib/data/apps";
import type { ApplicationsProps } from "@/lib/types";
import Image from "next/image";

export const ApplicationsSection = () => {
	return (
		<section
			id="applications"
			className="container md:py-18 bg-primary/20 rounded-[20px] p-4"
		>
			<div className="text-center mb-8">
				<h2
					className={`text-lg text-primary text-center mb-2 tracking-wider ${styles.topHeader}`}
				>
					{'Enjoyed by Builders, Researchers, Creators, and Enthusiasts'}
				</h2>

				<h2
					className={`text-3xl md:text-4xl text-center font-bold mb-4 ${styles.bottomHeader}`}
				>
					Our Ecosystem
				</h2>
			</div>
			<ApplicationsCarousel />
		</section>
	);
};

const ApplicationsCarousel = () => {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
		>
			<CarouselContent>
				{appsList.map((app: ApplicationsProps) => (
					<CarouselItem
						key={app.name}
						// className="text-lg font-bespokeStencil"
						className="md:basis-1/2 lg:basis-1/3"
					>
						<Card className="bg-muted/50 dark:bg-card">
							<CardContent className="pt-6 pb-0">
								{/* <div className="flex gap-1 pb-6">
									<Star className="size-4 fill-primary text-primary" />
								</div> */}
								{`${app.description}`}
							</CardContent>

							<CardHeader>
								<div className="flex flex-row items-center gap-4">
									<Image
										src={app.image}
										alt={app.name}
										width={32}
										height={32}
										className="w-10 h-10"
									/>
									<div className="flex flex-col">
										<CardTitle className="text-lg">{app.name}</CardTitle>
										<CardDescription>{app.description}</CardDescription>
									</div>
								</div>
							</CardHeader>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};
