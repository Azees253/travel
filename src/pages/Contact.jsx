import Heros from "../Heros";
import Navbar from "../Navbar";
import ContactImg from "../assets/4.jpg";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Heros
        cName="abouthero"
        hederImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}
