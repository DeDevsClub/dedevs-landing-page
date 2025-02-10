"use client";
import { styles } from "@/app/styles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
	const { theme } = useTheme();
	return (
		<section id="hero" className={`${styles.section} w-full flex flex-col items-center justify-center`}>
			<div className="place-items-center gap-2 w-full flex flex-col items-center justify-center h-[18vh]">
				<div className="text-center space-y-0 w-full">
          {/* Announcement Badge */}
					{/* <Badge variant="outline" className="font-bespokeStencilMedium py-2 mb-4">
						<span className="mr-4 text-primary">
							<Badge
								variant="default"
								className="text-md md:text-xl py-2 px-4 bg-primary/90 text-black"
							>
								Roadmap
							</Badge>
						</span>
						<span className="text-md md:text-xl mr-4 text-primary">
							on 02/14
						</span>
					</Badge> */}

					<div
						className="max-w-screen-4xl mx-auto text-center border-8 h-full bg-white/10
          rounded-t-[20px] justify-center items-center 
          border-primary/30 text-3xl md:text-6xl"
					>
						<span className="text-primary text-white font-bespokeStencilBold">
							Welcome DeDevs!
						</span>
						{/* <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"> */}
					</div>
					{/* <div
						className="max-w-screen-3xl justify-center items-center text-center bg-primary text-md sm:text-2xl lg:text-2xl xl:text-3xl 
            flex flex-col items-center justify-center bg-white/10 w-screen-3xl h-full
            text-white text-primary font-bespokeStencil"
					>
						{
              'We value collaboration and innovation in AI and Decentralized Web. Access resources, tutorials, and support.'
            }
					</div> */}
				</div>
      </div>

			<div className="relative group bg-primary -mt-[128px] w-full">
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
