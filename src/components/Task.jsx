import React from "react";
import { Delete } from "@mui/icons-material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Box from "@mui/material/Box";

const Task = ({taski}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: "primary.light",
      }}
    >
      <DoneOutlineIcon sx={{color:'red',my:'auto',ml:1}} />
      <p>{taski}</p>
      <Delete sx={{color:'red',my:'auto',mr:1}} />
    </Box>
  );
};

export default Task;
