import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import './Header.css'


const navItems = ['Home', 'Simulation', 'How to Use', 'Documentation'];

type headerProps = {
  onSelectedPage: (page: string) => void;
};

function Header( { onSelectedPage }: headerProps) {
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar sx={{ flexDirection: 'column', justifyContent: 'center', px: 4, py: 2, gap: 1.5 }}>
        <Typography variant="h6" component="div" className="header-font" sx={{ color: '#1a1a1a' }}>
          RayTracing
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{ color: '#333', fontSize: '0.875rem', textTransform: 'uppercase', mx: 1, fontWeight: 500, '&:hover': { color: '#0066cc' } }}
              onClick={() => onSelectedPage(`/${item.toLowerCase().split(' ').join('')}`)}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;