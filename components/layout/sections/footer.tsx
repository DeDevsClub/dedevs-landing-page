import { Separator } from "@/components/ui/separator";
// import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { styles } from "@/app/styles";
import DiscordIcon from "@/components/icons/discord-icon";
import XIcon from "@/components/icons/x-icon";

export const FooterSection = () => {
	return (
		<footer id="footer" className={`${styles.section} w-full`}>
			<div className="p-10 bg-card border border-secondary rounded-2xl">
				<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-12 gap-y-8">
					<div className="col-span-full xl:col-span-2">
						<Link href="#" className="flex font-bold items-center">
							{/* <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" /> */}
							<Image
								src="/logo.png"
								alt="DeDevs"
								width={36}
								height={36}
								className="mr-2"
							/>
							<h3 className="text-2xl">DeDevs</h3>
						</Link>
					</div>

					<div className="flex flex-col gap-2">
						<h3 className="font-bold text-lg">Contact</h3>
						<div>
							<Link
								href="mailto:admin@dedevs.club"
								className="opacity-60 hover:opacity-100"
							>
								admin@dedevs.club
							</Link>
						</div>

						<div>
							<Link
								href="https://x.com/DeDevsClub"
								className="opacity-60 hover:opacity-100"
							>
								@DeDevsClub
							</Link>
						</div>

						{/* <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div> */}
					</div>

					{/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                iOS
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div> */}

					{/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>
*/}

					<div className="flex flex-col gap-2">
						<h3 className="font-bold text-lg">Socials</h3>
						<div>
							<Link
								href="https://x.com/DeDevsClub"
								className="opacity-60 hover:opacity-100"
								target="_blank"
							>
								Twitter
							</Link>
						</div>

						<div>
							<Link
								href="https://discord.gg/Pt7rpqbr98"
								className="opacity-60 hover:opacity-100"
								target="_blank"
							>
								Discord
							</Link>
						</div>
					</div>
				</div>

				{/* <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Enchanted by
            <Link
              target="_blank"
              href="https://github.com/BunsDev"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Buns
            </Link>
          </h3>
        </section> */}
			</div>
		</footer>
	);
};
