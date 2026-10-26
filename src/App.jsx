import Header from './components/Header'
import Hero from './components/Hero'
import Banners from './components/Banners'
import Services from './components/Services'
import Machinery from './components/Machinery'
import Values from './components/Values'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Banners />
        <Services />
        <Machinery />
        <Values />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
