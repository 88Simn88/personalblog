import React, { useEffect, useState } from "react";
import PitchFinder from "pitchfinder";

const tuningFrequencies = {
    guitarra: {
        E6: 82,
        A: 110,
        D: 147,
        G: 196,
        B: 247,
        E1: 329.628,
    },
    ukelele: {
        G: 196,
        C: 261.63,
        E: 329.628,
        A: 440,
    },
    charango: {
        G4: 391.995,
        C5: 523.251,
        E5:  659.255,
        A4: 440,
        E4: 329.628,
    },
    ronroco: {
        D4: 293.665,
        G4: 391.995,
        B4: 493.883,
        E4: 329.628,
        B3: 246.942,
    },
};


function TuningIndicator({ frequency, targets }) {
    const { message, color } = getTuningStatus(frequency, targets);
    
    return (
        <p style={{ color: color }}>
            {message}
        </p>
    );
}

function getTuningStatus(frequency, targets) {
    for (const [string, targetFreq] of Object.entries(targets)) {
        if (Math.abs(frequency - targetFreq) < 1) {
            return { message: `Cuerda ${string} está afinada!`, color: "green"};
        } else if (frequency < targetFreq && frequency >= targetFreq - 10)  {
            return {message:`Cuerda ${string}: Sube el tono`, color: "blue"};
        } else if (frequency > targetFreq && frequency <= targetFreq + 10)  {
            return { message: `Cuerda ${string}: Baja el tono`, color: "red"};
        }
    }
    return {message: "Cuerda no identificada", color: "gray"};
}

const GuitarTuner = () =>  {
    const [frequency, setFrequency] = useState(null);
    const [instrument, setInstrument] = useState("guitarra"); // Instrumento seleccionado
    const [targetFrequencies, setTargetFrequencies] = useState(tuningFrequencies[instrument]);


    useEffect(() => {
        // Cambia las frecuencias objetivo cada vez que se selecciona un nuevo instrumento
        setTargetFrequencies(tuningFrequencies[instrument]);
    }, [instrument]);

    useEffect(() => {
        const getMicrophoneAccess = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 8192;

                const microphone = audioContext.createMediaStreamSource(stream);
               //Filtro de paso alto (highpass) para bloquear frecuencias por debajo de 70 hz
                const highpassFilter = audioContext.createBiquadFilter();
                highpassFilter.type = 'highpass';
                highpassFilter.frequency.setValueAtTime(70, audioContext.currentTime);
                
                //Filtro de paso bajo (lowpass) para bloquear frecuencias por encima de 70 hz
                const lowpassFilter = audioContext.createBiquadFilter()
                lowpassFilter.type = "lowpass"
                lowpassFilter.frequency.setValueAtTime(700, audioContext.currentTime)

                microphone.connect(highpassFilter);
                highpassFilter.connect(lowpassFilter);
                lowpassFilter.connect(analyser) //conectamos el analyser

                const detectPitch = PitchFinder.YIN({ sampleRate: audioContext.sampleRate });
                const buffer = new Float32Array(analyser.fftSize);
                let frequencySamples = [];

                const analyze = () => {
                    analyser.getFloatTimeDomainData(buffer);
                    const pitch = detectPitch(buffer);

                    if (pitch && pitch >= 70 && pitch <= 700) {
                        frequencySamples.push(pitch);
                        if (frequencySamples.length > 5) {
                            const averageFrequency = frequencySamples.reduce((sum, f) => sum + f, 0) / frequencySamples.length;
                            setFrequency(averageFrequency);
                            frequencySamples.shift();
                        }
                    }
                    requestAnimationFrame(analyze);
                };

                analyze();
            } catch (err) {
                console.error("Error accessing the microphone", err);
            }
        };

        getMicrophoneAccess();
    }, []);

    return (
        <div className="h-[200px]">
            {/* <img src="../img/Tutuca1.jpeg" alt="" /> */}
            <h1
            className=" pb-5 text-white font-bold text-2xl pt-3"
            >Afinador de Instrumentos</h1>

            <label
            className="text-white"
            htmlFor="instrument-select">Selecciona un instrumento:</label>
            <select
                className="p-1"
                id="instrument-select"
                value={instrument}
                onChange={(e) => setInstrument(e.target.value)}
            >
                <option value="guitarra">Guitarra</option>
                <option value="ukelele">Ukelele</option>
                <option value="charango">Charango</option>
                <option value="ronroco">Ronroco</option>
            </select>

            <p
            className="text-white p-3"
            >Frecuencia detectada: {frequency ? `${frequency.toFixed(2)} Hz` : 'No detectada'}</p>
            <p
            className="text-white p-3"
            >{frequency && <TuningIndicator frequency={frequency} targets={targetFrequencies} />}</p>
            <button 
            className="bg-gradient-to-r from-[#00000088] 
             via-[#165359] to-[#00000088] p-3 text-white rounded
            ml-20"
            onClick={() => window.location.reload()}>Activar Micrófono</button>
        </div>
    );
}


export default GuitarTuner
