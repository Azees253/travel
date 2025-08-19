import mountain1 from "/src/assets/m1.jpg";
import mountain2 from "/src/assets/m2.jpg";
import "/src/styles/Destination.css";

export default function DesinationData(props) {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="images">
        <img alt="img" src={props.img1} />
        <img alt="img" src={props.img2} />
      </div>
    </div>
  );
}
