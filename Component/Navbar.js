import Link from "next/link";
import Image from "next/image";
import logo from '../Image/INC_Logo-removebg-preview (3).png'
import { BiMenuAltRight} from "react-icons/bi";
import { BiX} from "react-icons/bi";
import { useState } from "react";

export default function Navbar() {

    const[showNar,setShowNar]=useState(false)

  return (
     <div className="container">
   <nav className=" nav">
      <Link href='/'>
        <Image className="" src={logo} height={100} width={180}/>
      </Link>
 
      <div className={`Nav-link ${showNar?'showNav' : 'hideNar'}`}
      onClick={() => setShowNar(false)}>
        <ul className="mt-16" >
          <Link className="links" href='/'>Home</Link>
          <Link className="links" href='/About'>About Us</Link>
          <Link className="links" href='/Service'>Our Service</Link>
          <Link className="links" href='/OurTeam'>Our Team</Link>
          <Link className="links" href='/Gallery'>Gallery</Link>
          <Link className="links" href='/Blog'>Blog</Link>
          <button><Link className="link_btn" href='/Login'>Login/Logout</Link></button>
        </ul>
      </div>

            <button className="toggle-btn" onClick={()=>setShowNar(!showNar)}>
                  { showNar ? <BiX/> : <BiMenuAltRight/>}
            </button>
   </nav>
   </div>
  );
}
