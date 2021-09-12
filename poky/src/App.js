
import './App.css';
import Carousel from './Components/LandingPage/Carousel';
import Header from './Components/LandingPage/Header';
import About from './Components/LandingPage/About';
import GlimpseofPoke from './Components/LandingPage/GlimpseOfPoke';
import Mission from './Components/LandingPage/Mission';
import Footer from "./Components/LandingPage/Footer"

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <GlimpseofPoke />
      <Mission />
      <Footer />
    </div>

  );
}

export default App;
