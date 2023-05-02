import Link from 'next/link';
import {Team} from '../data'
import { FaFacebook,FaTelegramPlane, FaInstagram,FaLinkedin,FaSnapchatGhost } from "react-icons/fa";
import Image from 'next/image';

function OurTeam() {
  return (

    <div className="container">
      <div className='sm:p-2 mt-0'>
        <h1 className='text-3xl font-semibold mt-10'>Our Team</h1>
        <p className='mt-10 text-2xl'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut molestiae ipsam expedita illum eum autem! Ratione ipsam unde voluptate. ipsum dolor sit, amet consectetur adipisicing elit. <br /> Laudantium possimus necessitatibus corrupti eum ipsam laborum corporis. Aliquam qui totam similique temporibus, incidunt consequatur ducimus distinctio repudiandae minima nihil possimus expedita?</p>
      </div>
      <div className="team-container">
        {Team.map((teams) => {
          const { id, image, job, name, socials } = teams;
          return (
            <div className="team-card" key={id}>
              <div className="team-img">
                <Image className="timg" src={image} alt="" />
              </div>
              <h3 className='text-2xl font-semibold'>{name}</h3>
              <p  className='text-2xl font-semibold'>{job}</p>
              {/* <Link href={socials} ><FaInstagram/> <FaFacebook/></Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam
