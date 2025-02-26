import DesinationData from "./DestnationData";
import mountain1 from "/src/assets/m1.jpg";
import mountain2 from "/src/assets/m2.jpg";
import mountain3 from "/src/assets/m3.jpg";
import mountain4 from "/src/assets/m4.jpg";
import "/src/styles/Destination.css";

export default function Destination() {
  return (
    <>
      <div className="destination">
        <div className="headers">
          <h1>Popular Destination</h1>
          <p>Tour give YOU oppotunity to see a lot within a time frame</p>
        </div>
        <DesinationData
          className="first-das"
          heading="Taal Volcano,Batangas"
          text="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          eius eaque facere, quae sapiente quia dolore autem nostrum! Enim
          consectetur ab unde. Non delectus quisquam beatae mollitia
          voluptatum recusandae! Aperiam fugit ipsam perferendis, cumque
          aliquam ad. Explicabo, magnam blanditiis quaerat alias aut iste
          architecto quia consequuntur! Quisquam modi rem veniam."
          img1={mountain1}
          img2={mountain2}
        />

        <DesinationData
          className="first-das-revers"
          heading="Mountain Advanture"
          text="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          eius eaque facere, quae sapiente quia dolore autem nostrum! Enim
          consectetur ab unde. Non delectus quisquam beatae mollitia
          voluptatum recusandae! Aperiam fugit ipsam perferendis, cumque
          aliquam ad. Explicabo, magnam blanditiis quaerat alias aut iste
          architecto quia consequuntur! Quisquam modi rem veniam."
          img1={mountain3}
          img2={mountain4}
        />
      </div>
    </>
  );
}
