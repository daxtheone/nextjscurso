import React from 'react'

export default class extends React.Component {
    render () {
        return (
            <>
                <img src="/dax.gif" alt="Logo DAX" />
                <div>
                    <h1>Creado por YO</h1>
                    <h2>Curso de Nextjs de Platzi</h2>
                </div>
                <style jsx>{`
                    img {
                        max-width: 30%;
                        display: block;
                        margin: 0 auto;
                    }
                    div h1, div h2 {
                        text-align:center
                    }
                `}</style>
            </>
        )
    }
}