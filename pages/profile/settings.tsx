import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import Link from 'next/link';
import { MainLayout } from '../../layouts/MainLayout';

export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper className='p-20' elevation={0}>
        <Typography variant='h6'>Основные настройки</Typography>
        <Divider className='mt-20 mb-30' />
        <form>
            <TextField 
                size='small'
                required
                id='outlined-required'
                label='Никнейм'
                variant='outlined'
                fullWidth
                className='mb-15'
            />
            <TextField 
                size='small'
                required
                id='outlined-required'
                label='Эл. почта'
                variant='outlined'
                fullWidth
            />
            <Divider className='mt-30 mb-20' />
            <Button color='primary' variant='contained'>Сохранить изменения</Button>
        </form>
      </Paper>
    </MainLayout>
  );
}
