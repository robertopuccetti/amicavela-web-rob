import {
  AppBar,
  Typography,
  Link,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '../style/Header.module.css';
import Image from 'next/image';
import logoSrc from 'public/images/logo.png';

const Header = () => {
  const links = [
    { id: 1, route: 'Corsi di vela', url: '/' },
    { id: 2, route: 'Regate', url: '/' },
    { id: 3, route: 'Navigazione assistita', url: '/' },
    { id: 4, route: 'Foto', url: '/' },
    { id: 5, route: 'Blog', url: '/' },
    { id: 6, route: 'Bacheca', url: '/' },
  ];

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={(_e) => setState(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {links.map((link) => (
          <ListItem button key={link.id}>
            <ListItemText primary={link.route} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ marginBottom: '70px' }}>
      <AppBar>
        <Toolbar className={styles.toolbar}>
          
          {/* insert logo from local image */}
          <Image
            className={styles.logo}
            src={logoSrc}
            alt="Amica Vela"
          />

          {/* <Link href="/" underline="none">
            <Typography variant="h5" className={styles.name}>
              Amica Vela a.s.d.
            </Typography>
          </Link> */}

          {matches ? (
            <Box>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={(_e) => setState(true)}
              >
                <MenuIcon className={styles.menuIcon} />
              </IconButton>

              <Drawer
                anchor="right"
                open={state}
                onClose={toggleDrawer(false)}
              >
                {list()}
              </Drawer>
            </Box>
          ) : <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexGrow: '0.1',
            }}
          >
            {links.map((link) => (
              <Link href={link.url} target="_blank" underline="none" key={link.id}>
                <Typography className={styles.link} color={(theme.palette.primary.main)}>{link.route}</Typography>
              </Link>
            ))}
          </Box>}

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;