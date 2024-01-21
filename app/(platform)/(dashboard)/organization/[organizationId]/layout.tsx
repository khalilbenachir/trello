import ControlOrganizedId from "./_components/OrgControl";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ControlOrganizedId />
      {children}
    </>
  );
};

export default Layout;
