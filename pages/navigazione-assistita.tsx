import { Typography, useTheme } from "@mui/material";
import navigazioneSrc from "public/images/assistita.jpg";
import PageLayout from "../src/components/PageLayout";

export default function NavigazioneAssistita() {
  const theme = useTheme();

  return (
    <>
      <PageLayout imageSrc={navigazioneSrc} title="Navigazione Assistita">
        <Typography variant="h2" color={theme.palette.primary.main}>
          Navigazione Assistita
        </Typography>

        <Typography variant="body1">
          Ai principianti che vogliono godersi il piacere di veleggiare davanti
          alle nostre coste oppure fra le isole dell’arcipelago, magari non
          disdegnando qualche bagno rinfrescante, offriamo l’esperienza della
          navigazione assistita dai nostri esperti velisti che vi introdurranno
          all’uso della tecnica della navigazione a vela su un cabinato di 13,5
          m.
        </Typography>
      </PageLayout>
    </>
  );
}
