import React, { Component } from 'react';
import './Video.css';
import ReactDOM from 'react-dom';
export default class PlayerControlExample extends Component {
  constructor(props, context) {
    super(props, context);

  }
  handleMute =(e)=>{
   e.preventDefault()
   e.target.muted = !e.target.muted
 }
 handleAutoScroll=(e)=>
 {
   let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling;
   if(next)
   {
    next.scrollIntoView({behavior:'smooth'});
    e.target.muted=true;
   }
 }
  render() {
    return (
      <>
        <video onEnded={this.handleAutoScroll} src={this.props.source} className='video-styles' onClick={(e)=>this.handleMute(e)}  id={this.props.id}  muted="muted" type="video/mp4" >
        
          </video>
     </>
    );
  }
}