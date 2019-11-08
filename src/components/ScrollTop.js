import React,{Component} from 'react';
import './ScrollTop.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class ScrollTop extends Component {
   scrollToTop = ()=> {
    scroll.scrollToTop();
  }
  render(){
      return(
           <a className='top' onClick={this.scrollToTop}>
             <span></span>
           </a>  
      )
  }
}

export default ScrollTop;