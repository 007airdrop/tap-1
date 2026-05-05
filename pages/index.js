export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Press to Play 🎮</h1>
      <button onClick={() => alert("Game started 🚀")}>
        PRESS
      </button>
    </div>
  );
}
