import {blog} from '../data'
import Image from 'next/image';
import Link from 'next/link';
import blogimg from '../Image/pexels-fox-1595391.jpg'
export default function Blog() {
  return (
    <div className='container'>
      <div className='mt-10 sm:mt-0 p-2'>
        <h1 className='mb-10 text-3xl font-semibold'>Our Blog</h1>
        <p className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae iusto a nam unde quis, harum quidem amet eaque error, non ea corporis assumenda modi. Molestiae deleniti veritatis maxime temporibus? Officia.</p>
      </div>

        {/* <Link href={'./post/id'}>
          <Image src={blogimg} alt='image' height={600} width={600}/>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde tenetur exercitationem eius dolor ex!</h1>
        </Link> */}
      <div className='grid grid-cols-3 gap-10 mt-16 sm:grid-cols-1 text-2xl p-2  md:grid-cols-2'>
        {
          blog.map((article)=>{
            const{des,header,Author,id,image,span}=article
            return(
              <Link href={'/post/'+ id} key={id}  >
                <div >
                      <Image src={image} width={500} height={400} className='rounded-md'/>
                      <p className='text-center mt-3' >{span}</p>
                     <h1 className=' text-center mt-2 text-2xl font-bold'>{header}</h1>
                    <p className='mt-3 text-center'>{Author}</p>
                </div>
                
              </Link>
            )
          })
        }

      </div> 
    </div>
  )
}
