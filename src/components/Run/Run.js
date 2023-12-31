import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

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
  const executeCode = async () => {
    onLoading(true);
    setResult("");
    const res = await axios.post(
      `https://codeverse-backend-b1842520734d.herokuapp.com/${getRoute(language)}`,
      {
        code,
        input: inputVal,
      },
    )
    console.log(res);
    onLoading(false);
    if (res.data.output) setResult(res.data.output);
    else setResult(res.data.message);
    onError(Boolean(res.data.isError) || !Boolean(res.data.output));
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
