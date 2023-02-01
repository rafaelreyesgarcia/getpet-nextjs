import Navigation from "./Navigation";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/"><img src="/logo.png" alt="logo" /></Link>
      </div>
      <Navigation />
      <div className="header__contact">
        <Link href="https://www.facebook.com/Petservicesinelmwoodpark" target="_blank">
          <FacebookIcon />
        </Link>
        <Link href="tel:+17087699451">708-769-9451</Link>
      </div>
    </header>
  );
}
 
export default Header;