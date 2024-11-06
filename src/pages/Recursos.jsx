import AudioConverter from "../components/AudioConverter"
import GuitarTuner from "../components/GuitarTuner"

const Recursos = () => {

    
    return (
        <div
            className="h-[130vh] md:pt-14 md:h-[580px] bg-gradient-to-b from-[#000000] via-[#165359] to-[#000000] flex md:flex-row flex-col md:justify-around items-center "
        >
            <div
                className="flex flex-col h-[80vh] md:h-[580px] items-start md:w-1/2 w-full p-1 md:px-10"
            >

                <h1
                    className="pt-24 pl-10 pb-5 text-white font-bold text-2xl"
                >Convertidor de audio</h1>
                <p
                    className="mb-5 md:pl-10 pl-5 text-white"
                >Convierte archivos (.wav,.ogg,.aac,.flac,.m4a) <br /> a Mp3
                </p>
                <p
                    className="mb-5 pl-10 pr-10 text-white "
                >
                    1- Haz click en el botón de abajo <br />
                    2- Selecciona el bitrate del archivo mp3 <br />
                    3- Carga tu archivo <br />
                    4- Puedes escucharlo o descargarlo desde el link</p>
                <AudioConverter />
            </div>
            <div className="h-[50vh] md:h-[580px] pt-20"
            >
                <GuitarTuner />
            </div>
        </div>
    )
}

export default Recursos