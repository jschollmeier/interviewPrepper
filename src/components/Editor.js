import React, { Component } from 'react';
// import AceEditor from 'react-ace';
import { split as SplitEditor } from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/webpack-resolver";

export default class Editor extends Component {
  state = {
    code: "",
    output: ""
  }

  runStringFunction = (obj) => {
    // TODO: Pass the input (e.g. string, number, array) into the last parantheses ()
    return Function('"use strict"; return (' + obj + ')')()();
  }
  handleFunctionCall = (event) => {
    event.preventDefault();
    // TODO: Compare this value with the expected output
    const output = this.runStringFunction(this.state.code).toString();
    this.setState({output})
    console.log (output); 
  };

  render() {
    console.log(typeof this.state.code);
    return (
      <div>
        <SplitEditor
            width={ '100%' }
            height={ '60vh' }
            mode="javascript"
            wrapEnabled={ true }
            theme="monokai"
            onChange={(value, stat) => {
              console.log(value);
              this.setState({code: value[0]})
          }}
            splits={2}
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
        <button onClick={this.handleFunctionCall}>Execute</button>
      </div>
      
    );
  }
}