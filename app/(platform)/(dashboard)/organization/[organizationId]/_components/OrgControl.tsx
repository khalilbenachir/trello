"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const ControlOrganizedId = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    if (params?.organizationId)
      setActive({
        organization: params.organizationId as string,
      });
  }, [params?.organizationId, setActive]);

  return null;
};

export default ControlOrganizedId;
