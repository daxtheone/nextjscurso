import React from 'react'
import Layout from '../../components/Layout'
import ListAudioClips from '../../components/ListAudioClips'
import ListSeries from '../../components/ListSeries'
import Error from './../_error'

function channel({ channel, audioClips, series, statusCode }) {
  if ( statusCode !== 200 ){
    return <Error statusCode={statusCode} /> 
  }
  return (
    <>
      <Layout title={`Canal ${channel.title}`}></Layout>
      <h1>{channel.title}</h1>
      <h2>Últimos podcasts</h2>
      <div className='contenedor'>
        { 
          audioClips.map((clip)=>{
            return <ListAudioClips clip={clip} />
          }) 
        }

      </div>
      
      <h2>Series</h2>
       { series.map((serie)=>{
         return <ListSeries serie={serie} />
      }) }
      <style jsx>{`
        .contenedor{
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
        h1 {
          font-weight: 600;
          padding: 15px;
        }
        h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-aling: center;
        }
    `}</style>
    </>
  )
}

export async function getServerSideProps( { query, res }) {

  const channelId = query.id
  try {
    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${channelId}`),
      fetch(`https://api.audioboom.com/channels/${channelId}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${channelId}/audio_clips`)
    ])
    if ( reqChannel.status >= 404 ) {
      res.statusCode = reqChannel.status
      return { props: { channel: null, audioClips: null, series: null, statusCode: reqChannel.status } }
    }

    const dataChannel = await reqChannel.json()
    const channel = dataChannel.body.channel 
  
    const dataAudios = await reqAudios.json()
    const audioClips = dataAudios.body.audio_clips  
  
    const dataSeries = await reqSeries.json()
    const series = dataSeries.body.channels
    
    /*
    const reqChannel = await fetch(`https://api.audioboom.com/channels/${channelId}`)
    const dataChannel = await reqChannel.json()
    const channel = dataChannel.body.channel 
  
    const reqAudios = await fetch(`https://api.audioboom.com/channels/${channelId}/audio_clips`)
    const dataAudios = await reqAudios.json()
    const audioClips = dataAudios.body.audio_clips  
  
    const reqSeries = await fetch(`https://api.audioboom.com/channels/${channelId}/child_channels`)
    const dataSeries = await reqSeries.json()
    const series = dataSeries.body.channels  
  
    */
  
    return { props: { channel, audioClips, series, statusCode: 200 } };
  } catch (e) {
    res.statusCode = 503
    return { props: { channel: null, audioClips: null, series: null, statusCode: 503 } }
  }


}
export default channel
