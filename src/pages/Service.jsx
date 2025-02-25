import Heros from "../Heros";
import Navbar from "../Navbar";
import ServiceImg from "../assets/3.jpg";

export default function Service() {
  return (
    <>
      <Navbar />
      <Heros
        cName="abouthero"
        hederImg={ServiceImg}
        title="service"
        btnClass="hide"
      />
    </>
  );
}
