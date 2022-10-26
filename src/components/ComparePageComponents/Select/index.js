import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SelectComponent({ value, handleChange, data, filter }) {
  return (
    <div>
      <Select
        value={value ?? "crypto"}
        onChange={handleChange}
        className="select-days"
        sx={{
          height: "2.5rem",
          color: "var(--black)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--black)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--black)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        {data
          .filter((coin) => coin.id != filter)
          .map((item, i) => (
            <MenuItem key={i} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default SelectComponent;
