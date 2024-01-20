import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-slate-100 flex justify-center items-center flex-col p-3">
      <Navbar />
      <main className="h-full flex flex-col justify-center items-center gap-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
