import React, { Component } from 'react';
import bkg from "./vintage-wallpaper.png"


// modified from https://codepen.io/quentunahelper/pen/xwjmjg
class Tabs extends Component {
    constructor(props) {
      super();
      this.state = {
        active: 0
      }
    }
    
    select = (i) => {
      let _this = this;
      return function() {
        _this.setState({
          active: i
        });
      }
    }
    
    renderTabs = () => {
      return React.Children.map(this.props.children, (item, i) => {
        if (i%2 === 0) {
          let active = this.state.active === i ? 'active' : '';
          return <a style={{color:"white", margin:"5px"}} onClick={this.select(i)} className={`${active} tab`}>{item}</a>;
        }
      });
    }
    
    renderContent() {
      return React.Children.map(this.props.children, (item, i) => {
        if (i-1 === this.state.active) {
          return <div className='content' style={{borderRadius:"25px", margin:"5px"}}>{item}</div>;
        } else {
          return;
        }
      });
    }
    
    render() {
      return (
        <div className="tabs">
          <div className="header" style={{backgroundImage: `url(${bkg})`, borderRadius:"25px"}}>
          {this.renderTabs()}
          </div>
          {this.renderContent()}
        </div>
      );
    }
  }

  export default Tabs