import React,{Component} from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data.json';
import './AboutSection.css';

class AboutSection extends Component {
    render(){
        return(
                <Fullpage className="two">
                    <h3>
                        {data.sections[0].title}
                    </h3>
                    <ul className="experiences">
                    <li className="exp-detail">
                        <div className="where">video and photography and User interface design</div>
                        <div className="when">2015–2017</div>
                        <div className="what">photoshop </div>
                        <div className="what">Illustrator</div>
                        <div className="what">Adobe XD</div>
                        <div className="what">premiere</div>
                        <div className="what">afterEffect</div>
                    </li>
                    <li className="exp-detail">
                        <div className="where">fanavaSystem</div>
                        <div className="when">05/2017–07/2018</div>
                        <div className="what">j2ee , smartClient framework, oracle, and ui developer</div>
                        <div className="what">java developer :</div>
                        <div className="what">project :</div>
                        <div className="what">sahabcard.ir</div>
                        <div className="what">ERP (fanavaGroup)</div>
                    </li>
                    <li className="exp-detail">
                        <div className="where">emdadKhodro</div>
                        <div className="when">09/2018</div>
                        <div className="what"> UI/UX website emdadkhodro "096440.com"</div>
                        <div className="what">frontEnd project: angular developer</div>
                    </li>
                    </ul>
                </Fullpage>
        )
    }
}
export default AboutSection;