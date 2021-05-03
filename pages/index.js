import React from "react"
import 'isomorphic-fetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

function index({channels}) {  
        return (
            <>
            <Layout title='App de Podcasts de platzi'>
                <ChannelGrid channels = { channels } />
            </Layout>
            </>
        )
}

export async function getServerSideProps() {
    const req = await fetch('https://api.audioboom.com/channels/recommended')
    const { body: channels } = await req.json()
    return { props: { channels } };
}
export default index
