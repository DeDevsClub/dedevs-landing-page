"use client";
import { styles } from "@/app/styles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://dedevs.club/images/testimonials/0xfrenzy.png",
    name: "George",
    userName: "Product Manager",
    comment: "DeDevs Club is an absolute game changer for anyone looking to advance their career in blockchain and AI engineering. The wealth of industry insights provided is unparalleled, keeping me up-to-date with the latest trends and breakthroughs. The technical skill development modules are expertly designed, offering hands-on experience and deep dives into complex concepts that have significantly enhanced my proficiency. \
    What truly sets this app apart, though, is the vibrant community support. Networking with like-minded professionals and industry leaders has been invaluable for my personal and professional growth. The collaborative environment fosters knowledge sharing and mentorship, creating an enriching learning experience.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-8 sm:py-12">
      <div className="text-center mb-8">
        <h2 className={`text-lg text-primary text-center mb-2 tracking-wider ${styles.topHeader}`}>
          Word on the Street
        </h2>

        <h2 className={`text-3xl md:text-4xl text-center font-bold mb-4 ${styles.bottomHeader}`}>
          Testimonials
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="text-lg font-bespokeStencil"
              // className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
