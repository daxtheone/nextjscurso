import React from 'react'
import Link from 'next/link'

export default class ListAudioClips extends React.Component {
    render () {
        const { clip } = this.props
        console.log( this.props)
        return <div className='item'>
            <img src={ clip.urls.image } alt='' />
            <Link href={`/podcast/${clip.id}`} key={clip.id}>
            <a>
                { clip.title }
            </a>
            </Link>
            <style jsx>{`
                .item{
                    display: block;
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                    margin-bottom: 0.5em;
                }
                .item img {
                    width: 100%;
                }
            `}</style>
        </div>
        
    }
}
