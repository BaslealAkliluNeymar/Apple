import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
const Model = () => {
    useGSAP(() =>{
        gsap.to('#heading',{
            y:0,
            opacity:1
        })
    },[])
  return (
    <section className='common-padding'>
        <div className="screen-max-width">
            <h1 id="heading" className="section-heading">
                Take a closer Look
            </h1>
            <div className="flex flex-col items-center mt-5">
                <div className="w-full overflow-hidded relative h-[75vh] md:h-[90vh]">
                    
                </div>

            </div>
        </div>

    </section>
  )
}

export default Model