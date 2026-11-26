import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.tsx';
import Items from './components/Items.tsx';

import './App.css';


function App() {

  return (
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
  )
}

export default App
