import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hyperlink+Connections!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to HYPERLINK CONNECTIONS!" />       
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p><h1>Hyperlink Best Connections</h></p>
      </main>

      <Footer />
    </div>
  )
}
