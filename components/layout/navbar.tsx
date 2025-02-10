"use client";
import { ChevronsDown, Menu } from "lucide-react";
import React, { useEffect } from "react";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import XIcon from "../icons/x-icon";
import GithubIcon from "../icons/github-icon";

interface RouteProps {
	href: string;
	label: string;
}

interface FeatureProps {
	title: string;
	description: string;
}

const routeList: RouteProps[] = [
	{
		href: "#testimonials",
		label: "Testimonials",
	},
	{
		href: "#team",
		label: "Team",
	},
	{
		href: "#contact",
		label: "Contact",
	},
	{
		href: "#faq",
		label: "FAQ",
	},
];

const featureList: FeatureProps[] = [
	{
		title: "Showcase Your Value ",
		description: "Highlight how your product solves user problems.",
	},
	{
		title: "Build Trust",
		description:
			"Leverages social proof elements to establish trust and credibility.",
	},
	{
		title: "Capture Leads",
		description:
			"Make your lead capture form visually appealing and strategically.",
	},
];

export const Navbar = () => {

	return (
		<header className="shadow-inner bg-opacity-15 w-[96%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 
      mx-auto sticky border border-primary z-40 rounded-2xl lg:flex flex flex-row space-x-4
       lg:justify-between p-2 bg-card justify-end gap-4 text-center items-center">
			<Link href="/" className="flex font-nippo text-xl flex items-center">
				{/* <ChevronsDown className="bg-gradient-to-tr border-primary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
				<Image
					src="/logo.png"
					alt="DeDevs"
					width={36}
					height={36}
					className="hidden lg:flex mr-2"
				/>
				<div className="font-bespoke md:font-bespokeBold text-2xl
          flex flex-row justify-center items-center text-center rounded-lg
          lg:w-full lg:h-full w-[56vw]
        ">
          {'DeDevs Club'}
				{/* {`${process.env.NODE_ENV === "development" ? screenSize : ""}`} */}
        </div>
			</Link>
			{/* <!-- Mobile --> */}
			<div className="flex items-center justify-center lg:hidden">
				{/* <Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Menu
							onClick={() => setIsOpen(!isOpen)}
							className="cursor-pointer lg:hidden"
						/>
					</SheetTrigger>

					<SheetContent
						side="left"
						className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-primary"
					>
						<div>
							<SheetHeader className="mb-4 ml-4">
								<SheetTitle className="flex items-center">
									<Link href="/" className="flex items-center">
										<ChevronsDown className="bg-gradient-to-tr border-primary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
										DeDevs
									</Link>
								</SheetTitle>
							</SheetHeader>

							{/* <div className="flex flex-col gap-2">
								{routeList.map(({ href, label }) => (
									<Button
										key={href}
										onClick={() => setIsOpen(false)}
										asChild
										variant="ghost"
										className="justify-start text-base font-nippoBold"
									>
										<Link href={href}>{label}</Link>
									</Button>
								))}
							</div>
						</div>

						<SheetFooter className="flex-row sm:flex-col justify-start items-start">
							<Separator className="mb-2" />
							<Button
								asChild
								size="sm"
								variant="ghost"
								aria-label="Follow on X"
							>
								<Link
									aria-label="Follow on X"
									href="https://x.com/DeDevsClub"
									target="_blank"
								>
									<XIcon className="flex size-8 bg-primary rounded-full justify-center items-center flex-shrink-0 p-0.5" />
								</Link>
							</Button>

							<Button
								asChild
								size="sm"
								variant="ghost"
								aria-label="View on GitHub"
							>
								<Link
									aria-label="View on GitHub"
									href="https://github.com/DeDevsClub/dedevs-landing-page"
									target="_blank"
								>
									<GithubIcon className="flex size-8 bg-primary rounded-full justify-center items-center flex-shrink-0 p-0.5" />
								</Link>
							</Button>
						</SheetFooter>
					</SheetContent>
				</Sheet> */}
			</div>

			{/* <!-- Desktop --> */}
			<NavigationMenu className="hidden lg:block mx-auto">
				{/* <NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="bg-card text-base">
							Features
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div className="grid w-[600px] grid-cols-2 gap-5 p-4">
								<Image
									src="https://avatars.githubusercontent.com/u/75042455?v=4"
									alt="RadixLogo"
									className="h-full w-full rounded-md object-cover"
									width={600}
									height={600}
								/>
								<ul className="flex flex-col gap-2">
									{featureList.map(({ title, description }) => (
										<li
											key={title}
											className="rounded-md p-3 text-sm hover:bg-muted"
										>
											<p className="mb-1 font-semibold leading-none text-foreground">
												{title}
											</p>
											<p className="line-clamp-2 text-muted-foreground">
												{description}
											</p>
										</li>
									))}
								</ul>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						{routeList.map(({ href, label }) => (
							<NavigationMenuLink key={href} asChild>
								<Link href={href} className="text-base px-2">
									{label}
								</Link>
							</NavigationMenuLink>
						))}
					</NavigationMenuItem>
				</NavigationMenuList> */}
			</NavigationMenu>

			<div className="flex">
				<Button asChild size="sm" variant="ghost" aria-label="Follow on X">
					<Link
						aria-label="Follow on X"
						href="https://x.com/DeDevsClub"
						target="_blank"
					>
						<XIcon className="flex size-8 bg-primary text-black rounded-full justify-center items-center flex-shrink-0 p-0.5" />
					</Link>
				</Button>
				<Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
					<Link
						aria-label="View on GitHub"
						href="https://github.com/DeDevsClub/dedevs-landing-page"
						target="_blank"
					>
						<GithubIcon className="flex size-8 bg-primary rounded-full justify-center items-center flex-shrink-0 p-0.5" />
					</Link>
				</Button>
			</div>
		</header>
	);
};
