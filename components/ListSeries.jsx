import React from 'react'

export default class ListSeries extends React.Component {
    render () {
        const { serie } = this.props
        return <div key={serie.id}>{ serie.title }</div>
        
    }
}
