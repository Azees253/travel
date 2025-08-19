import AboutUs from "../AboutUs";
import Footer from "../Footer";
import Heros from "../Heros";
import Navbar from "../Navbar";
import Trip from "../Trip";
import AboutImg from "../assets/2.jpg";

export default function About({ setState }) {
  return (
    <div>
      <Navbar />
      <Heros
        cName="abouthero"
        hederImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  );
}
