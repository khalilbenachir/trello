"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Layout, CreditCard, Settings, Activity } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type Organization = {
  slug: string;
  imageUrl: string;
  id: string;
  name: string;
};

interface IProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpended: (id: string) => void;
}

const routes = [
  { label: "Boards", href: "", icon: Layout },
  { label: "Activity", href: "/activity", icon: Activity },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Billing", href: "/billing", icon: CreditCard },
];

const NavItem = ({
  isActive,
  isExpanded,
  organization,
  onExpended,
}: IProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id} className="w-full m-0 p-0">
      <AccordionTrigger
        onClick={() => onExpended(organization.id)}
        className={cn(
          "flex items-center text-neutral-700 hover:bg-neutral-500/10 transition no-underline hover:no-underline rounded-md p-1.5 text-start gap-x-1",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className="flex gap-x-2 items-center">
          <div className="w-6 h-6 relative">
            <Image
              fill
              className="object-cover rounded-sm"
              alt="organization"
              src={organization.imageUrl}
            />
          </div>
          <p className="text-sm font-semibold">{organization?.name}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col items-center gap-1 text-neutral-700">
        {routes.map((route) => {
          const Icon = route.icon;
          const href = `/organization/${organization.id}${route.href}`;
          console.log(pathname === href);

          return (
            <Button
              key={route.href}
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start pl-10 gap-2",
                pathname === href && "bg-sky-500/10 text-sky-700"
              )}
              onClick={() => onClick(href)}
            >
              <Icon className="w-4 h-4" />
              {route.label}
            </Button>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function NavItemSkeleton() {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-9 h-9 rounded-full relative">
        <Skeleton className="absolute h-full w-full rounded-full" />
      </div>
      <Skeleton className="h-9 w-[50%]" />
    </div>
  );
};

export default NavItem;
