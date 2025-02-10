import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { TechSection } from "@/components/layout/sections/tech";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { ApplicationsSection } from "@/components/layout/sections/applications";

export const metadata = {
	title: "DeDevs Club",
	description:
		"DeDevs is a community of developers who learn and grow together.",
	openGraph: {
		type: "website",
		url: "https://github.com/DeDevsClub/dedevs-landing-page.git",
		title: "DeDevs Club",
		description:
			"DeDevs is a community of developers who learn and grow together.",
		images: [
			{
				url: "https://dedevs.club/og-image.png",
				width: 1200,
				height: 630,
				alt: "DeDevs Club",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "https://github.com/DeDevsClub/dedevs-landing-page.git",
		title: "DeDevs Club",
		description:
			"DeDevs is a community of developers who learn and grow together.",
		images: ["https://dedevs.club/og-image.png"],
	},
};

interface Page {
	page: React.ReactNode;
	name: string;
	bgColor: string;
	hideOnMobile: boolean;
}

const pages: Page[] = [
	{
		page: <HeroSection />,
		name: "Hero",
		bgColor: "bg-black/90",
		hideOnMobile: false,
	},
	// {
	// 	page: <ApplicationsSection />,
	// 	name: "Applications",
	// 	bgColor: "bg-black/90",
	// 	hideOnMobile: false,
	// },
	{
		page: <TechSection />,
		name: "Techonologies",
		bgColor: "bg-black/90",
		hideOnMobile: false,
	},
	{
		page: <TestimonialSection />,
		name: "Testimonials",
		bgColor: "bg-primary/20",
		hideOnMobile: true,
	},
	{
		page: <PricingSection />,
		name: "Pricing",
		bgColor: "bg-black/90",
		hideOnMobile: false,
	},
	{
		page: <TeamSection />,
		name: "Team",
		bgColor: "bg-black/90",
		hideOnMobile: true,
	},
	{
		page: <FAQSection />,
		name: "FAQ",
		bgColor: "bg-black/90",
		hideOnMobile: false,
	},
	// {
	// 	page: <FooterSection />,
	// 	name: "Footer",
	// 	bgColor: "bg-black/90",
	// 	hideOnMobile: false,
	// },
];

export default function Home() {
	return (
		<div className="">
			{pages.map((page, index) => (
				<div
					key={page.page?.toString()}
					// border-2 border-primary
					className={
						`
							container ${page.bgColor} 
							rounded-[12px] p-4 my-2
							${page.name === "Footer" ? "h-[12vh] bg-black/90 flex items-center justify-center" : ""}
							${page.hideOnMobile ? "hidden sm:block" : ""}
						`
						//page.toString() === "PricingSection" ? "bg-primary/20" : "bg-black/60"
					}
				>
					{page.page}
				</div>
			))}
		</div>
	);
}
