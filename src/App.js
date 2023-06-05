import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from '@mui/material/Box';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([])
  return (
    <Box
      sx={{
        mx:'auto',
        width:'40%',
        backgroundColor:'#ffee80',
        

      }}
    >
      <Header />
      <Input setTasks={setTasks} tasks={tasks}/>
      {tasks.map((taski,i) => {
        return(

          <Task key={i} taski={taski}/>
        )

      })}
    </Box>
  );
}

export default App;
