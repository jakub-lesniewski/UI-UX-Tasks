import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Animation() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-20 flex w-[350px] flex-col items-start rounded-md border-2 p-6">
      <p className="leading-7 [&:not(:first-child)]:mt-4">
        Podstrona zawierająca rozwiązanie zadania 10.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-4">
        Prócz komponentów Dialog Window i Side Sheet można również spojrzeć na
        przyciski nawigacji w lewym górnym rogu oraz Theme Toggler znajdujący
        się w prawym górnym rogu.
      </p>

      <div className="flex flex-col items-start gap-6">
        <div className="mt-6 flex flex-col gap-2">
          <Dialog>
            <DialogTrigger>
              <Button size="lg" className="text-lg">
                Dialog Window
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Window</DialogTitle>
                <DialogDescription>
                  This in fact is a dialog window.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col gap-2">
          <Sheet>
            <SheetTrigger>
              <Button size="lg" className="text-lg">
                Side Sheet
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Side Sheet</SheetTitle>
                <SheetDescription>
                  This in fact is a side sheet window.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <Progress value={progress} className="w-full" />
      </div>
      <Carousel className="mt-10 self-center">
        <CarouselContent className="text-center">
          <CarouselItem>Jestem</CarouselItem>
          <CarouselItem>Sobie</CarouselItem>
          <CarouselItem>Karuzelą</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
