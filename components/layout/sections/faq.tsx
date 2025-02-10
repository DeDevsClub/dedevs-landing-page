import { styles } from "@/app/styles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is DeDevs Club?",
    answer: "Developer community uniting blockchain and AI experts for knowledge sharing, collaboration, and innovative project ideation.",
    value: "item-1",
  },
  {
    question: "What makes DeDevs Club unique?",
    answer:
      "Our community specifically focuses on the intersection of blockchain and AI and we emphasize practical skill development.",
    value: "item-2",
  },
  {
    question:
      "How can I collaborate with other members?",
    answer:
      "Members can participate in forums, join project teams, and participate in open source projects via our GitHub Org: DeDevsClub.",
    value: "item-3",
  },
  {
    question: "Do I need to be an expert to join?",
    answer: "No, many of our members are experts in one field or are simply enthusiasts looking to expand their knowledge.",
    value: "item-4",
  },
  {
    question:
      "What resources and opportunities are provided?",
    answer: "Networking opportunities, collaborative projects, learning resources, and curated industry updates.",
    value: "item-5",
  },
  {
    question: "How can I get involved with DeDevs Club?",
    answer: "Join our Discord community and participate in our forums, projects, and events.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
		<section id="faq" className={`${styles.section} w-full`}>
      <div className="text-center mb-8">
        {/* tracking-wider */}
        <h2 className={`${styles.topHeader}`}>
          FAQs
        </h2>

        <h2 className={`${styles.bottomHeader}`}>
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left text-white font-nippo text-xs sm:text-xl">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
