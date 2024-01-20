import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full h-14 px-4 z-50 bg-white shadow-sm rounded-b flex items-center">
      <div className="flex items-center max-w-screen-2xl gap-3 w-full justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:flex justify-center items-center">
            <Logo />
          </div>
          <Button
            size="sm"
            variant="primary"
            className="hidden md:flex justify-center items-center"
          >
            Create <Plus className="w-6 h-6 ml-2" />
          </Button>
          <Button
            variant="primary"
            className="flex justify-center items-center md:hidden"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>
        <nav className="flex justify-center items-center gap-2 md:gap-5">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterSelectOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  width: 30,
                  height: 30,
                },
              },
            }}
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
