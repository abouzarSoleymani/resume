import React from 'react';
import './App.css';
import TitleSection from './sections/TitleSection';
import ExperiencesSection from './sections/ExperiencesSection';
import SkillsSection from './sections/SkillsSection';
import Header from './components/Header';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  return (
    <div className="App">
      <Header/>
      <Element name="title" className="element">
        <TitleSection/>
      </Element>
      <Element name="experiences" className="element">
         <ExperiencesSection/>
      </Element>
      <Element name="skils" className="element">
         <SkillsSection/>
        </Element>
    </div>
  );
}

export default App;
   