"use client";
import { styles } from "@/app/styles";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
	return (
		<section id="hero" className={`${styles.section} w-full flex flex-col items-center justify-center`}>


			<div className="hidden sm:block relative group bg-primary mt-[1rem] w-full">
				<div
					className="hidden sm:absolute top-2 lg:-top-8 left-1/2 transform 
            -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"
				/>
				<Image
					// width={2560}
					// height={2560}
					// className="w-full md:w-[1280px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-primary  border-t-primary/30"
					// className="w-full md:w-[1280px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-primary  border-t-primary/30"
					// rounded-t-[20px] 
					className={`
               w-screen h-[48rem] flex items-center
              justify-center border-0 border-primary/100
            `}
					src={
						"/assets/images/backgrounds/neon-mesh.png"
						// "/hero-image.png"
						// theme === "light"
						//   ? "/hero-image-light.jpeg"
						//   : "/hero-image-dark.jpeg"
					}
					width={1800}
					height={1200}
					alt="dashboard"
				/>
			</div>
			<div
				className="flex justify-center items-center text-center h-full text-2xl p-2 bg-primary/100
                border-primary/100 font-nippo w-full rounded-b-[20px] hover:animate-pulse mx-auto"
			>
				<Link
					href="https://whop.com/dedevs"
					target="_blank"
					className={styles.heroLink}
				>
					{"Join the Club"}
				</Link>
				{/* <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg" /> */}
			</div>
		</section>
	);
};
