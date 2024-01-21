"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useOrganizationList, useOrganization } from "@clerk/nextjs";
import { useLocalStorage } from "usehooks-ts";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";

import NavItem, { Organization } from "./NavItem";

interface IProps {
  storedKey?: string;
}

const SideBar = ({ storedKey = "" }: IProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storedKey,
    {}
  );
  const { isLoaded: isLoadedOrg, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  const { organization: activeOrg, isLoaded: isLoadedActiveOrg } =
    useOrganization();

  const defaultAccordionValue = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) acc.push(key);
      return acc;
    },
    []
  );

  const onExpanded = (id: string) => {
    return setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isLoadedOrg || userMemberships.isLoading || !isLoadedActiveOrg)
    return (
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Skeleton className="w-[50%] h-9" />
          <Skeleton className="w-9 h-9" />
        </div>
        <NavItem.Skeleton />
        <NavItem.Skeleton />
        <NavItem.Skeleton />
      </div>
    );
  return (
    <aside className="flex flex-col items-center w-full">
      <div className="font-medium text-xs flex justify-between items-center pl-3 w-full">
        <p className="">Workspaces</p>
        <Button variant="ghost" size="icon" role="button" asChild>
          <Link href="/select-org">
            <Plus className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <div className="w-full">
        <Accordion defaultValue={defaultAccordionValue} type="multiple">
          {userMemberships.data.map(({ organization }) => {
            return (
              <NavItem
                key={organization.id}
                organization={organization as Organization}
                isActive={activeOrg?.id === organization.id}
                isExpanded={expanded[organization.id]}
                onExpended={onExpanded}
              />
            );
          })}
        </Accordion>
      </div>
    </aside>
  );
};

export default SideBar;
