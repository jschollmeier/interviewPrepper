import React, { Component } from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/webpack-resolver";

export default class Editor extends Component {
  state = {
    code: null
  }

  runStringFunction = (obj) => {
    // TODO: Pass the input (e.g. string, number, array) into the last parantheses ()
    return Function('"use strict"; return (' + obj + ')')()();
  }
  handleFunctionCall = (event) => {
    event.preventDefault();
    // TODO: Compare this value with the expected output
    const output = this.runStringFunction(this.state.code);
    console.log (output); 
  };

  render() {
    return (
      <div>
        <AceEditor
            mode="javascript"
            theme="monokai"
            onChange={(value, stat) => this.setState({code: value})}
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