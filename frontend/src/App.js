import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and Components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import NewProject from './pages/NewProject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/newProject' element={<NewProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
