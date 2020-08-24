import React, { Component } from 'react';
import Tabs from './Tabs';
import '../style/NavCard.css'

import API from '../utils/API';



//modified from https://codepen.io/quentunahelper/pen/xwjmjg
  class NavCard extends Component {
    
    state= {
      question: [{title: "Question1", content: "This is Content 1"},{title: "Question4", content: "This is Content 4"},{title: "Question3", content: "This is Content 3"},{title: "Question2", content: "This is Content 2"}],
      title: "",
      content: "",
      examples: [],
      answer: []
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

        setContent = (titley, contenty, exampley, answery) =>{
          console.log(exampley)
          this.setState({title:titley})
          this.setState({content:contenty})
          this.setState({examples:exampley[0].split('---')})
          this.setState({answer:answery})
        }
     
    
    render() {

      function changeBackground(e) {
        e.target.style.background = '#2F4F4F'
        
      }
      function changeBackgroundBack(e) {
        e.target.style.background = '#5F9EA0'
        
      }
      console.log(this.state.examples)
      
      return (
        <div style={{overflow:"hidden", display:"block", clear:"both", width:"96%",height:"100%", padding:"1%",marginLeft:"3%", maginRight:"10%", borderRadius:"25px", borderStyle: "outset", borderColor:"#FAFAD2"}}>
        <main>
          <Tabs>
            Problem
            <span>
              

                <div className="dropdown">
                  <button className="btn dropdown-toggle" onMouseOver={function(event){changeBackground(event)}} onMouseLeave={function(event){changeBackgroundBack(event)}} style={{color:"white", backgroundColor:"#5F9EA0", borderRadius:"25px", marginBottom:"5px", borderColor:"#7FFFD4", marginTop:"-12px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Questions
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {this.state.question.map((questions, index)=> <a onClick={()=>this.setContent(questions.title, questions.content, questions.examples, questions.answer)} className="dropdown-item" key={index} >{questions.title}</a>)}
                  </div>
                </div>
              
                
                <br></br>
                <br></br>
                
                <h5>{this.state.title}</h5>
                <hr></hr>
                <p>{this.state.content}</p>
                <p>Examples:</p> 
                
                  {/* {this.state.examples.map((example, index)=> <li key={index}>Input: {example.input} Output: {example.output}</li>)} */}
                  <p style={{whiteSpace:"pre"}}>{this.state.examples.map( (it, i) => <div key={'x'+i}>{it}</div> )}</p>
                
            
            </span>
            Solution
            <span>
              <p style={{whiteSpace:"pre", textAlign:"left", overflow:"hidden", display:"block", clear:"both", width:"auto"}}>{this.state.answer}</p>
            </span>
            Hints
            <span>No Hints Sorry!</span>
          </Tabs>
        </main>
        </div>
      );
    }
  }

  export default NavCard