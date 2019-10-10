import React,{Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import Fullpage from '../components/Fullpage';
import data from '../data.json';
import './TitleSection.css';

class TitleSection extends Component {
    render(){
        return(
                <Fullpage className="one">
                <div className="title-text">
                <div className="title-img">
                <img src={require('../assets//images/js.png')} alt=''/>
                </div>
                <h1 className="title"> 
                    {data.title}
                </h1>
                <div className="subtitle">{data.subtitle}</div>
                </div>
                <hr class="line"></hr>
                    <div className="icon-wraper">
                    {
                        Object.keys(data.links).map(key =>{
                            console.log(data.links[key].url,data.links[key].bgColor )
                            return(
                                <div className="icon">
                                <SocialIcon className="my-social-icon" url={data.links[key].url} bgColor={data.links[key].bgColor} />
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
export default TitleSection;