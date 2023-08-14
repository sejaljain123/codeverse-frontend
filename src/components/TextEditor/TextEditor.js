import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { SAMPLE_CODE } from "../../data/sampleCode";

const TextEditor = ({ language, codeChange }) => {
  useEffect(() => {
    console.log("code changed");
    codeChange(SAMPLE_CODE[language]);
  }, [language, codeChange]);

  return (
    <Editor
      height="100%"
      theme="vs-dark"
      defaultLanguage="javascript, cpp, python"
      language={language}
      value={SAMPLE_CODE[language]}
      onChange={codeChange}
    />
  );
};
export default TextEditor;
