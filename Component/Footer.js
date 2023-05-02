import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../Image/INC_Logo-removebg-preview (3).png'

import { FaFacebook,FaTelegramPlane, FaInstagram,FaLinkedin,FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
    return (
        // <footer >
        //     <div className="grid grid-cols-4 gap-0 mt-20 bg-light-blue">
        //     <div>
        //         {/* <Image className="" src={logo} height={100} width={110}/> */}
        //         <p>Duis cursus, mi quis viverra ornare, eros dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sed. interdum nulla utimp erdiet commodo diam libero vitae nibh et jus cursus id rutrum lore imperdiet ut sem vitae risus tristique posuere</p>
        //         <div className=" flex">
        //             <Link href=""><FaSnapchatGhost/></Link>
        //             <Link href=""><FaLinkedin/></Link>
        //             <Link href=""><FaInstagram/></Link>
        //             <Link href=""><FaFacebook/></Link>
        //             <Link href=""><FaTelegramPlane/></Link>
        //         </div>
        //     </div>

        //       <div className="">
        //             <h4 className="font-bold text-2xl">Permalinks</h4>
        //             <div className="p-4">
        //                 <Link className="anchor"href="/About"  >About</Link>
        //                 <Link className="anchor" href="/Service"  >Service</Link>
        //                 <Link className="anchor" href="/OurTeam" >Our Team</Link>
        //                 <Link className="anchor" href="/Gallery" >Gallery</Link>
        //                 <Link className="anchor" href="/Blog" >Blog</Link>
        //                 <Link className="anchor" href="/Cpd" >Sign Up</Link>
        //             </div>
        //         </div>

        //         <div className="">
        //             <h4 className="font-bold text-2xl">Useful Links</h4>
                    
        //             <Link className="anchor" href="/About"  >Contact Us</Link>
        //             <Link className="anchor"  href="/Service"  >Privacy Policy</Link>
        //             <Link className="anchor" href="/OurTeam" >How It Works</Link>
        //             <Link className="anchor" href="/Gallery" >Terms and Condition</Link>
        //             <Link className="anchor" href="/Blog" ></Link>
        //             <Link className="anchor" href="/Cpd" >Sign Up</Link>

        //         </div>

        //          <div className="">
        //             <h4 className="font-bold text-2xl">Useful Links</h4>
                    
        //             <Link className="anchor" href="/About"  >Contact Us</Link>
        //             <Link className="anchor"  href="/Service"  >Privacy Policy</Link>
        //             <Link className="anchor" href="/OurTeam" >How It Works</Link>
        //             <Link className="anchor" href="/Gallery" >Terms and Condition</Link>
        //             <Link className="anchor" href="/Blog" ></Link>
        //             <Link className="anchor" href="/Cpd" >Sign Up</Link>

        //         </div>

        //         {/* <div>
        //             <input type="text" name="" placeholder="Your Name" />
        //             <input type="email" name="Email" placeholder="Email" />
        //             <textarea name="" placeholder="Input your text here" id="" cols="30" rows="10"></textarea>
        //         </div> */}
        //     </div>
        // </footer>

          <div className="footer-container">
            <div className="footer">
                <div className="col-1">
                      <Image className="" src={logo} height={100} width={80}/>
                    <p className="para-footer">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, quae cum? Tenetur maxime, asperiores autem perferendis expedita quidem explicabo consequatur?</p>
                    <div className="socialmed">
                      <Link href=""><FaSnapchatGhost/></Link>
                   <Link href=""><FaLinkedin/></Link>
                   <Link href=""><FaInstagram/></Link>
                   <Link href=""><FaFacebook/></Link>
                   <Link href=""><FaTelegramPlane/></Link>
                    </div>
                </div>
            
                <div className="col-2">
                    <h4>Permalinks</h4>
                    
                     <Link className="anchor"href="/About"  >About</Link>
                        <Link className="anchor" href="/Service"  >Service</Link>
                        <Link className="anchor" href="/OurTeam" >Our Team</Link>
                        <Link className="anchor" href="/Gallery" >Gallery</Link>
                    <Link className="anchor" href="/Blog" >Blog</Link>
                       <Link className="anchor" href="/Cpd" >Sign Up</Link>

                </div>

                <div className="col-3">
                    <h4>Insights</h4>
                 <Link className="anchor" href="/About"  >Contact Us</Link>
                    <Link className="anchor"  href="/Service"  >Privacy Policy</Link>
                   <Link className="anchor" href="/OurTeam" >How It Works</Link>
                   <Link className="anchor" href="/Gallery" >Terms and Condition</Link>
               <Link className="anchor" href="/Blog" ></Link>
                   <Link className="anchor" href="/Cpd" >Sign Up</Link>

                </div>

                <div className="col-4">
                    <h4>Get In Touch</h4>
              <Link className="anchor" href="/About"  >Contact Us</Link>
                   <Link className="anchor"  href="/Service"  >Privacy Policy</Link>
                    <Link className="anchor" href="/OurTeam" >How It Works</Link>
                 <Link className="anchor" href="/Gallery" >Terms and Condition</Link>
                   <Link className="anchor" href="/Blog" ></Link>
                    <Link className="anchor" href="/Cpd" >Sign Up</Link>
                    

                </div>
            </div>
           <div className="footer-copy">
            <small>2022 Ali Emmanuel &copy; All Rights Reserved</small>
           </div>
        </div>
    )

  
}

export default Footer;