import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface NavLinkProps {
	href: string;
  icon: React.ReactNode;
	label: string;
  isExternal?: boolean;
}

export const NavLink = ({ href, label, icon, isExternal = false }: NavLinkProps) => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<Link href={href} target={isExternal ? "_blank" : "_self"} className="w-full justify-start">
			<Button variant="ghost" size="sm" className="w-full justify-start">
				<div className="flex gap-2 dark:hidden">
					{icon}
					<span className="block lg:hidden"> {label} </span>
				</div>

				<div className="dark:flex gap-2 hidden">
					{icon}
					<span className="block lg:hidden"> {label} </span>
				</div>

				<span className="sr-only"> {label} </span>
			</Button>
		</Link>
	);
};
