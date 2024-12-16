import { useState } from 'react'
import './App.css'

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const connect = () => {
    fetch("localhost:3000",{
      method: "POST",
      body: JSON.stringify({
        email: email,
        password:password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <>
      <div className="form">
        <div className="form-group">
          <label htmlFor="email">Identifiant (email)</label>
          <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <button className="connect" onClick={connect}>Connexion</button>
        </div>
      </div>
    </>
  )
}

export default App;