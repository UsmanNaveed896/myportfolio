import Home from './components/portfolio-home/index'
import Sidenav from './components/Portfolio-sidnav/index'
import Aboutme from './components/Aboutme/index'
import Resume from './components/Resume/index'
import Projects from './components/Portfolio/Portfolio'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Sidenav/>
      <Routes>
      <Route path='/' exact  element={<Home/>} />
      <Route path='/aboutme' exact  element={<Aboutme/>} />
      <Route path='/resume' exact  element={<Resume/>} />
      <Route path='/projects' exact  element={<Projects/>} />
      </Routes>
    
    </div>
  );
}

export default App;
