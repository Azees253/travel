import Footer from "../Footer";
import Heros from "../Heros";
import Navbar from "../Navbar";
import Recent from "../Recent";
import Trip from "../Trip";
import img1 from "../assets/1.jpg";
import Destination from "./Destination";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heros
        cName="hero"
        hederImg={img1}
        title="Your Journey Your Store"
        text="Choose Your Favourite Destinations"
        button="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Recent />
      <Footer />
    </>
  );
}
