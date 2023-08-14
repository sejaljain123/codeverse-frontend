import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textColor: "green",
    "& > *": {
      margin: theme.spacing(2),
      minWidth: 120,
    },
  },
}));

export default function ContainedButtons({
  code,
  inputVal,
  language,
  setResult,
  onLoading,
  onError,
}) {
  const classes = useStyles();
  const executeCode = () => {
    onLoading(true);
    setResult("");
    console.log("executing code", code, inputVal);
    fetch(`http://localhost:3001/${getRoute(language)}`, {
      method: "POST",
      body: JSON.stringify({ code, input: inputVal }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        onLoading(false);
        if (data.output) setResult(data.output);
        else setResult(data.message);
        onError(Boolean(data.isError) || !Boolean(data.output));
      });
  };

  return (
    <div className={classes.root} style={{ marginTop: "2px" }}>
      <Button variant="contained" onClick={executeCode} style={{ backgroundColor: "green", color: "white", fontWeight: "bold" }}>
        RUN CODE
      </Button>
    </div>
  );
}

const getRoute = (language) => {
  switch (language) {
    case "cpp":
      return "execCpp";
    case "javascript":
      return "execNode";
    case "python":
      return "execPython";
    default:
      return "";
  }
};