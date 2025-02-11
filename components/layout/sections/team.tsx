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
import { InstagramIcon } from "lucide-react";
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
    // https://raw.githubusercontent.com/DeDevsClub/dedevs-landing-page/refs/heads/main/public/assets/images/team/val.png
      imageUrl: "/assets/images/team/val.png",
      firstName: "Val",
      lastName: "Alexander",
      positions: ["Founder", "Blockchain Engineer", "AI Engineer"],
      description: `
        Valentina Alexander is a full-stack engineer at Chainlink Labs where she has been specializing in blockchain technology and machine learning engineering since joining in 2019. Throughout her tenure, she has had the privilege of leading comprehensive workshops and in-depth masterclasses for Chainlink Labs, helping developers understand and implement blockchain solutions effectively. Her technical achievements include architecting and securing smart contracts that collectively manage over $500M in digital assets, demonstrating her commitment to building robust and reliable blockchain infrastructure.
        One of her proudest accomplishments was co-founding and developing a decentralized exchange platform that successfully grew to achieve $10M in total value locked (TVL) at its peak, showcasing her ability to create and scale blockchain applications. As a dedicated technologist, she maintains an active presence in the development community through daily coding sessions and continuous learning, which is evidenced by her consistent contributions to various projects on her BunsDev GitHub profile, where her contributions calendar reflects her ongoing commitment to software development and innovation.
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
        {
          name: "Instagram",
          url: "https://www.instagram.com/bunsdev/",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string, size: number) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon className={`w-${size} h-${size}`} />;
      case "Github":
        return <GithubIcon className={`w-${size} h-${size}`} />;
      case "X":
        return <XIcon className={`w-${size} h-${size}`} />;
      case "Instagram":
        return <InstagramIcon className={`w-${size} h-${size}`} />;
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, description, socialNetworks },
            index
          ) => (
            // Profile Card //
            <><Card
              key={`${firstName}-${lastName}`}
              className="bg-muted/60 dark:bg-card flex flex-col h-full max-h-[62rem]
                font-bespokeStencilBold overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0 mb-4">
                <div className="h-[48rem] w-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt="Headshot of the DeDevs Founder: Buns Enchantress"
                    width={600}
                    height={600}
                    className="w-full h-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]" />
                </div>
                <CardTitle 
                  className="py-8 px-6 font-bespokeStencilBold justify-center text-center items-center flex flex-row text-3xl"
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
            {/* Social Icons */}
              <CardFooter className="space-x-4 w-full mt-auto pt-4 border-t-4 border-primary/90 
              justify-center items-center border-t-4 rounded-[18px] text-black border-primary/90">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={`${name}-${url}`}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all rounded-full p-2 bg-primary/80 hover:bg-primary cursor-pointer"
                  >
                    {socialIcon(name, 8)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
            {/* Description */}
            <Card 
              key={`${firstName}-${lastName}-description`}
              className="bg-muted/60 dark:bg-card flex flex-row md:w-full max-w-screen-3xl justify-center items-center 
              font-bespokeStencil overflow-hidden group/hoverimg h-[64rem] max-h-[60rem]"
            >
                <CardContent
                  // className="hidden"
                  className="grid grid-cols-1 bg-primary/20 rounded-[12px] mx-4 p-8 border-4 border-primary/90 text-white font-bespokeStencil"
                >
                  <div className="text-center grid grid-cols-1 text-sm sm:text-md md:text-sm lg:text-xl xl:text-2xl md:gap-8
                  items-center justify-center">
                  <p className="grid grid-cols-1">
                    {`Full-stack DevRel Engineer (DRE) at Chainlink Labs and founder of DeDevs, she has been specializing in blockchain technology 
                    and machine learning engineering since joining in 2019.`}                    
                  </p>
                  <p className="grid grid-cols-1">
                    {'Val has led technical workshops and masterclasses for Chainlink Labs, helping developers understand and implement blockchain solutions.'}
                  </p>
                  <p className="grid grid-cols-1">
                    {'Her technical achievements include architecting and securing smart contracts that collectively manage over $500M in digital assets.'}
                  </p>
                  <p className="hidden lg:grid lg:grid-cols-1">
                    {'One of her proudest accomplishments was co-founding and developing a decentralized exchange platform that successfully grew to achieve $10M in total value locked (TVL) at its peak.'}
                  </p>
                  <p className="grid grid-cols-1">
                    {`She maintains an active presence in the development community through daily coding sessions and continuous learning, 
                      which is evidenced by her consistent contributions to various projects on her BunsDev GitHub profile, where her contributions calendar reflects her ongoing commitment to software development and innovation.
                    `}
                  </p>
                  </div>
                </CardContent>
              </Card></>
          )
        )}
      </div>
    </section>
  );
};
