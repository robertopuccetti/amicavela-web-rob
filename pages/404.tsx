import { Button, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import src404 from "public/images/404.jpg";
import Link from "../src/Link";

export default function NotFound() {
  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        <Typography textAlign={'center'} variant="h5" component="h1" color={'dimgray'} marginTop={"1rem"}>
          Oops... Questo link non è ancora <i>navigabile</i>
        </Typography>
        <Image
          alt="404"
          src={src404}
          style={{ width: "100%", maxWidth: "50vh", height: "auto" }}
        />
        <Link href="/" underline="none">
          <Button variant="contained" color="primary">
            Torna alla home
          </Button>
        </Link>
      </Container>
    </>
  );
}