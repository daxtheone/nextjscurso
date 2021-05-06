import React from 'react'
import Link from 'next/link'

export default class ListAudioClips extends React.Component {
    render () {
        const { clip } = this.props
        return <div>
            <Link href={`/podcast?id=${clip.id}`} key={clip.id}>
            <a>
                { clip.title }
            </a>
            </Link>
        </div>
        
    }
}
