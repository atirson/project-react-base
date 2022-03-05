import {
  Box, Typography, Button, FormControl, TextField,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const formUserSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
});

export default function FormUser() {
  const {
    register, handleSubmit, formState, reset,
  } = useForm({
    resolver: yupResolver(formUserSchema),
    defaultValues: {
      name: '',
    },
  });

  const { errors } = formState;

  const sendFormUser: SubmitHandler<{ name: string }> = (values) => {
    console.log(values);
    reset();
  };

  return (
    <Box>
      <Typography variant="h4">Form User</Typography>
      <Box component="form" onSubmit={handleSubmit(sendFormUser)}>
        <FormControl>
          <TextField error={!!errors.name} label="Name" {...register('name')} helperText={errors.name?.message} />
        </FormControl>
        <Button type="submit">Save</Button>
      </Box>
    </Box>
  );
}
