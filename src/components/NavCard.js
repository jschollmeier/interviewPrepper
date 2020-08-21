import React, { Component } from 'react';
import Tabs from './Tabs';
//modified from https://codepen.io/quentunahelper/pen/xwjmjg
  class NavCard extends Component {
    render() {
      return (
        <main>
          <Tabs>
            Problem
            <span>
              Problem goes here
            </span>
            Solution
            <span>Solution Goes Here</span>
            Hints
            <span>Hints goe here</span>
          </Tabs>
        </main>
      );
    }
  }

  export default NavCard