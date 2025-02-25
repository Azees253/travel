import Navbar from "../Navbar";

export default function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30%",
        }}
      >
        <h1>About</h1>
      </div>
    </>
  );
}
