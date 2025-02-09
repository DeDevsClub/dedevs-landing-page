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
    question: "What makes DeDevs Club unique compared to other tech communities?",
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
    question: "Do I need to be an expert in both blockchain and AI to join?",
    answer: "No, many of our members are experts in one field or are simply enthusiasts looking to expand their knowledge.",
    value: "item-4",
  },
  {
    question:
      "What kind of resources and opportunities does DeDevs Club provide?",
    answer: "Networking opportunities, collaborative projects, learning resources, and curated industry updates.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQs
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
