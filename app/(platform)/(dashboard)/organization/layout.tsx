import SideBar from "../_components/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex max-w-2xl md:max-w-screen-xl gap-x-4 mt-14 p-4 pt-10">
      <div className="hidden md:block shrink-0 w-64">
        <SideBar storedKey="side-menu-key" />
      </div>
      <section className="flex-1">{children}</section>
    </main>
  );
};

export default Layout;
