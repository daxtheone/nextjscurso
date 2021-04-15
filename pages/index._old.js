import React from "react";

export default class extends React.Component {
    render () {
        return (
            <>
            <h1>¡Hola Mundo!</h1>
            <p>Bienvenidos al curso de Next</p>
            <img src="/dax.gif" alt="Logo Dax" />
            <style jsx>{`
                h1 {
                    color: red;
                }
                p {
                    color:green;
                }
                :global(p) {
                    color: yellow;
                }
                img {
                    max-width: 50%;
                    display: block;
                    margin: 0 auto;
                }
            `}</style>
            </>
        )
        
    }
}