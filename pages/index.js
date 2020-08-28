import Head from 'next/head'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'
import StartNow from '../components/StartNow'
import Navbar from '../components/Navbar'
import logo from '../public/images/aragon-logo.svg'
const Home = () => {
  return (
    <>
      <Head>
        <title>Aragon China</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href={logo}   rel="icon"/>
      </Head>
      <div className="container">
        <Navbar />
        <MainSection />
        <StartNow />
        <Footer />
      </div>
    </>
  )
}

export default Home
