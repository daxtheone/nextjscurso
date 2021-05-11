import React from "react"
import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import Error from 'next/error'

function index({channels, statusCode}) {  
    if ( statusCode !== 200 ){
        return <Error statusCode={statusCode} /> 
    }
    return (
        <>
        <Layout title='App de Podcasts de platzi'>
            <ChannelGrid channels = { channels } />
        </Layout>
        </>
    )
}

export async function getServerSideProps({ res }) {
    try {
        const req = await fetch('https://api.audioboom.com/channels/recommended')
        const { body: channels } = await req.json()
        return { props: { channels, statusCode : 200 } }
    } catch (e) {
        res.statusCode = 503
        return { props: { channels: null, statusCode: 503 } }
    }
    
}
export default index
