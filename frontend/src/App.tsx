import { Routes, Route, NavLink } from 'react-router-dom';

import NavBar from './components/NavBar.tsx';
import Items from './components/Items.tsx';
import Login from './components/Login.tsx';

import './App.css';

class User_Session {
  constructor(inv='global', loggedIn=false) {
    this.inv = inv;
    this.loggedIn = loggedIn;
  }
}

function App() {
  const current_user = new User_Session();

  return (
    current_user.loggedIn ? (
      <>
        <header>
          <NavBar user={null} />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<h2>Welcome to Inv-Manager</h2>} />
            <Route path="/items/:option" element={<Items />} />
          </Routes>
        </main>
      </>
    ) : (
      <>
        <header>
          <NavLink to={'/'}><h1 className="logo btn login-logo">Inv-Manager</h1></NavLink>
        </header>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/items/all" element={<Items />} />
        </Routes>
      </>
    )
  )
}

export default App
