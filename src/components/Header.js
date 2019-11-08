import React,{Component} from 'react';
import './Fullpage.css';
import 'react-sticky-header/styles.css';
import './Header.css';
import StickyHeader from 'react-sticky-header';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Header extends Component {
    render(){
        return(
                <StickyHeader
                  // This is the sticky part of the header.
                  header={
                    <div className="Header_root">
                      <h1 className="Header_title">MyResume</h1>
                      <ul className="Header_links">
                        <Link activeClass="active" to="title" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                          <li className="Header_link">home</li>
                        </Link>
                        <Link activeClass="active" to="experiences" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <li className="Header_link">experiences</li>
                        </Link>
                        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <li className="Header_link">skills</li>
                        </Link>
                      </ul>
                    </div>
                  }
                >
                </StickyHeader>
         
        )
    }
}
export default Header;