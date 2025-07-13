import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image' // Add this import

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
        <p ClassName="descpription">
          <h1"Hyperlink Best Connections"/>
       </p>
  
       {/* Example: Display your image */}
        <Image
          src="/images/logo.png" // Change to your image file name
          alt="Logo"
          width={200}
          height={200}
        />

        {/* Or using a standard img tag */}
        {/* <img src="/images/logo.png" alt="Logo" width="200" height="200" /> */}
      </main>
      </main>

      <Footer />
    </div>
  )
}
