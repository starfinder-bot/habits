import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <input className="input" placeholder="Walk 10k steps..." />
        <button className="input-button">Add</button>
      </header>

      <div>
        <h2 className="list-heading">History: </h2>
        <div className="list-item">
          <p>Wake up before 6am</p>
          <div>
            <button className="list-button">-</button>
            <span>0</span>
            <button className="list-button">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
