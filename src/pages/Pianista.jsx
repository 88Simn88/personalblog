
import media from "../assets/index.js"
import "./pianista.css"



const Pianista = () => {

    

    return (
        <div className="bg-black ">

            <div className="banner  h-screen w-full md:bg-[url('../img/pianosalac.jpeg')] bg-[url('../img/pianosalacel.jpg')] md:bg-center bg-cover relative ">
               
                <div className="banner_ovelay absolute w-full h-full bg-[#00000099] z-1"></div>
                <h1
                className="absolute pt-[70px] text-white font-bold text-2xl md:top-[50px] top-[70px] left-[75px]"
                >Pianista</h1>
                <div className="h-50 mt-[70px] absolute md:top-[150px] top-[220px] p-5 pl-10 pr-10   bg-gradient-to-r from-[#00000000] via-black to-[#00000000]">
                    <p className="text-white md:text-2xl md:ml-10 font-serif">
                        El piano fue la puerta de entrada a este bello mundo
                        que es la música...
                        <br />
                        Aquí podrán encontrar composiciones e improvisaciones <br />
                        que he hecho y están en mi canal de Youtube, <br />
                        así como de algunos conciertos que he realizado. 
                        </p>
                
                </div>
                


            </div>

            <div className="gallery_container w-full ">

                <div className="gallery_media_container w-full md:p-10 pt-10 pb-10 bg-gradient-to-b from-[#000000] via-blue-500 to-[#000000]">
                    {
                        media.map((file, index) => (
                           /*  <div className="media" key={index}
                                onClick={() => setFile(file)}> */
                                
                                   /*  file?.type === 'image'
                                        ? <img src={file.url} alt="" /> */
                                         <iframe key={index} width="300" height="215" src={`${file.url}#t=0.001`}
                                            className="rounded-2xl m-auto shadow shadow-white"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin"
                                            allowfullscreen ></iframe>
                                
                           /*  </div> */
                        ))
                    }
                </div>

           
            </div>

        </div>

    )
}

export default Pianista