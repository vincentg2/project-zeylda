import "./App.css";
import logo from "./logo.svg";
const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-4xl font-bold underline  bg-sky-700 hover:bg-sky-400 p-6 hover:cursor-pointer transition duration-700 ease-in hover:ease-out rounded-lg select-none">
          Hello Zeylda
        </p>
      </header>
    </div>
  );
};

export default App;
