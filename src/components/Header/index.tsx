import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Medical Institution Employee Management
        </Typography>
        <Button color="inherit" component={Link} to="/doctors">
          Doctors
        </Button>
        <Button color="inherit" component={Link} to="/nurses">
          Nurses
        </Button>
      </Toolbar>
    </AppBar>
  );
};
