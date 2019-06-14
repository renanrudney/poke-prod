import React, { Component } from "react";
import "./App.css";
import logo from "./pb.png";
import ListPokemon from "./components/ListPokemon";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="" />
          <h1 className="App-title">PokeProd!</h1>
        </header>
        <ListPokemon />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
