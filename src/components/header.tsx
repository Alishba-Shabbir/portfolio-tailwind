import Link from "next/link"
export default function Header (){
    return (
        <div className="header">
          
        <ul className="header-button">
        <li>
            <Link href="/" className="main">Portfolio</Link>
          </li>
          
          <li>
            <Link href="/about-us">About Me</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Me</Link>
          </li>
          <li>
          <Link href="/skills">Skills</Link>
          </li>
        </ul>
      </div>
      
    )
}