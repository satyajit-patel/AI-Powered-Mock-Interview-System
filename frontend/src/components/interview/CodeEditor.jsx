import React from 'react';
import AceEditor from 'react-ace';

// Import modes
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';

// Import themes
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';

// Import additional features
import 'ace-builds/src-noconflict/ext-language_tools';

const CodeEditor = ({ code, language, onChange }) => {
  // Convert language name to ace mode
  const getAceMode = (lang) => {
    switch (lang) {
      case 'python': return 'python';
      case 'javascript': return 'javascript';
      case 'java': return 'java';
      case 'cpp': return 'c_cpp';
      default: return 'python';
    }
  };

  return (
    <AceEditor
      mode={getAceMode(language)}
      theme="monokai"
      onChange={onChange}
      value={code}
      name="code-editor"
      width="100%"
      height="100%"
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default CodeEditor;