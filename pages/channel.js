import React from 'react'
import ListAudioClips from '../components/ListAudioClips'
import ListSeries from '../components/ListSeries'

function channel({ channel, audioClips, series }) {
  console.log(channel)
  return (
    <>
      <Layout title={`Canal ${channel.title}`}></Layout>
      <h1>{channel.title}</h1>
      <h2>Últimos podcasts</h2>
      { audioClips.map((clip)=>{
        <ListAudioClips clip={clip} />
      }) }
      <h2>Series</h2>
       { series.map((serie)=>{
         <ListSeries serie={serie} />
      }) }
      <style jsx>{`
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

export async function getServerSideProps( { query }) {

  const channelId = query.id

  let [reqChannel, reqSeries, reqAudios] = await Promise.all([
    fetch(`https://api.audioboom.com/channels/${channelId}`),
    fetch(`https://api.audioboom.com/channels/${channelId}/child_channels`),
    fetch(`https://api.audioboom.com/channels/${channelId}/audio_clips`)
  ])

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

  return { props: { channel, audioClips, series } };
}
export default channel
