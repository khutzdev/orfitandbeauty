import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Services from "../components/Services";
import OnlineConsult from "../components/OnlineConsult";
import Specialist from "../components/Specialist";
import Products from "../components/Products";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <OnlineConsult />
      <Specialist />
      <Products />
      <WhyUs />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
