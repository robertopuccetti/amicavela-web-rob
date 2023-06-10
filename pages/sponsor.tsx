import { Typography, useTheme } from "@mui/material";
import sponsorSrc from "public/images/sponsor.jpg";
import PageLayout from "../src/components/PageLayout";

export default function Sponsor() {
  const theme = useTheme();

  return (
    <>
      <PageLayout imageSrc={sponsorSrc} title="Sponsor">
        <Typography variant="h2" color={theme.palette.primary.main}>
          Sponsor
        </Typography>
        <Typography variant="body1">
          Data l’ampia visibilità degli eventi a cui partecipiamo, siamo
          disponibili ad offrire spazi pubblicitari sulle nostre barche anche
          per lunghi periodi. Le cifre si differenziano nel caso di sponsor
          esclusivo (intera barca a disposizione per le scritte pubbicitarie)
          oppure con altri (max. 4 per barca) e variano in base agli eventi: da
          un minimo di €1.000 fino ad un massimo di €.8.000. (IVA compresa). I
          nostri grafici saranno a disposizione per suggerimenti, realizzazione
          e posizionamento degli adesivi e la simulazione effettuata al computer
          potrà rendere idea dell’effetto finale del messaggio pubblicitario
          prima della sua realizzazione.
        </Typography>
      </PageLayout>
    </>
  );
}
