import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

function Error({ statusCode }) {
  return (
    <Layout title='Oh no :( '>
      { statusCode === 404 ? 
        <div className='message'>
          <h1> Esta página no existe :( </h1>
          <Link href='/'><a>Volver</a></Link>
        </div>
        :
        <div className='message'>
          <h1> Hubo un problema :( </h1>
          <h1>Intenta nuevamente </h1>
        </div>
      }
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      <style jsx>{`
          .message{
            padding: 100px 30px;
            text-align: center;
          }
          h1 {
            margin-bottom: 2em;
          }
          a {
            color: #8756ca;
          }
      `}
      </style>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error