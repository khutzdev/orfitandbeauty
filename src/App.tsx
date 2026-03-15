import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Procedures from "./components/Procedures";
import Brands from "./components/Brands";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Procedures />
        <Brands />
        <About />
        <Products />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
