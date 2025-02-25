import Heros from "../Heros";
import Navbar from "../Navbar";
import img1 from "../assets/1.jpg";

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
    </>
  );
}
