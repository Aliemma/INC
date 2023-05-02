import {Gallery_1} from '../data'
import Image from 'next/image';

function Gallery() {
  return (

    <div  className="container">
      <div className='mt-10 sm:p-2 mt-0 '>
        <h1 className='mb-10 text-3xl font-semibold'>Our Gallery</h1>
        <p className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae iusto a nam unde quis, harum quidem amet eaque error, non ea corporis assumenda modi. Molestiae deleniti veritatis maxime temporibus? Officia.</p>
      </div>

      <div className='mt-20 grid grid-cols-3 gap-7 sm:grid-cols-1  p-2  md:grid-cols-2'>
        {Gallery_1.map((Gallery)=>{
           const { id, image } = Gallery;
           return(
            <div key={id} className='' >
              <Image className='w-full' height={500} width={600} src={image} alt="Gallery" />
            </div>
           )
        })}
      </div>
    </div>
  )
}

export default Gallery;
