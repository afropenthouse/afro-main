import Image from "next/image"
import Link from "next/link"
import './style.scss'

export default function Navbar() {
  return (
   <div className="main-nav">
     <nav className="nav">
        <div className="left">
            <Image src="/logo2.png" alt="" width={30} height={30}/>
            <h1>The Glip</h1>
        </div>
        <div className="middle">
            <Link href="/">Home</Link>
            <Link href="#about">About</Link>
            <Link href="/search">Find mentors</Link>
            <Link href="">Register as a  mentor</Link>
            <Link href="">Contact us</Link>
        </div>
        <div className="right">
        <Link href="">Login</Link>
        <Link href="">Sign up</Link>
        </div>
    </nav>
   </div>
  )
}
