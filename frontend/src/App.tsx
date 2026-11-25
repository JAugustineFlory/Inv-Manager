import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.tsx';

import './App.css';


function App() {

  return (
    <body>
      <header>
        <NavBar user={null} />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<p>Welcome to Inv-Manager</p>} />
          <Route path="/items/all" element={<p>All Items</p>} />
          <Route path="/items/:userName" element={<p>My Items</p>} />
          <Route path="/AllItemsGlobal" element={<p>All Items Globally</p>} />
        </Routes>
      </main>
    </body>
  )
}

export default App
