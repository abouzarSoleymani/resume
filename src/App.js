import React from 'react';
import './App.css';
import TitleSection from './sections/TitleSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';

function App() {
  return (
    <div className="App">
      <div className="navigation">
      </div>
      <TitleSection/>
      <AboutSection/>
      <SkillsSection/>
    </div>
  );
}

export default App;
   