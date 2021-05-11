import React from 'react'
import 'isomorphic-fetch';
import Link from 'next/link'

function podcast({ audio }){
    const urlImage = (audio &&  audio.urls && audio.urls.post_image && audio.urls.post_image.original )? audio.urls.post_image.original : null
    
    return (
        <>
            <Link href='/'><a>Volver</a></Link>
            <h1>{audio.title}</h1>
            <img className='logo' src={urlImage} />
            <div className='description'><h2>{audio.description}</h2></div>
            <audio src={audio.urls.high_mp3} preload='none' controls></audio>
            <style jsx>{`
                h1 {
                    font-weight: 600;
                    padding: 15px;
                    text-align: center;
                    color: white;
                }
                .description {
                    display: block;
                    margin: auto;
                    max-width: 800px;
                    text-align: justify;
                }
                .logo {
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                    max-width: 400px;
                    display: block;
                    margin: auto;
                    width: 100%;
                    height: auto;
                }
                audio {
                    width: 80%;
                    display: block;
                    margin: auto;

                }
            `}
            </style>
            <style jsx global>{`
                body {
                    margin: 1;
                    font-family: system-ui;
                    background: purple;
                }
            `}
            </style>
        </>
    )
}


export async function getServerSideProps({ query }){
   const audio_clips = query.id
   const reqAudio = await fetch(`https://api.audioboom.com/audio_clips/${audio_clips}.mp3`)
   const dataAudio = await reqAudio.json()
   const audio = dataAudio.body.audio_clip
   return { props: { audio }}
}

export default podcast 
