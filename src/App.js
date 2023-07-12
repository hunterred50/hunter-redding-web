import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import WorkSites from './components/WorkSites';
import PersonalSites from './components/PersonalSites';
import CMSSites from './components/CMSSites';
import GraphicIllustration from './components/GraphicIllustration';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home - profile pic, social icons, main page links, about section */}
        <Route exact path='/' element={<Home/>}/>
        {/* Work Sites - links to professional websites */}
        <Route exact path='/work-sites' element={<WorkSites/>}/>
        {/* CMS Sites - links to CMS developed websites */}
        <Route exact path='/cms-sites' element={<CMSSites/>}/>
        {/* Personal Sites - links to personal websites */}
        <Route exact path='/personal-sites' element={<PersonalSites/>}/>
        {/* Graphic/Illustration - links to graphic/illustration projects */}
        <Route exact path='/graphics-illustration' element={<GraphicIllustration/>}/>
      </Routes>
    </div>
  );
}

export default App;