import { OrganizationList } from "@clerk/nextjs";

const Page = () => {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl="/organization/:id"
      afterSelectOrganizationUrl="/organization/:id"
    />
  );
};

export default Page;
