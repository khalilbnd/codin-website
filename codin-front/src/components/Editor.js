
import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import '../style/editor.css'

const Editor = ({ code, onChange }) => {
  // Monaco Editor options
  const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'montserrat',
    fontSize: 16,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
  };

  return (
    <div className="editor-container">
      <MonacoEditor
        language="html"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={onChange}
        className="custom-editor"
      />
    </div>
  );
};

export default Editor;