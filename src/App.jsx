import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import AboutFinvest from "./components/AboutFinvest";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import GoogleFormEmbed from './components/GoogleForm';

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<><Hero /> <About/> <Features/></>} />
          <Route path="/book-now" element={<GoogleFormEmbed />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about" element={<AboutFinvest />} />
          <Route path="/event" element={<Events />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
