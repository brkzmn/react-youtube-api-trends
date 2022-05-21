import React, { useContext } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { SearchBarContext } from "../contexts/SearchBarContext";

const CountrySelect = ({ data }) => {
  const { countryCode, setCountryCode } = useContext(SearchBarContext);

  return (
    <FormControl className="country-select">
      <InputLabel id="demo-simple-select-label" required>
        Select a country
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={countryCode !== null ? countryCode : ""}
        label="Select a country"
        onChange={(e) => {
          setCountryCode(e.target.value);
        }}
        MenuProps={{
          PaperProps: { sx: { backgroundColor: "#f5f5f5", color: "#212121" } },
        }}
        defaultValue={countryCode !== null ? countryCode : ""}
      >
        <MenuItem value="" selected>
          select a country
        </MenuItem>
        {data.map((country) => {
          return (
            <MenuItem key={country.alpha2Code} value={country.alpha2Code}>
              {country.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CountrySelect;
