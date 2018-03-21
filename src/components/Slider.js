import React,{ Component } from 'react';
import Slide from './Slide'; 
import RightArrow from './RightArrow'; 
import LeftArrow from './LeftArrow'; 

require('./style.scss') 
class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      background: ['blue', 'orange', 'pink', 'red']
    } 
  }
  render() {
    return (
      <div className="slider">
        <Slide background={this.state.background} current={0}/> 
      </div>
    );
  }
}

export default Slider; 
