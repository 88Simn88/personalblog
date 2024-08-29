import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="banner  h-screen w-full md:bg-fixed bg-cover md:bg-center relative 
                            md:bg-[url('../img/fotmezcla.jpeg')]
                            bg-[url('../img/fotmezclacel.jpg')]">
                <div className="banner_overlay absolute w-full h-full bg-[#000000cc] z-1 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        Bienvenidos a mi espacio creativo
                    </h1>
                    <p className="text-white text-lg md:text-xl mb-6 font-light">
                        Soy Simón, pianista y compositor apasionado por la música que inspira y conecta.
                        <br /> En este sitio, comparto mis composiciones, arreglos, y reflexiones musicales.
                        <br /> Mi objetivo es crear un lugar donde la música se convierta en un puente
                        <br /> hacia la emoción y la creatividad.
                    </p>
                    <Link to="/pianista" className="bg-[#165359] mb-5 hover:bg-[#072126] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                        Pianista
                    </Link>
                    <Link to="/compositor" className="bg-[#165359] hover:bg-[#072126] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                        Compositor
                    </Link>
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#072126] via-[#165359] to-[#072126]  py-20  md:px-0 text-center text-white">


                <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Sobre Mí</h2>
                <div className="w-20 h-1 bg-white mx-auto mb-8"></div> {/* Línea divisoria */}
                <p className="text-lg md:text-xl mb-6 italic px-5">Soy Simón, un pianista y compositor con una pasión profunda por la música...</p>
                <div className="flex flex-col bg-[#E9F1F2] md:w-full ">

                    <div className="flex flex-col md:flex-row items-center gap-5 mt-5 mb-10 justify-center ">
                        <img src="../img/simonfr1.jpg" alt="Simón" className=" shadow shadow-white  md:w-1/4 w-1/2 " />
                        <div className="flex flex-col md:w-3/5  md:ml-20">
                            <h2 className="text-black font-bold md:text-5xl text-4xl pb-8 font-serif">Mis comienzos...</h2>
                            <p className="mb-4 md:pl-20 px-5 text-black text-start">
                                Mis primeros pasos con la música los dí en el coro juvenil de la municipalidad de Morón,<br />
                                junto a la Maestra Patricia Cabdepón, para posteriormente continuarlos en el conservatorio <br />
                                "Alberto Ginastera".
                            </p>
                            <p className="mb-4 md:pl-20 px-5 text-black text-start">
                                En dicha institución me formé como pianista con los maestros Gabriel Goldenberg y <br />
                                Marcos Puente Olivera.
                            </p>
                            <p className="md-4 md:pl-20 px-5 text-black text-start">
                                También me formé en composición musical con los maestros, Marcelo di Matthaeis, <br />
                                Claudio Schulkin, Jorge Sad y Eduardo Gramegna.
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col bg-[#165359] md:flex-row-reverse  items-center gap-5 m-auto  mb-10 justify-center md:gap-32">

                        <img src="../img/pianof.png" alt="Simón" className=" shadow shadow-white  md:w-1/4 w-1/2 " />
                        <div className="flex flex-col">
                            <h2 className=" font-bold md:text-5xl text-4xl pb-8 font-serif">Becas</h2>
                            <p className="mb-4 text-start md:pl-20 px-5">
                                En el año 2008 fui becado por el fondo nacional de las artes, lo cual me llevó
                                a publicar en el año 2010 junto a mi amigo y colega Darío Duarte Nuñez el libro “Introducción a la obra y al pensamiento de Juan Carlos Paz”
                                y a grabar el cd Introducción a la obra pianística de Juan Carlos Paz.
                            </p>

                            <p className="mb-4 text-start md:pl-20 px-5">
                                En el año 2015 fui becado por el fondo nacional de las artes y
                                el centro cultural Kirchner para participar del IV encuentro
                                nacional de improvisación y composición musical.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:h-[200px] items-center gap-5 m-auto w-4/5 md:my-14 justify-center md:gap-32">

                        <img src="../img/fotempre.jpg" alt="empresario"
                            className=" shadow shadow-white  md:w-1/4 w-1/2"
                        />

                        <div>
                            <h2 className=" font-bold md:text-5xl text-4xl text-black pb-8 font-serif">Experiencias musicales...</h2>

                            <p className="mb-4 text-black text-start">
                                Como Compositor he estrenado obras en Argentina y en Alemania,
                                para conjuntos vocales e instrumentales.
                            </p>
                            <p className="mb-4 text-black text-start">
                                En Julio de 2017 estrené
                                mi primera ópera (Vulgarcita), que escribimos junto a mi amigo y colega
                                Walter Castillo.
                            </p>

                            <p className="mb-4 text-black text-start">
                                Como pianista, director y/o preparador musical trabajé en la Ópera Dido y Eneas de
                                H. Purcell presentandola en el Teatro Marienheim y en el teatro Colonial (Año 2017).
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse bg-gradient-to-r from-[#072126] via-[#165359] to-[#072126] items-center gap-5 m-auto  mt-5  justify-center md:gap-32">

                        <img src="../img/pnoinstrcuad.jpeg" alt="fotofinal"
                            className=" shadow shadow-white  md:w-1/4 w-1/2"
                        />
                        <div className="flex flex-col">
                            <h2 className=" font-bold md:text-5xl text-4xl pb-8 font-serif">Y producciones operísticas...</h2>

                            <p className="mb-4 text-start md:pl-20 px-5">
                                Participé en el estreno de la Ópera Vulgarcita de S. Sánchez que se presentó
                                en el Teatro Marienheim(Julio 2017).
                            </p>
                            <p className="mb-4 text-start md:pl-20 px-5">
                                Colaboré en la Ópera Gianni Scchichi de G. Puccini y en la Ópera El Empresario teatral de W.A. Mozart
                                presentando ambas dos en el Teatro Hasta Trilce(2017).
                            </p>
                            <p className="mb-4 text-start md:pl-20 px-5">
                                Estuve involucrado en la Ópera Suor Angélica de G. Puccini presentándola en La Botica del ángel(2018),
                                y en el Foyer del teatro Empire(2023).
                            </p>

                        </div>
                    </div>
                    <div className="w-full bg-gradient-to-r from-[#072126] via-[#165359] to-[#072126] md:pt-5">

                        <p className="md:w-2/3 md:ml-[200px] px-5 text-start" >
                            También he realizado dos giras de conciertos como pianista y organista en Obernhof, Lahnstein, Dausenau (2018), Giessen, Nassau y Frankfurt (2019) en Alemania.
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home;
