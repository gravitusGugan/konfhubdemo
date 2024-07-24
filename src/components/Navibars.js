import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-scroll';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navibar = ({data}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Home', to: 'home' },
    { text: 'About', to: 'about' },
    { text: 'Tickets', to: 'tickets' },
    { text: 'Speaker Section', to: 'speaker' },
    { text: 'Workshop Section', to: 'workshop' },
    { text: 'Event Sponsor', to: 'event' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={handleDrawerToggle}>
            <Link
              to={item.to}
              smooth
              duration={500}
              offset={-72}
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Typography
                fontFamily="Montserrat"
                fontWeight={600}
                fontSize={14}
                sx={{ textTransform: 'capitalize' }}
              >
                {item.text.toLowerCase()}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        py: 1,
        height: 72,
        backdropFilter: 'blur(60px)',
        bgcolor: 'transparent',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar>
        {isMobile && (
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <img
            src={data?.navbar_icon}
            alt="Logo"
            style={{ height: '60px', marginRight: '16px' }}
          />
          {!isMobile && (
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
              {menuItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    mx: 5,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover a': {
                      color: 'grey.600', 
                    },
                    '& a.active': {
                      borderBottom: '2px solid',
                      borderColor: 'primary.main', 
                    },
                  }}
                >
                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-72}
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      paddingBottom: '4px', 
                    }}
                    activeClass="active"
                  >
                    <Typography
                      fontFamily="Montserrat"
                      fontWeight={600}
                      fontSize={14}
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {item.text.toLowerCase()}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          )}
        </Box>
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" style={{ marginLeft: '16px' }}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
      {isMobile && drawer}
    </AppBar>
  );
};

export default Navibar;
