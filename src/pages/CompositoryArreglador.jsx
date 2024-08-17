import media2 from "../assets/index2"


const CompositoryArreglador = () => {
    return (
        <>
        
                <div className="banner h-screen w-full md:bg-fixed md:bg-[url('../img/fondocomp.png')] 
                bg-[url('../img/fondocompcel.jpg')] bg-cover md:bg-center relative ">
                    <div className=" absolute w-full h-full bg-[#00000099] z-1"></div>
                    
                    <h1
                        className="absolute pt-[70px] text-white font-bold text-2xl top-[70px] md:top-[50px] left-[20px] md:left-[75px]"
                    >Compositor y Arreglador</h1>

                    <div className="h-50 mt-[70px] absolute md:top-[150px] top-[220px] md:left-[500px] p-5 pl-10  bg-gradient-to-r from-[#00000000] via-black to-[#00000000]">
                        <p className="text-white md:text-2xl md:ml-10 font-serif">
                            La composición fue un interés que surgió
                            desde los primeros años... <br />
                            Aquí podrán encontrar y descargar algunos arreglos que hice <br />
                            para distintas agrupaciones. <br/>
                            Ojalá los disfruten! 
                            </p>
                     
                    </div>


                </div>
            

           

                <div className="gallery_media_container w-full md:p-10 pt-10 pb-10 bg-gradient-to-b from-[#000000] via-blue-500 to-[#000000]">
                    {
                        media2.map((file, index) => (
                         
                            <a key={index}
                                href={file.url}
                                target="_blank"
                                className="rounded-2xl m-auto  "
                            >
                                <li
                                className=" h-[150px] w-[300px] flex items-center
                                 bg-gradient-to-r from-[#00000088] via-blue-900 to-[#00000088] 
                                 p-5 rounded-xl shadow shadow-white"
                                >

                                <img 
                                className="h-full"
                                src={file.icon} alt="" />
                                <p
                                className="text-white "
                                >{file.name}</p>
                                </li>
                            </a>

                            
                        ))
                    }
                </div>

            
           




        </>
    )
}

export default CompositoryArreglador