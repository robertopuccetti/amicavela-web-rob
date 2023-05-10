import * as React from "react";
import Button from "../components/Button";
import ProductHeroLayout from "./ProductHeroLayout";
import MuiTypography from "@mui/material/Typography";


export default function ProductHero() {

  return (
    <ProductHeroLayout>
      <MuiTypography 
        color="inherit" 
        variant="h3" 
        align="center"
        sx={{ marginBottom: "0.5rem"}}>
        AmicaVela
      </MuiTypography>
      <MuiTypography 
        color="inherit" 
        variant="h6" 
        align="center"
        sx={{ marginBottom: "10vh"}}>
        associazione sportiva dilettantistica
      </MuiTypography>
      <Button
        color="inherit"
        variant="outlined"
        size="large"
        href="/"
        sx={{ minWidth: 200 }}
      >
        Tesseramento 2023/24
      </Button>
    </ProductHeroLayout>
  );
}
