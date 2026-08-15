import { type FC, Suspense } from 'react';
import { Outlet } from 'react-router';
import { Box, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Header } from 'widgets/header';

export const Layout: FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
      }}
    >
      <Header />
      <Container
        maxWidth="lg"
        sx={{ py: 8 }}
      >
        <Suspense fallback={<CircularProgress aria-label="Loading…" />}>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
};
