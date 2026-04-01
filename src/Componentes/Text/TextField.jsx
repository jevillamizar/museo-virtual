import { useState } from 'react';
import TextField from '@mui/material/TextField';

const MyTextField = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <TextField 
        label="Escribe algo" 
        variant="outlined" 
        value={value} 
        onChange={handleChange} 
      />
      <p>Valor ingresado: {value}</p>
    </div>
  );
};

export default MyTextField;


