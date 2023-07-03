import { List, ListItem, Typography, useTheme } from "@mui/material";
import regateSrc from "public/images/regate.jpg";
import PageLayout from "../src/components/PageLayout";

export default function Corsi() {
  const theme = useTheme();

  return (
    <>
      <PageLayout imageSrc={regateSrc} title="Regate">
        <Typography variant="h2" color={theme.palette.primary.main}>
          Regate
        </Typography>
        <Typography variant="body1">
          L’associazione partecipa ai principali eventi della costa toscana con
          barche di proprietà oppure in gestione. Dato l’alto numero di regate i
          nostri soci si dividono gli impegni secondo i seguenti progetti:
        </Typography>

        <List sx={{ listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", ml: 2 }}>
            <Typography variant="h5" color={theme.palette.primary.main}>
              SOLARIS:
            </Typography>
            <Typography variant="body1">
              un appassionante monotipo One Design di 36” che ha come base
              operativa il porto di Cala De’ Medici.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", ml: 2 }}>
            <Typography variant="h5" color={theme.palette.primary.main}>
              Voglia Matta:
            </Typography>
            <Typography variant="body1">
              imbarcazione Beneteau Platu25 che partecipa al circuito
              internazionale monotipo e ad alcune regate in IRC.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", ml: 2 }}>
            <Typography variant="h5" color={theme.palette.primary.main}>
              GRAAL:
            </Typography>
            <Typography variant="body1">
              uno Zigulat 993 che partecipa con ottimi risultati ai più
              importanti eventi dell’Alto Tirreno (Viareggio—Pisa—Livorno) in
              classe ORC.
            </Typography>
          </ListItem>

          <ListItem sx={{ display: "list-item", ml: 2 }}>
            <Typography variant="h5" color={theme.palette.primary.main}>
              TELEPATIA:
            </Typography>
            <Typography variant="body1">
              un glorioso e pluridecorato half-ton di 34” che partecipa ai più
              importanti eventi dell’Alto Tirreno (Viareggio—Pisa—Livorno) in
              classe libera.
            </Typography>
          </ListItem>

          <ListItem sx={{ display: "list-item", ml: 2 }}>
            <Typography variant="h5" color={theme.palette.primary.main}>
              SANDRA:
            </Typography>
            <Typography variant="body1">
              un prestigioso 40 piedi, costruito dal cantiere Sangermani nel
              1975 e completamente ristrutturato nel 2009, che partecipa al
              circuito delle Vele Storiche e d’epoca.
            </Typography>
          </ListItem>
        </List>

        <Typography variant="body1">
          <a href="cv.pdf">Questo il nostro palmares sui campi di regata</a>
        </Typography>

        <Typography
          color={theme.palette.primary.main}
          variant="h6"
          display="inline"
        >
          N.B.
        </Typography>
        <Typography variant="body1">
          Data l’ampia visibilità degli eventi a cui partecipiamo, siamo
          disponibili ad offrire spazi pubblicitari sulle nostre barche anche
          per lunghi periodi (vedi <a href="brochure.pdf">brochure</a>
          ).
        </Typography>
      </PageLayout>
    </>
  );
}
