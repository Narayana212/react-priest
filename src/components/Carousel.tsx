import { Card, CardContent } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useCallback } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);


  React.useEffect(() => {
    if (!api) {
      return;
    }


    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api || !api) return;
      api.scrollTo(index );
    },
    [api]
  );

  return (
    <div className="  flex flex-col justify-center md:justify-start md:items-start items-center md:pl-44">
      <Carousel
        className="w-full  py-20 max-w-xs  px-5 md:scale-[1.75]"
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 25 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex  aspect-video items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <ScrollArea className="w-96 whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 p-4">
          {Array.from({ length: 25 }).map((_, index) => (
            <div
              key={index}
              className={`py-2 px-4 border cursor-pointer ${
                current === index+1 ? "bg-blue-500 text-white transition-transform duration-300 ease-in-out transform" : ""
              }`}
              onClick={() => onThumbClick(index)}
            >
              {index+1}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
