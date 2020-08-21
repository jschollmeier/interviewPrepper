import React, { Component } from 'react';
import Tabs from './Tabs';
import '../style/NavCard.css'

import API from '../utils/API';

//modified from https://codepen.io/quentunahelper/pen/xwjmjg
  class NavCard extends Component {
    
    state= {
      question: [{title: "titlehold", content: "contenthold"}]
    }
    componentDidMount(){
      this.loadQuestion();
    }

    loadQuestion = () =>{
      API.getQuestion()
        .then(res =>
          this.setState({question : res.data})
          
          )
          
          .catch(err => console.log(err));
        }
     
    
    render() {
      
      return (
        <main>
          <Tabs>
            Problem
            <span>
              <ul>
                {this.state.question.map((questions, index)=> <li key={index}>{questions.title}</li>)}
              </ul>
              
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