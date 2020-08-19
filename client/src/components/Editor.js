import React, { Component } from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"
// import "react-ace-builds/webpack-resolver-min";

export default class Editor extends Component {
  render() {
    return (
      <div>
        <AceEditor
            mode="javascript"
            theme="github"
            onChange={(value, data) => {
                console.log("onChange", value, data);
              }}
            
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                enableBasicAutocompletion: true,
                enableSnippets: true
              }}
        />
      </div>
    );
  }
}