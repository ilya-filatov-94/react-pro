import type { FC } from 'react';
import { AppBar, Box, Link, Toolbar } from '@mui/material';
import { LINKS } from '../model/config';

export const Header: FC = () => {
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar>
        <Box
          component="nav"
          sx={{ ml: 'auto' }}
        >
          {LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              sx={{ mx: 1 }}
            >
              {link.title}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
