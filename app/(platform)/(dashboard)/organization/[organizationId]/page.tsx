import { OrganizationSwitcher } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div>
      <OrganizationSwitcher hidePersonal />
    </div>
  );
};

export default Page;
