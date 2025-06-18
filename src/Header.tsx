import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';

const navItems = ['Home', 'Simulation', 'How to Use', 'Documentation'];

function Header() {
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        <Typography variant="h6" component="div" sx={{ fontFamily: 'Noto Sans JP, sans-serif', fontWeight: 'bold', color: '#1a1a1a' }}>
          藤井研究室  電波伝搬解析ツール  RayTracing
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button key={item} sx={{ fontFamily: 'Noto Sans JP, sans-serif', color: '#333', fontSize: '0.875rem', textTransform: 'uppercase', mx: 1, fontWeight: 500, '&:hover': { color: '#0066cc' } }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;