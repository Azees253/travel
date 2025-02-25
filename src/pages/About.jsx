import Heros from "../Heros";
import Navbar from "../Navbar";
import AboutImg from "../assets/2.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      <Heros
        cName="abouthero"
        hederImg={AboutImg}
        title="About"
        btnClass="hide"
      />
    </>
  );
}
