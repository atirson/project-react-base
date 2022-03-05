import Input from '@app/components/elements/Input';
import { Box, Typography, Button } from '@mui/material';
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

  const sendFormUser: SubmitHandler<{ name: string }> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box>
      <Typography variant="h4">Form User</Typography>
      <Input placeholder="Name" err={errors.name} {...register('name')} />
      <Button onClick={handleSubmit(sendFormUser)}>Save</Button>
    </Box>
  );
}
