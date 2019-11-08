import React,{Component} from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data.json';
import './ExperiencesSection.css';
import ScrollBottm from '../components/ScrollBottom';

class ExperiencesSection extends Component {
    constructor(){
        super()
        this.state = {
            activeSection: null
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleItemClick(title) {
        this.setState({activeSection: title});
    }
    render(){
        return(
                <Fullpage className="two">
                <div className="experiences">
                    <div className="exp-title">
                        {data.sections[0].title}
                    </div>
                    <ul className="exp-ul"> 
                          {
                            data.sections[0].items.map(item => {
                                return(
                                    <li className="exp-detail">
                                    <div className="where">{item.where}</div>
                                    <div className="when">{item.when}</div>
                                           {item.what.map(it => {
                                                return(
                                                    <div className="what">{it}</div>    
                                                )
                                                })
                                              }
                                     </li>
                                )
                              })
                             }
                    </ul>
                    </div>
                <a onClick={() => this.handleItemClick('skills')}>
                <ScrollBottm el={this.state.activeSection}/>
                </a>
                </Fullpage>
        )
    }
}
export default ExperiencesSection;