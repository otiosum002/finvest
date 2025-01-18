import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import AboutFinvest from "./components/AboutFinvest";
import BookNow from "./components/BookNow";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact"

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero id="home" />
      <Sponsors id="sponsors" />
      <BookNow id="book-now" />
      <About id="about" />
      <Features id="features" />
      <AboutFinvest id="about-finvest" />
      <Events id="events" />
      <Contact />
      <Footer id="footer" />
    </main>
  );
}

export default App;