import './App.css'
import FoodContainer from './components/MainContainer'
import Login from './components/Login'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [user, setUser] = useState(false);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
     r.json().then((user) => setUser(user))
      }
      })}, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <FoodContainer user={user} setUser={setUser} />
    </div>
  );
}

export default App;