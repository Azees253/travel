import "./styles/Herostyles.css";

export default function Heros(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HerImg" src={props.hederImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {" "}
            {props.button}
          </a>
        </div>
      </div>
    </>
  );
}
