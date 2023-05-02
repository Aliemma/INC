

import Image from 'next/image';
import {testimonials} from '../data'
import { useState } from "react";
import{IoMdArrowDropleftCircle,IoMdArrowDroprightCircle} from "react-icons/io"
const Testimonials = () => {

    const[index,setindex]=useState(0)
    const{name,quote,job, avatar}=testimonials[index];

    const prevTestimonial=()=>{
         setindex(prev => prev -  1)
          if(index <= 0){
            setindex( testimonials.length -1);
        }
    }
    
    const nextTestimonial=()=>{
        setindex(prev => prev + 1)

        if(index >= testimonials.length -1){
            setindex(0);
        }
    }

    return ( 
        <div className='container'>
          <div>
            <h1 className='text-3xl font-semibold text-center mt-10'>What People Say About Us</h1>
          </div>
        <div className="Testimonial" >
            <div className="Testimonial-container">
                <div className='card-testi'>
                    <Image className="test-avatar" src={avatar} alt="" />
                    <p className="test-quote">{`"${quote}"`}</p>
                    <small>{name}</small> <br />
                    <small className="test-title">{job}</small>

                </div>
                <div className="testimonails-btncontainer">
                    <button className="test-btn" onClick={prevTestimonial}><IoMdArrowDropleftCircle/></button>
                    <button className="test-btn" onClick={nextTestimonial}><IoMdArrowDroprightCircle/></button>
                </div>
                
                
            </div>
            
        </div>

      </div>
     );
}
  
export default Testimonials;