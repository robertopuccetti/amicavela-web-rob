import { Box, Typography, Link, useTheme } from '@mui/material';
import styles from '../style/Footer.module.css';

const Footer = () => {
  // const date = new Date().getFullYear();

  const footerLines = [
    "Amica Vela",
    "Associazione Sportiva Dilettantistica",
    "Via Monte San Daniele, 24/H, 57023 Cecina(LI)",
    "C.F. 92099380492 - N° Coni 79264",
    "335 5267249 - info@amicavela.it" 
  ];

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.footerContainer}>
      {footerLines.map((line, index) => (
        <Typography key={index} className={styles.footerLine} fontSize={12} color={useTheme().palette.primary.dark}>
          {line}
        </Typography>
      ))}
    </Box>
  );
};

export default Footer;