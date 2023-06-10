import Button from "./Button";
import ProductHeroLayout from "./ProductHeroLayout";
import MuiTypography from "@mui/material/Typography";
import Link  from "../Link";

export default function ProductHero() {

  return (
    <ProductHeroLayout>
      <MuiTypography
        color="inherit"
        variant="h3"
        align="center"
        sx={{ marginBottom: "0.5rem" }}>
        AmicaVela
      </MuiTypography>
      <MuiTypography
        color="inherit"
        variant="h6"
        align="center"
        sx={{ marginBottom: "10vh" }}>
        associazione sportiva dilettantistica
      </MuiTypography>
      <Link href="/pdf/tesseramento.pdf" target="_blank" underline="none" color="inherit">
        <Button
          color="inherit"
          variant="outlined"
          size="large"
          sx={{ minWidth: 200 }}
        >
          Tesseramento 2023/24
        </Button>
      </Link>
    </ProductHeroLayout>
  );
}
