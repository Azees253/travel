import Navbar from "../Navbar";

export default function Service() {
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
        <h1>Services</h1>
      </div>
    </>
  );
}
