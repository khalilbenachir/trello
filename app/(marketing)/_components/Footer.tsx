import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="fixed flex items-center bottom-0 w-full h-14 p-4 bg-white shadow-sm border-t">
      <div className="flex max-w-screen-2xl justify-between items-center w-full">
        <Logo />
        <div className="flex justify-between items-center w-full md:w-auto gap-4">
          <Button size="sm" variant="ghost">
            Privacy police
          </Button>
          <Button size="sm" variant="ghost">
            Terms of service
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
