import Additional from "./components/Additional"
import { CarouselDemo } from "./components/Carousel"
import Hero from "./components/Hero"
import MaxWidthWrapper from "./components/MaxWidthWrapper"
import Overview from "./components/Overview"
import Services from "./components/Services"



function App() {
  return (
    <MaxWidthWrapper >
      <Hero/>
      <CarouselDemo/>
      <Overview/>
      <Services/>
      <Additional/>
    </MaxWidthWrapper>
  )
}

export default App
