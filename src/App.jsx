import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Loader,
  Navbar,
  SceneRoot,
  Tech,
  Works,
} from './components';

const App = () => {
  return (
    <div className='relative'>
      <Loader />
      <SceneRoot />
      <Navbar />

      <div className='relative z-10'>
        <main>
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
