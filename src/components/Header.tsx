import Image from "next/image";
import CurrentDate from "./CurrentDate";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-4 max-w-7xl mx-auto px-4 py-4">
      <div className="relative flex flex-row items-center gap-4">
        <Image
          className="h-10 w-10 object-contain"
          height={50}
          width={50}
          src="/logo.webp"
          alt="Logo"
        />
        <div className="flex flex-col items-start">
          <p className="text-lg font-bold">Bangla News 24</p>
          <CurrentDate />
        </div>
      </div>
      <NavLinks></NavLinks>
      <div className="absolute right-20 top-4">
        <AuthButtons></AuthButtons>
      </div>
    </header>
  );
};

export default Header;
