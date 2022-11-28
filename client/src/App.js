import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and Components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import NewProject from './pages/NewProject';
import Workspace from './pages/Workspace';
import Timer from './pages/Timer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/newProject' element={<NewProject />} />
          <Route path='/workspace' element={<Workspace />} />
          <Route path='/timer' element={<Timer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
