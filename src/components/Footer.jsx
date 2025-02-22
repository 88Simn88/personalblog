import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full flex flex-col items-center
    pt-10 gap-10'>

      <div className="w-2/3 h-1 border-solid border-t-2 border-[#165359] p-0 "></div>

      <div className='flex flex-col md:flex-row md:gap-24 gap-10'>

       

        <div className=" w-90 flex flex-col gap-5" >

          <div className='w-30 mt-5 flex flex-col items-center'>
            <p className='mb-3 text-white'>
              Contactame para proyectos o más información.
            </p>
           
            
          </div>

          <div className='md:h-12 h-24 flex md:flex-row flex-col items-center justify-center gap-5 '>
              <div className='flex gap-5 h-1/2 md:h-full'>

          <a className="h-full hover:scale-95 "  href="https://open.spotify.com/intl-es/artist/4mjFbyhsWhUeds6Zl0hgry?si=90Y9U-87RR6l7i9Zi24ryw"
              target="_blank">
              <img className="h-full w-full rounded-xl shadow shadow-white " src="./img/LogoSposf.png" alt="" />
            </a>

             <a className="h-full hover:scale-95 "  href="https://www.instagram.com/simn_sanchez?igsh=OHNpaWJ2YW0waW41"
              target="_blank">
              <img className="h-full w-full rounded-xl shadow shadow-white " src="./img/instasf2.jpg" alt="" />
            </a>
            <a className="h-full hover:scale-95 "  href="https://www.youtube.com/@_simonsanchez"
              target="_blank">
              <img className="h-full w-full rounded-xl shadow shadow-white " src="./img/youtsf1.jpg" alt="" />
            </a>
                </div>
                <div className='flex gap-5 h-1/2 md:h-full'>

            <a className="h-full hover:scale-95" href="https://www.facebook.com/simonsanchezpyc"
              target="_blank">
              <img className="h-full rounded-xl shadow shadow-white" src="./img/facesf2.jpg" alt="" />
            </a>
            <a className="h-full hover:scale-95" href="https://api.whatsapp.com/send?phone=541130307196"
              target="blank">
              <img className="h-full rounded-xl shadow shadow-white" src="./img/whatsf2.jpg" alt="" />
            </a> 
            <a className="h-full hover:scale-95" href="https://linkedin.com/in/simn-sanchez/"
              target="blank">
              <img className="h-full rounded-xl shadow shadow-white" src="./img/linkedin2.jpg" alt="" />
            </a> 
                </div>
          </div>

        </div>

        <div className='md:mt-0 flex flex-col pt-5 items-center '>
          <h3 className='text-xl font-bold mb-4 text-white'>Datos de contacto</h3>
         
          <a className='mb-3 text-white' href='mailto:sgstumm@gmail.com'>✉ sgstumm@gmail.com</a>
          <p
          className='text-[#165359] font-bold text-xl pt-5'
          >Simón Sánchez</p>
        </div>

      </div>

      <div className="w-5/6 h-1 border-solid border-t-2 border-[#165359] p-0 mt-8 md:mt-5"></div>

      <div className=' flex justify-around items-center m-0 p-0'>
        <p className='p-2 text-white'>Copyright © 2024</p>
        
        <p className='p-2 text-white'>Coded by <a className='font-bold text-lime-500' href="https://portfolio-simv3.netlify.app/" target='_blank'>Simn</a> </p>
      </div>
    </div>
  )
}

export default Footer