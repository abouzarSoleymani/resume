import React,{Component} from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data.json';
import './SkillsSection.css';
import ScrollTop from '../components/ScrollTop'

class SkillsSection extends Component {

    render(){
        return(
                <Fullpage className="third">
                <div className="skills-title">
                    {data.sections[1].title}
                </div>
                <ul className="skills">
                    {
                    data.sections[1].items.map(skill => {
                        if(skill.type == "list"){
                            return(
                            skill.items.map(item => {
                                return( 
                                    <li>{item}</li>
                                  )
                                       
                                 } )
                            )
                        }
                    })
                }
                </ul>
                <hr className="line"/>
                <div className="cards-wrapper">
                    {
                        data.sections[1].items.map(skill =>{
                            console.log(skill.type)
                            if(skill.type == "card"){
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
                        }
                        )
                    }
                </div>
                <a>
                <ScrollTop/>
                </a>
              

                </Fullpage>
        )
    }
}
export default SkillsSection;