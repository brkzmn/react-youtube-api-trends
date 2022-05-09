import React, { useContext } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SearchBarContext } from "../contexts/SearchBarContext";

const CountrySelect = ({ data }) => {
  const {
    countryCode,
    setCountryCode,
    countryName,
    setCountryName,
    resultsNumber,
    setResultsNumber,
  } = useContext(SearchBarContext);

  const options =
    data &&
    data.map((country) => {
      return { label: country.name.common, value: country.cca2 };
    });

  return (
    <div>
      <FormControl className="country-select">
        <InputLabel id="demo-simple-select-label">Select a country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={options.label}
          label={countryName}
          onChange={(e) => {
            // e.preventDefault();
            setCountryCode(e.target.value);
          }}
        >
          <MenuItem value="" disabled selected>
            select a country pls
          </MenuItem>
          {data.map((country) => {
            return (
              <MenuItem key={country.cca2} value={country.cca2}>
                {country.name.common}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <p>You select : {countryCode}</p>
    </div>
  );
};

export default CountrySelect;
