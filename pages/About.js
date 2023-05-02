import Image from "next/image"
import Aboutimg from '../Image/about-banner.png'
import Aboutimg1 from '../Image/pexels-fox-1595391.jpg'
export default function About() {
  return (
    <div className="container">
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-10  sm:grid-cols-1 text-2xl p-2   md:grid-cols-2">
          <div>
               <h1 className="text-4xl font-semibold">Our Mission</h1>
              <p className="mt-10 text-2xl"> Quasi expedita autem atque vero.Sunt tenetur quibusdam esse praesentium laudantium eos quaerat repudiandae at accusamus sapiente! ipsum dolor sit amet consectetur adipisicing elit. Numquam aut quas culpa nobis cupiditate optio, cum sapiente qui dolore repudiandae nostrum modi sit consequuntur corporis provident aperiam repellendus illum expedita doloribus ipsa suscipit enim! Aliquid ipsum modi officiis voluptas, incidunt, pariatur voluptatum id saepe illo dolorum perspiciatis quas ad. Necessitatibus.</p>
          </div>
         
            <Image className="w-full"  src={Aboutimg} alt="image-About" />
        </div>

        <div className="grid grid-cols-2 gap-10 mt-20  sm:grid-cols-1 row-span-full text-2xl p-2   md:grid-cols-2">
           <Image className="w-full "  src={Aboutimg1} alt="image-About" />
          <div>
            <h1 className="text-4xl font-semibold">Our Vision</h1>
          <p  className="mt-10 text-2xl"> Quasi expedita autem atque vero.Sunt tenetur quibusdam esse praesentium laudantium eos quaerat repudiandae at accusamus sapiente! ipsum dolor sit amet consectetur adipisicing elit. Numquam aut quas culpa nobis cupiditate optio, cum sapiente qui dolore repudiandae nostrum modi sit consequuntur corporis provident aperiam repellendus illum expedita doloribus ipsa suscipit enim! Aliquid ipsum modi officiis voluptas, incidunt, pariatur voluptatum id saepe illo dolorum perspiciatis quas ad. Necessitatibus.</p>
          </div>
           
        </div>

      </div>
    </div>
  )
}
