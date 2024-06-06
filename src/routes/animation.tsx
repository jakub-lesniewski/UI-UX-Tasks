import { Button } from "@/components/ui/button";
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

export default function Animation() {
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

      <div className="flex flex-col items-start gap-4">
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
      </div>
    </div>
  );
}
