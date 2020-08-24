import React, { Component } from 'react';
import Tabs from './Tabs';
import '../style/NavCard.css'

import API from '../utils/API';

//modified from https://codepen.io/quentunahelper/pen/xwjmjg
  class NavCard extends Component {
    
    state= {
      question: [{title: "titlehold", content: "contenthold"}],
      answer: [{title: "titlehold", content: "contenthold"}]
    }
    componentDidMount(){
      this.loadQuestion();
      this.loadAnswer();
    }

    loadQuestion = () =>{
      API.getQuestion()
        .then(res =>
          this.setState({question : res.data})
          
          )
          
          .catch(err => console.log(err));
        }

    loadAnswer = () =>{
      API.getAnswer()
        .then(res =>
          this.setState({answer : res.data})
          
          )
          
          .catch(err => console.log(err));
        }
     
    
    render() {
      
      return (
        <div style={{overflow:"hidden", display:"block", clear:"both", width:"96%",height:"100%", padding:"1%",marginLeft:"3%", maginRight:"10%", borderRadius:"25px", borderStyle: "outset", borderColor:"#FAFAD2"}}>
        <main>
          <Tabs>
            Problem
            <span>
              <ul>
                {this.state.question.map((questions, index)=> <li key={index}>{questions.title}</li>)}
              </ul>
              
            </span>
            Solution
            <span>
              {this.state.answer.map((answers, index)=> <li key={index}>{answers.title}</li>)}
              {this.state.answer.map((answers, index)=> <li key={index}>{answers.content}</li>)}
            </span>
            Hints
            <span>Hints goe here</span>
          </Tabs>
        </main>
        </div>
      );
    }
  }

  export default NavCard