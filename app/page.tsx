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
}

const pages: Page[] = [
	{
		page: <HeroSection />,
		name: "Hero",
	},
	{
		page: <BenefitsSection />,
		name: "Benefits",
	},
	{
		page: <TechSection />,
		name: "Techonologies",
	},
	{
		page: <TestimonialSection />,
		name: "Testimonials",
	},
	{
		page: <PricingSection />,
		name: "Pricing",
	},
	{
		page: <FAQSection />,
		name: "FAQ",
	},
	{
		page: <FooterSection />,
		name: "Footer",
	},
];

export default function Home() {
	return (
		<div className="">
			{pages.map((page, index) => (
				<div
					key={page.page?.toString()}
					className={
						`
							container ${index % 2 === 0 ? "bg-primary/20" : "bg-black/60"} 
							rounded-[20px] p-4 border-2 border-primary my-2
							${page.name === "Footer" ? "h-[18vh] flex items-center justify-center" : ""}
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
