import { useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1, text: "Hello world"
    },
    {
      id: 2, text: "Olá mundo"
    },
    {
      id: 3, text: "Hi, my friends"
    },
    {
      id: 4, text: "Olá, meus amigos"
    },
  ])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          id="link"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {messages.map(item => {
            return (<li id={item.id}>{item.text}</li>)
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
