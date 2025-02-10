import type { ApplicationsProps } from "@/lib/types";

const appsList: ApplicationsProps[] = [
    {
        name: "Terminal",
        description: "Where you can execute commands.",
        link: "https://dedevs.club",
        image: "/icons/dedevs-club.svg",
    },

	{
		icon: "Gavel",
		name: "Forum",
		description:
			"Our community forum, which allows our members to communicate in an organized manner.",
		link: "https://dedevs.club",
		image: "/icons/dedevs-club.svg",
	},
	{
		icon: "MessageSquare",
		name: "Chatroom",
		description:
			"Native community chat for our community to collaborate and communicate with one another.",
		link: "https://dedevs.club",
		image: "/icons/dedevs-club.svg",
	},
	{
		icon: "Newspaper",
		name: "Feeds",
		description:
			"View timeline of tweets from DeDevsClub about blockchain and AI development and news.",
		link: "https://dedevs.club",
		image: "/icons/dedevs-club.svg",
	},
	{
		icon: "Users",
		name: "Discord",
		description:
			"Get access to our exclusive Discord server and interact with the rest of the community.",
		link: "https://dedevs.club",
		image: "/icons/dedevs-club.svg",
	},
];

export default appsList;