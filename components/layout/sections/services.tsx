import { styles } from "@/app/styles";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Blockchain Developers",
    description:
      "Blockchain developers seeking AI integrations, networking opportunities, and involvement in cutting-edge projects.",
    pro: 0,
  },
  {
    title: "AI Engineers",
    description:
      "AI/ML experts seeking to integrate agents to blockchain projects while expanding knowledge of distributed systems.",
    pro: 0,
  },
  {
    title: "Technology Enthusiasts",
    description: "Those interested in recent events in AI and low-code solutions to unlock AI superpowers in an intuitive and seamless manner.",
    pro: 0,
  },
  {
    title: "Crypto Traders",
    description: "Fascinated by emergent technologies and how they can benefit from advanced crypto trading strategies that leverage AI.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
		<section id="services" className={styles.section}>
      <h2 className={`text-lg text-primary text-center tracking-wider ${styles.topHeader}`}>
        Our Community
      </h2>

      <h2 className={`text-3xl md:text-4xl text-center font-bold ${styles.bottomHeader}`}>
        Community Composition
      </h2>
      {/* <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and engineering, we have experts from all walks of life. 
      </h3> */}
      <div className="grid mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-4" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
