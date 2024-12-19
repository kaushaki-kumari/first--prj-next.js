import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex space-x-4">
      <Link href="/" >Home</Link>
      <Link href="/about" >About</Link>
      <Link href="/contact" >Contact</Link>
      <Link href="/product" >Product</Link>
      <Link href="/blog" >Blog</Link>
    </nav>
  )
}

export default Navbar