
import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
       <Image src="/Rama .jpeg" width={120} height={77}/>
      </div>
      
       <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Gautam">Gautam List</Link> 

    </nav>
  )
}