import React, { Component } from "react";

import TextEditor from "./components/TextEditor/TextEditor";
import Run from "./components/Run/Run";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import Result from "./components/Result/Result";

class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "javascript",
      code: "",
      inputVal: "",
      output: "",
      loading: false,
      isError: false,
    };
  }
  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  onInputChange = (inputVal) => {
    console.log(inputVal);
    this.setState({ inputVal });
  }
  oncodeChange = (code) => {
    this.setState({ code });
  };

  onResult = (output) => {
    this.setState({ output });
  };

  onLoading = (loading) => {
    this.setState({ loading });
  };

  onError = (isError) => {
    this.setState({ isError });
  };

  render() {
    return (
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", height: "10vh", backgroundColor: "#14141f", paddingLeft: "10px", borderBottom: "4px solid #2196f3" }}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/000000/source-code.png" alt="source-code" />
          <h1 style={{ color: "white", marginLeft: "10px" }}>code<span style={{ color: "#2196f3" }}>Verse</span></h1>
        </div>
        <div style={{ display: "flex", zIndex: 10, justifyContent: "space-between", alignItems: "center", padding: "4px", backgroundColor: "#1e1e1e", borderBottom: "1px solid white" }}>
          <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between", borderRight: "2px solid white" }}>
            <LanguageSelector changeLanguage={this.onLanguageChange} />
            <Run
              inputVal={this.state.inputVal}
              code={this.state.code}
              language={this.state.language}
              setResult={this.onResult}
              onLoading={this.onLoading}
              onError={this.onError}
            />
          </div>
          <div style={{ width: "100%", color: "white" }}>
            <h2 style={{ marginLeft: "20px" }}>OUTPUT</h2>
          </div>

        </div>
        <div style={{ display: "flex", justifyContent: "space-between", height: "90vh" }} >
          <div style={{ width: "100%" }}>
            <TextEditor
              language={this.state.language}
              codeChange={this.oncodeChange}
            />
          </div>
          <div className="right-container" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
            <Result
              isError={this.state.isError}
              output={this.state.output}
              loading={this.state.loading}
            />
            <textarea style={{ height: "50%", width: "100%", backgroundColor: "white", color: "black", padding: "10px" }} type="text" placeholder="Enter Input here" onChange={(e) => this.onInputChange(e.target.value)} value={this.inputVal} />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
