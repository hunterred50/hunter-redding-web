import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import WorkSites from './components/WorkSites';
import PersonalSites from './components/PersonalSites';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home - profile pic, social icons, main page links, about section */}
        <Route exact path='/' element={<Home/>}/>
        {/* Work Sites - links to professional websites */}
        <Route exact path='/work-sites' element={<WorkSites/>}/>
        {/* Personal Sites - links to personal websites */}
        <Route exact path='/personal-sites' element={<PersonalSites/>}/>
      </Routes>
    </div>
  );
}

export default App;