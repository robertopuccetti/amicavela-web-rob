import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { CardMedia, useMediaQuery, useTheme } from "@mui/material";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "80vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Video = () => {
  return (
    <CardMedia
      component='video'
      image={"amica-vela-cut.mp4"}
      autoPlay
      muted
      loop
      sx={{
        minHeight: '400px',
        objectFit: 'cover'
      }}
    />
  )
}

export default function ProductHeroLayout(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { children } = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ProductHeroLayoutRoot>
      <Video />
      <Container
        sx={{
          position: "absolute",
          top: "20%",
          width: "100%",
          textAlign: "center",
          color: "white",
          backgroundColor: "none",
          textShadow: "0px 0px 10px black",
        }}
      >
        {children}
      </Container>
    </ProductHeroLayoutRoot>
  );
}
