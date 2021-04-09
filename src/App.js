import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1 className="text-center">Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        <small>Coded by <a href="https://www.linkedin.com/in/erin-buchanan-lmsw-ba2a2b160/" target="_blank" rel="noreferrer">Erin Buchanan</a></small>
      </footer>
      </div>
    </div>
  );
}

export default App;
