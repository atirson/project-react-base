import {
  FormControl, InputProps as InputPropsMaterial, FormHelperText, TextField,
} from '@mui/material';
import { FieldError } from 'react-hook-form';

interface InputProps extends InputPropsMaterial {
  name: string;
  placeholder?: string;
  err?: FieldError;
}

export default function Input({
  name, placeholder, err, ...rest
}: InputProps) {
  return (
    <FormControl>
      <TextField variant="outlined" name={name} placeholder={placeholder} InputProps={rest} />
      {!!err && <FormHelperText style={{ color: '#ff0000' }}>{err.message}</FormHelperText>}
    </FormControl>
  );
}
