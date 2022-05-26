import logo from "./logo.svg";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold underline">Hello Zeylda</p>
      </header>
    </div>
  );
};

export default App;
