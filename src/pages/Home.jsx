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
                    <Link to="/pianista" className="bg-blue-600 mb-5 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                        Pianista
                    </Link>
                    <Link to="/compositor" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                        Compositor
                    </Link>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900  py-20 px-4 md:px-20 text-center text-white">


                <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Sobre Mí</h2>
                <div className="w-20 h-1 bg-white mx-auto mb-8"></div> {/* Línea divisoria */}
                <p className="text-lg md:text-xl mb-6 italic">Soy Simón, un pianista y compositor con una pasión profunda por la música...</p>
                <div className="flex flex-col md:flex-row ">

                    <div className="flex md:flex-col flex-row items-center gap-5 m-auto w-2/3 mt-5 mb-10 justify-center md:gap-32">
                        <img src="../img/simonfr1.jpg" alt="Simón" className="rounded-full shadow shadow-white  md:w-2/5 w-1/2 " />
                        <img src="../img/pianof.png" alt="Simón" className="rounded-full shadow shadow-white  md:w-2/5 w-1/2 " />
                    </div>

                    <div className="text-left md:w-1/2 text-lg leading-relaxed">
                        <p className="mb-4">
                           ■ Profesor de piano egresado del conservatorio de música de Morón Alberto Ginastera en el año 2012,
                            luego de haber estudiado con los maestros Gabriel Goldenberg y Marcos Puente Olivera.
                            Se formó en la carrera de composición musical con los maestros, Marcelo di Matthaeis,
                            Claudio Schulkin, Jorge Sad y Eduardo Gramegna.
                        </p>
                        <p className="mb-4">
                        ■ En el año 2008 es becado por el fondo nacional de las artes para escribir el libro
                            “Introducción a la obra y al pensamiento de Juan Carlos Paz” y grabar el cd
                            Introducción a la obra pianística de Juan Carlos Paz.
                        </p>
                        <p className="mb-4">
                        ■  En el año 2015 es becado por el fondo nacional de las artes y
                            el centro cultural Kirchner para participar del IV encuentro
                            nacional de improvisación y composición musical.
                        </p>
                        <p className="mb-4">
                        ■   Como Compositor: Se han estrenado obras suyas en Argentina y en Alemania,
                            para conjuntos vocales e instrumentales. En Julio 2017 estrena
                            su primera ópera (Vulgarcita).
                        </p>
                        <p className="mb-4">
                        ■   Como pianista, director y/o preparador musical: Ópera Dido y Eneas de
                            H. Purcell (de Abril a Junio 2017) Teatro Marienheim y Colonial.
                            Ópera Vulgarcita de S. Sánchez(Julio 2017) Teatro Marienheim,
                            Ópera Gianni Scchichi de G. Puccini (Septiembre-Octubre 2017) ,
                            Ópera El Empresario de W.A. Mozart (Octubre2017) Teatro Hasta Trilce y
                            Ópera Suor Angélica de G. Puccini (Julio 2018) en La Botica del ángel,
                            (Noviembre 2023) Foyer del teatro Empire.
                        </p>
                        <p className="mb-4">
                        ■   También ha ofrecido conciertos como pianista y organista en Obernhof, Lahnstein, Dausenau (2018), Giessen, Nassau y Frankfurt (2019) en Alemania.
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home;
