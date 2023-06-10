import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  List,
  ListItem,
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
import Link from '../Link';

const Header = () => {

  const links = [
    { id: 0, route: 'Home', url: '/'},
    { id: 1, route: 'Corsi di vela', url: '/corsi' },
    { id: 2, route: 'Regate', url: '/regate' },
    { id: 3, route: 'Navigazione assistita', url: '/navigazione-assistita' },
    { id: 4, route: 'Foto', url: 'https://photos.app.goo.gl/OZuaH2dSTmejeHBk1' },
    { id: 5, route: 'Blog', url: '/blog' },
    { id: 6, route: 'Documenti', url: '/bacheca' },
    { id: 7, route: 'Sponsor', url: '/sponsor' },

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
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {links.map((link) => (
          <ListItem button key={link.id}>
            <Link href={link.url} underline="none">
              <Typography className={styles.link} color={(theme.palette.primary.main)}>{link.route}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ marginBottom: '10vh' }}>
      <AppBar>
        <Toolbar className={styles.toolbar}>
          <Link href={"/"} sx={{ height: "inherit"}}>
            <Image
              className={styles.logo}
              src={logoSrc}
              alt="Amica Vela"
            />
          </Link>

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
              <Link href={link.url} underline="none" key={link.id}>
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