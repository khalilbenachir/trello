import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden md:flex justify-center items-center gap-1 hover:opacity-30 transition">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p className="text-2xl font-semibold">Trello</p>
      </div>
    </Link>
  );
};

export default Logo;
