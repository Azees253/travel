import Navbar from "../Navbar";

export default function Home() {
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
        <h1>Home</h1>
      </div>
    </>
  );
}
