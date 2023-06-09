import Image from "next/image"
import servicehero from '../Image/Rectangle 20.png'
import service_1 from '../Image/service-1.png'
import service_2 from '../Image/service-2.png'
import service_3 from '../Image/service-3.png'
import service_4 from '../Image/service-4.png'
function Service() {
  return (
    <div className="container">
      <div className="grid grid-cols-2  gap-8 sm:grid-cols-1 text-2xl p-2  md:grid-cols-2">
        <div className="mt-20">
        <h1 className="font-semibold mb-10 text-3xl">Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo sit, cum asperiores perferendis sed aperiam voluptatibus veritatis repudiandae itaque perspiciatis amet nobis. Saepe pariatur neque excepturi perspiciatis, deserunt quod.</p>
          {/* <button className=' p-2 text-white rounded-xl bg-blue mt-5' >Discover More</button> */}
        </div>
        <Image className="w-full"  src={servicehero} alt="img hero" />
      </div>

          {/* Service */}
        <div>
          <div className=" text-center mt-20">
              <h1 className="text-center font-semibold text-3xl">OUR SERVICES</h1>
            <p className="text-2xl mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores laborum tenetur nam vero quisquam nisi commodi blanditiis corporis obcaecati dignissimos?</p>
          </div>

          <div className="grid grid-cols-2 mt-14 gap-10 sm:grid-cols-1 text-2xl p-2  md:grid-cols-2">
            <div className=" grid place-items-center text-center">
              <Image className=""   src={service_1} alt="img hero" />
              <h2>Simply dummy text</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nesciunt, ab non cum voluptas molestias.</p>
             </div>
             
            <div className=" grid place-items-center text-center">
              <Image   src={service_2} alt="img hero" />
              <h2>Simply dummy text</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nesciunt, ab non cum voluptas molestias.</p>
            </div>

            <div className=" grid place-items-center text-center">
              <Image  src={service_3} alt="img hero" />
              <h2>Simply dummy text</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nesciunt, ab non cum voluptas molestias.</p>
             </div>

             <div className=" grid place-items-center text-center">
              <Image  src={service_4} alt="img hero" />
              <h2>Simply dummy text</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nesciunt, ab non cum voluptas molestias.</p>
             </div>
             
          </div>

        </div>
    </div>
  )
}

export default Service
