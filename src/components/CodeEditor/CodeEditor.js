import * as React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import styled from "styled-components";
import cssToObject from "css-to-object";
import SplitPane from "react-split-pane";

require("codemirror/mode/clike/clike");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/dracula.css");
require("codemirror/theme/panda-syntax.css");
require("codemirror/theme/material.css");

const DEFAULT_EDITOR_VALUE=
  '// C++ code\n\nint main() {\n\treturn 0;\n}\n'

const DEFAULT_EDITOR_OPTIONS = {
  theme: "custom-0",
  autoCloseBrackets: true,
  cursorScrollMargin: 48,
  mode: "text/x-c++src",
  lineNumbers: true,
  indentUnit: 4,
  tabSize: 4,
  styleActiveLine: true,
  viewportMargin: 99
};

export class CustomEditor extends React.Component {
  state = {
    editorValue: DEFAULT_EDITOR_VALUE
  };

  editorOptions = {
    ...DEFAULT_EDITOR_OPTIONS,
  };

  onChange = which => (editor, data, value) => {
    this.setState({ [`${which}Value`]: value });
  };

  render() {
    return (
        <PureEditor
          name="js"
          value={this.state.editorValue}
          options={this.editorOptions}
          onChange={this.onChange("editor")}
        />
    );
  }
}

class PureEditor extends React.PureComponent {
  render() {
    return (
      <CodeMirror
        value={this.props.value}
        options={this.props.options}
        onBeforeChange={this.props.onChange}
      />
    );
  }
}

export default CustomEditor;