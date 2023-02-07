import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Link href="/" className="nav-link">Home</Link>
      <Link href="/about" className="nav-link">About</Link>
      <Link href="/services" className="nav-link">Services</Link>
      <Link href="/services" className="nav-link">Contact</Link>
    </nav>
  );
}

export default Navigation;