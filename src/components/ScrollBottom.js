import React,{Component} from 'react';
import './ScrollBottom.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class ScrollBottom extends Component {
   scrollTo(el) {
      scroller.scrollTo(`${el}`, {
         duration: 1500,
         delay: 100,
         smooth: true,
         offset: 50, // Scrolls to element + 50 pixels down the page
       })
  }
  render(){
   const el = this.props.el;
      return(
          <a className='bottom' onClick={this.scrollTo(el)}>
            <span></span>
          </a>
      )
  }
}

export default ScrollBottom;