import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

const Input = () => {
  return (
    <Box
    sx={{
      display:'flex',
      justifyContent:'space-between',
      width:500,
      mx:'auto ',
      my: 2
    }}>
      <TextField sx={{width:'90%'}} id="standard-basic" label="Add new task..." variant="standard" />
      <Button sx={{width:'10%'}} variant="contained" color="success">
        <AddIcon/>
      </Button>
    </Box>
  );
};

export default Input;
