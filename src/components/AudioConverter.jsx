import React, { useState, useRef, } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

function AudioConverter() {
    const [loaded, setLoaded] = useState(false);
    const [outputUrl, setOutputUrl] = useState(null);
    const [bitrate, setBitrate] = useState('192k'); // Default bitrate
    const ffmpegRef = useRef(new FFmpeg());
    const audioRef = useRef(null);
    const messageRef = useRef(null);

    const load = async () => {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
        const ffmpeg = ffmpegRef.current;
        ffmpeg.on('log', ({ message }) => {
            messageRef.current.innerHTML = message;
            console.log(message);
        });
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });
        setLoaded(true);
    };

    const transcode = async (file) => {
        const ffmpeg = ffmpegRef.current;
        const inputFilename = `input.${file.name.split('.').pop()}`;
        await ffmpeg.writeFile(inputFilename, await fetchFile(file));
        await ffmpeg.exec(['-i', inputFilename, '-b:a', bitrate, 'output.mp3']); // Set the bitrate
        const data = await ffmpeg.readFile('output.mp3');
        const url = URL.createObjectURL(new Blob([data.buffer], { type: 'audio/mp3' }));
        setOutputUrl(url);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            transcode(file);
        }
    };

   
    return (loaded
        ? (
            <div 
            className="pb-10 h-auto"
            >
                <input
                 className="bg-gradient-to-r from-[#00000088] 
             via-blue-900 to-[#00000088] md:ml-10 md:p-5 pt-5 pb-5 p-1  rounded text-white
             " 
                 type="file" accept=".wav,.ogg,.aac,.flac,.m4a,.mp3" onChange={handleFileChange} />
                <div className='ml-10 p-5'>
                    <label 
                    className='text-white pr-5'
                    >Bitrate:</label>
                    <select 
                    className='rounded p-1 pl-3 pr-3'
                    value={bitrate} onChange={(e) => setBitrate(e.target.value)}>
                        <option value="128k">128 kbps</option>
                        <option value="192k">192 kbps</option>
                        <option value="256k">256 kbps</option>
                        <option value="320k">320 kbps</option>
                    </select>
                </div>
                {outputUrl && (
                    <div className="ml-10">
                        <audio controls src={outputUrl} ref={audioRef}></audio>
                        <br />
                        <a 
                        className='download_link'
                        href={outputUrl} download="output.mp3">Descargar MP3</a>
                    </div>
                )}
                <p className='ml-10 text-white' ref={messageRef}></p>
                <p className='ml-10 text-white'>Open Developer Tools (Ctrl+Shift+I) to View Logs</p>
            </div>
        )
        : (
            <button
            className='bg-gradient-to-r from-[#00000088] 
             via-blue-900 to-[#00000088] p-3 text-white rounded
            ml-10'
            onClick={load}>Load ffmpeg-core (~31 MB)</button>
        )
    );
}

export default AudioConverter;
