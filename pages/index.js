
import Image from "next/image"
import imghero_1 from '../Image/undraw_term_sheet_re_ju7s 1.png'
import imghero from '../Image/3643110-removebg-preview 1.png'
import Newslet from "@/Component/Newslet"
import Testimonials from "@/Component/Testimonials"
export default function Home() {
  return (
  <div className="container">

    <div>
         <div className=" mt-5 grid grid-cols-2 gap-5 sm:grid-cols-1 text-2xl p-2  md:grid-cols-2">
      <div className="mt-20" >
        <h1  className="text-3xl font-semibold" >IMPACT NUTRITION CONSULT LEADERS IN NUTRITION FOR HEALTH</h1>
        <p className="mt-5 text-2xl">We are committed to being leaders in the field of nutrition for optimal health. Our team of experienced and knowledgeable nutritionists are here to provide you with personalized guidance and support to help you achieve your health goals </p>
        <button className=' p-2 text-white rounded-xl bg-blue mt-5' >Discover More</button>
      </div>
      <Image className="w-full"  src={imghero} alt="img hero" />
        
    </div> 
    </div> 

    {/* Second Section  */}

      <div>
        <div className=" mb-20  grid grid-cols-2 gap-5 sm:grid-cols-1  text-2xl p-2    md:grid-cols-2">
          <Image className="w-full"  src={imghero_1} alt="img hero" />
        <div className="" >
          <h1  className="text-3xl font-semibold" >The right place to develop your passion in nutritional well-being</h1>
          <p className="mt-5">We organize development program for Nutritionist of divers background and we believe that unity there is a strong.  <br /> We organize development program for Nutritionist of divers background and we believe that unity there is a strong.  </p>
          {/* <button className=' p-1 text-white rounded-xl bg-blue mt-5' >View More</button> */}
        </div>
        
          
      </div> 
      </div> 
        
      <Newslet/>
      <Testimonials/>
    
  </div>
  )
}
