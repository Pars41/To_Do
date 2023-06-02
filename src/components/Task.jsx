import React from "react";
import { Delete } from "@mui/icons-material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Box from "@mui/material/Box";

const Task = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",

        backgroundColor: "primary.light",
      }}
    >
      <DoneOutlineIcon />
      <p>deneme</p>
      <Delete />
    </Box>
  );
};

export default Task;
