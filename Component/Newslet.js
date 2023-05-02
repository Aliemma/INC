import Image from 'next/image'
import imghero_2 from '../Image/undraw_books_re_8gea 1.png'

function Newslet() {
  return (
    <div >
      {/* <h2 className="text-3xl text-center mt-10 p-2 ">Subscribe for our newsletters</h2> */}
      
      <div className=" grid grid-cols-2 gap-5  sm:grid-cols-1 text-2xl p-2   md:grid-cols-2">
        <p className="mt-5 text-2xl">We organize multiple CPD programs every year to keep our professionals up to and well informed.We organize multiple CPD programs every year to keep our professionals up to and well informed. <br /> We organize multiple CPD programs every year to keep our professionals up to and well informed.</p>
        <Image className='w-full ' width={500} height={400} src={ imghero_2} alt="" />

      </div>
    </div>
  )
}

export default Newslet
