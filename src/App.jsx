import Hero from './components/Hero'
import Platform from './components/Platform'
import Features from './components/Features'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'
import ScrollAnimation from './components/ScrollAnimation'

function App() {
  return (
    <ParallaxProvider>
      <main className="overflow-hidden">
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>
        <Platform />
        <Features />
        <Faq />
        <Cta />
        <ScrollAnimation>
          <Footer />
        </ScrollAnimation>
      </main>
    </ParallaxProvider>
  )
}

export default App 