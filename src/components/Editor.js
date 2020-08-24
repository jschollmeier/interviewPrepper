import React, { Component } from 'react';
// import AceEditor from 'react-ace';
import { split as SplitEditor } from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/webpack-resolver";
import { Col, Row, Container } from "../components/Grid";
import bkg from "./vintage-wallpaper.png"

export default class Editor extends Component {
 constructor(props){
   super(props);
   this.state = {
    code: "",
    output: "",
    input: ""
  }
  this.handleChange = this.handleChange.bind(this);
  
 }
  

  runStringFunction = (obj, input) => {
    // TODO: Pass the input (e.g. string, number, array) into the last parantheses ()
    return Function('"use strict"; return (' + obj + ')')()(input.split(','));
  }
  handleFunctionCall = (event) => {
    event.preventDefault();
    // TODO: Compare this value with the expected output
    const output = this.runStringFunction(this.state.code, this.state.input).toString();
    this.setState({output})
     
  };

  handleChange(event) {
    this.setState({input: event.target.value});
  };

  render() {
    // console.log(typeof this.state.code);

    function changeBackground(e) {
      e.target.style.background = '#2F4F4F'
      
    }
    function changeBackgroundBack(e) {
      e.target.style.background = '#5F9EA0'
      
    }

    return (
      <Container fluid>
        
      <div style={{overflow:"hidden", display:"block", clear:"both", width:"96%",height:"100%", paddingBottom:"0px",marginLeft:"3%", maginRight:"10%", borderRadius:"25px", borderStyle: "outset", borderColor:"#FAFAD2"}}>
      
      <Row>
      <Col size="md-6">
      <div className="header" style={{marginTop:"1%", width:"100%", marginLeft:"1%", borderRadius:"25px", backgroundImage: `url(${bkg})`, height:"60px",paddingTop:"10px", paddingBottom:"0px", color:"white"}}>
        <h3 style={{textAlign:"center", marginLeft:"0%", marginBottom:"-20px"}}>Code</h3>
        </div>
        </Col>
        <Col size="md-6">
        <div className="header" style={{marginTop:"1%", width:"100%", marginLeft:"-1%", borderRadius:"25px", backgroundImage: `url(${bkg})`, height:"60px",paddingTop:"10px", paddingBottom:"0px", color:"white"}}>
        <h3 style={{textAlign:"center", marginLeft:"0%", marginBottom:"-20px"}}>Console</h3>
        </div>
        </Col>
      </Row>
      
        <SplitEditor
            width={'100%' }
            height={ '55vh' }
            mode="javascript"
            wrapEnabled={ true }
            theme="monokai"
            onChange={(value, stat) => {
              
              this.setState({code: value[0]})
          }}
            style={{borderRadius:"25px", marginTop:"1%", marginBottom:'1%'}}
            splits={2}
            fontSize="16px"
            orientation="beside"
            value={[this.state.code,this.state.output]}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showGutter: true
              }}
        />
        <form>
        <label for="fname" style={{whiteSpace:'pre', fontSize:"24px"}}>Input Array:[ </label>
        <input type="text" id="fname" name="fname" value={this.state.input} onChange={this.handleChange}></input><label style={{fontSize:"24px", whiteSpace:'pre'}}> ]</label>
        </form>
        <button onClick={this.handleFunctionCall} onMouseOver={function(event){changeBackground(event)}} onMouseLeave={function(event){changeBackgroundBack(event)}} style={{overflow:"hidden", display:"block", clear:"both", color: "white", backgroundColor:"#5F9EA0", borderRadius:"25px", borderColor:"#7FFFD4",marginBottom:"15px",width:"200px",height:"50px", marginRight:"40px", float:"right"}}>Execute</button>
      </div>
      </ Container >
    );
  }
}