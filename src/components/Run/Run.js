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
    const res = await axios({
      method: "post",
      url: `https://codeverse-backend.netlify.app/${getRoute(language)}`,
      data: {
        code,
        input: inputVal,
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });
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
