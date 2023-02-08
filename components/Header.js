import Navigation from "./Navigation";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="
        flex justify-between
        px-2 py-1
        sticky top-0 z-20"
    >
      <div
        className="
          max-w-full w-16"
      >
        <Link href="/"><img src="/logo.png" alt="logo" /></Link>
      </div>
      <Navigation />
      <div
        className="
          flex gap-2 items-center"
      >
        <Link href="https://www.facebook.com/Petservicesinelmwoodpark" target="_blank">
          <FacebookIcon />
        </Link>
        <Link href="tel:+17087699451" className="hidden md:block">
          708-769-9451
        </Link>
      </div>
    </header>
  );
}

export default Header;