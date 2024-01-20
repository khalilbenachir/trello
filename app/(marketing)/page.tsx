import { Medal } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Page = () => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-4",
        textFont.className
      )}
    >
      <div className="bg-amber-100 text-amber-700 p-3 px-4 rounded-full shadow-sm flex justify-center items-center">
        <Medal className="w-6 h-6 mr-2" />
        <p className="text-2xl uppercase">NO 1 task management</p>
      </div>
      <p className="text-3xl md:text-6xl text-neutral-600">
        Trello helps teams move
      </p>
      <p className="px-3 p-2 text-center text-3xl rounded-sm md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600">
        work forward.
      </p>
      <p className="text-sm sm:text-2xl max-w-sm sm:max-w-2xl text-balance text-neutral-400 text-center">
        Collaborate efficiently, manage projects seamlessly, and achieve new
        levels of productivity. Whether working in high rises or from the home
        office, Trello empowers your unique team to accomplish it all.
      </p>
      <Button variant="default" asChild size="lg">
        <Link href="/sign-up">Get Trello for free</Link>
      </Button>
    </div>
  );
};

export default Page;
