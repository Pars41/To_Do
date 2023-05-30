import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Input = () => {
  return (
    <Box>
      <input type="text" />
      <Button variant="contained" color="success">
        Success
      </Button>
    </Box>
  );
};

export default Input;
