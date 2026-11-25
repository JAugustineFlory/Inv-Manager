import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.tsx';
import Items from './components/Items.tsx';

import './App.css';


function App() {

  return (
    <>
      <header>
        <NavBar user={'james'} />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<p>Welcome to Inv-Manager</p>} />
          <Route path="/items/:option" element={<Items />} />
        </Routes>
      </main>
    </>
  )
}

export default App
