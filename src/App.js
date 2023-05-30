import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box 
    sx={{
      
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center'

      
    }}>
      <Header/>
      <Input/>
      <Task/>
    </Box>
  );
}

export default App;
