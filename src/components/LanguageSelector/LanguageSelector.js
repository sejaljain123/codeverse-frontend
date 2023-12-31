import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    color: "white",
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

export default function LanguageSelector({ changeLanguage }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("javascript");

  const handleChange = (event) => {
    changeLanguage(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div style={{ display: "flex", color: "white" }}>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label" style={{ color: "white", borderColor: "1px solid wheat" }} >
            Language
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={value}
            onChange={handleChange}
            label="Language"
            style={{ color: "white" }}
          >
            <MenuItem value={"cpp"}>CPP</MenuItem>
            <MenuItem value={"javascript"}>JavaScript</MenuItem>
            <MenuItem value={"python"}>Python</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div >
  );
}
