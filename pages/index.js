import React from "react";

export default class extends React.Component {
    static async getServerSideProps() {
        let req = await fetch('https://api.audioboom.com/channels/recommended')

        
        let { body: channels } = await req.json()
        return { channels }
    }

    render () {
        return (
            <>
            <header>Podcast</header>
            <style jsx>{`
                header {
                    color: #fff;
                    background: #8756ca;
                    padding: 15px;
                    text-align: center;
                }
            `}</style>
            <style jsx global>{`
                body {
                    margin: 1;
                    font-family: system-ui;
                    background: white;
                }   
            `}</style>
            </>
        )
        
    }
}