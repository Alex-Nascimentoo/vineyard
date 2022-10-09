import './styles/css/app.css'

import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router'

import Home from './pages/Home';
import Wine from './pages/Wine'
import Story from './pages/Story';

function App({ children }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/wines' exact element={<Wine />} />
        <Route path='/story' exact element={<Story />} />
      </Routes>
    </BrowserRouter>
    
    // <main>
    //   { children }
    // </main>
  );
}

export default App;
