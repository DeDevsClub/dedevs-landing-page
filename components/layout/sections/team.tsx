import { styles } from "@/app/styles";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  description: string;
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/images/team/val.png",
      firstName: "Val",
      lastName: "Alexander",
      positions: ["Founder", "Blockchain Engineer", "AI Engineer"],
      description: `
          Full-stack engineer at Chainlink Labs with expertise in blockchain and machine learning engineering since 2019. Background in: leading workshops and masterclasses for Chainlink Labs, securing $500M+ in smart contracts, and co-founding an exchange with over $10M asset TVL at peak. 
          Passionate about tinkering and near-daily hacking, which evident in the BunsDev GitHub contributions calendar.
      `,
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/buns",
        },
        {
          name: "Github",
          url: "https://github.com/BunsDev",
        },
        {
          name: "X",
          url: "https://x.com/0xBuns",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
		<section id="team" className={`${styles.section}`}>
      <div className="text-center mb-8">
        <h2 className={`${styles.topHeader} text-lg text-primary text-center mb-2 tracking-wider`}>
          Our Founder
        </h2>

        <h2 className={`${styles.bottomHeader} text-3xl md:text-4xl text-center font-bold`}>
          Buns Enchantress
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, description, socialNetworks },
            index
          ) => (
            // Profile Card //
            <><Card
              key={`${firstName}-${lastName}`}
              className="bg-muted/60 dark:bg-card flex flex-col 
                font-bespokeStencilBold overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]" />
                </div>
                <CardTitle 
                  className="py-6 pb-4 px-6 font-bespokeStencilBold justify-center items-center flex flex-row"
                >
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>

              {/* {positions.map((position, index) => (
                <CardContent
                  key={`${position}`}
                  className={`pb-0 text-muted-foreground font-bespokeStencil ${index === positions.length - 1 && "pb-6"}`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))} */}

              <CardFooter className="space-x-4 mt-auto border-t-4 border-primary/90 pt-4">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={`${name}-${url}`}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
            <Card 
              key={`${firstName}-${lastName}-description`}
              className="md:block bg-muted/60 dark:bg-card flex flex-row md:w-[64vw] max-w-7xl justify-center items-center 
              font-bespokeStencilBold overflow-hidden group/hoverimg"
            >
                <CardContent
                  // className="hidden"
                  className="grid grid-cols-1"
                >
                  <p className="text-md sm:text-md lg:text-3xl text-center grid grid-cols-1 h-[28vh] 
                  items-center justify-center font-bespokeStencil">
                    {description}
                  </p>
                </CardContent>
              </Card></>
          )
        )}
      </div>
    </section>
  );
};
