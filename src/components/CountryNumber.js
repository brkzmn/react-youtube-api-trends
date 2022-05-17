import React, { useContext } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SearchBarContext } from "../contexts/SearchBarContext";

const ResultsNumberSelect = () => {
  const { setResultsNumber } = useContext(SearchBarContext);

  const options = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
  ];

  return (
    <FormControl className="results-number-select">
      <InputLabel id="demo-simple-select-label">
        Select number(optional)
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={options.label}
        label="Select number(optional)"
        onChange={(e) => {
          setResultsNumber(e.target.value);
        }}
        defaultValue={10}
        MenuProps={{
          PaperProps: { sx: { backgroundColor: "#f5f5f5", color: "#212121" } },
        }}
      >
        <MenuItem key={10} value={10}>
          10
        </MenuItem>
        <MenuItem key={20} value={20}>
          20
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ResultsNumberSelect;
