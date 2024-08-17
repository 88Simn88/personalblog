import AudioConverter from "../components/AudioConverter"

const Recursos = () => {

    return (
        <div
        className="h-screen bg-[url('../img/audioeditor.jpeg')]"
        >
            <div
            className="bg-gradient-to-r from-[#000000ee] to- h-screen "
            >

        <h1
        className="pt-24 pl-10 pb-5 text-white font-bold text-xl"
        >Convertidor de audio</h1>
        <p 
        className="mb-5 md:pl-10 pl-5 text-white"
        >Convierte archivos (.wav,.ogg,.aac,.flac,.m4a) a Mp3 <br />
        </p>
        <p
        className="mb-5 pl-10 pr-10 text-white "
        >
        1- Haz click en el botón de abajo <br /> 
        2- Selecciona el bitrate del archivo mp3 <br/>
        3- Carga tu archivo <br />
        4- Puedes escucharlo o descargarlo desde el link</p>
        <AudioConverter />
        </div>
            </div>
    )
}

export default Recursos