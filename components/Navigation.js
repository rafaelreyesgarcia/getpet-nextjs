import Link from "next/link";

const Navigation = () => {
  return (
    <nav
      className="
        flex gap-5 items-center"
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services" >Services</Link>
      <Link href="/services" >Contact</Link>
    </nav>
  );
}

export default Navigation;