import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Header } from '../../components';

const Home: FC = () => {
  return (
    <div>
      <Header />
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h4">
          Welcome to Medical Institution Employee Management
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/doctors"
            sx={{ marginRight: 2 }}
          >
            Manage Doctors
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/nurses"
          >
            Manage Nurses
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
