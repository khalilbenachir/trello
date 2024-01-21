"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { useSideMenuMobile } from "@/hooks/useSideMenuMobile";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SideBar from "./SideBar";

const SideBarMobile = () => {
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();

  const isOpen = useSideMenuMobile((state) => state.open);
  const onOpen = useSideMenuMobile((state) => state.setOpen);
  const onClose = useSideMenuMobile((state) => state.setClose);

  console.log(isOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [onClose, pathName]);

  if (!mounted) return null;

  return (
    <>
      <Button
        size="sm"
        variant="ghost"
        onClick={onOpen}
        className="block md:hidden"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="pt-10 p-2">
          <SideBar storedKey="side-menu-mobile-key" />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideBarMobile;
