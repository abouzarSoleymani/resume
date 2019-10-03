import React,{Component} from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data.json';
import './SkillsSection.css';

class SkillsSection extends Component {

    render(){
        return(
                <Fullpage className="third">
                <div className="skills-title">
                    {data.sections[1].title}
                </div>
                <ul className="skills">
                    <li>HTML5 and CSS3</li>
                    <li>LESS or SASS , Bootstrap 3/4</li>
                    <li>user interface and user experience</li>
                    <li>Angular 6/7 Typescript SPA, ES6 , rxjs.</li>
                    <li>Source control Git and SVN</li>
                    <li>jQuery, JSON, AJAX and DOM scripting to create interactive web applications.</li>
                    <li>Experience in making Responsive Web Pages using Media Queries and Bootstrap, Material Design</li>
                    <li>lite for styling mobile applications.</li>
                    <li>problem solving skill</li>
                    <li>Database: oracle</li>
                    <li>Experience of PWA (progressive web app) , Cordova</li>
                    <li>Knowledge of Node js , Express js , MongoDB</li>
                    <li>Experience with IDE’s such as Visual Studio Code, Web Strom, intellij, myeclipse and Eclipse.</li>
                    <li>Experience in working on Windows, and Linux - Ubuntu operating systems.</li>
                </ul>
                <hr class="line"/>
                <div className="cards-wrapper">
                    {
                        data.sections[1].items.map(skill =>{
                            console.log(`${skill.content.image}`)
                                return(
                                    <div className="card">
                                     <div className="image-wrapper">
                                          <img src={require(`../assets/icons/${skill.content.image}`)} alt=''/>
                                     </div>
                        
                                     <div className="skill-title"> {skill.content.title}</div>
                                        <div className="bar">
                                           <div className="emptybar"></div>
                                            <div className="filledbar"></div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                </Fullpage>
        )
    }
}
export default SkillsSection;