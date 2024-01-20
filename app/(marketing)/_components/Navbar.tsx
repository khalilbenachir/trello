import Link from "next/link";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed flex items-center top-0 w-full h-14 px-4 bg-white shadow-sm border-b">
      <div className="flex max-w-screen-2xl justify-between items-center w-full">
        <Logo />
        <div className="flex justify-between items-center w-full md:w-auto gap-4">
          <Button size="sm" asChild variant="outline">
            <Link href="/sign-in">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Trello for free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
