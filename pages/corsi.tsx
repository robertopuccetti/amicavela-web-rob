import { Typography, useTheme } from "@mui/material";
import PageLayout from "../src/components/PageLayout";
import PriceTable from "../src/components/PriceTable";
import corsiSrc from "public/images/corsi.jpg";

export default function Corsi() {
  const theme = useTheme();

  return (
    <>
      <PageLayout imageSrc={corsiSrc} title="Corsi">
        <Typography variant="h2" color={theme.palette.primary.main}>
          Corsi di Vela
        </Typography>

        <Typography variant="h5" color={theme.palette.primary.light}>
          Ammissione
        </Typography>
        <Typography variant="body1">
          Possono partecipare tutti coloro che abbiano compiuto il 18° anno di
          età. Per l{"’"}iscrizione è indispensabile la tessera AMICA VELA/ACSI,
          che viene rilasciata direttamente dall{"’"}associazione, dietro
          presentazione di certificato medico che attesti lo stato di buona
          salute e l{"’"}idoneità a svolgere attività sportiva non agonistica.
          Il tesseramento comprende la copertura assicurativa
        </Typography>

        <Typography variant="h5" color={theme.palette.primary.light}>
          Organizzazione
        </Typography>
        <Typography variant="body1">
          La scuola, che avrà carattere principalmente pratico, si svolgerà su
          imbarcazioni cabinate, presso il Marina Cala de{"’"} Medici. Nel
          programma di istruzione sono previsti diversi moduli per tener conto
          di esperienze precedenti degli allievi e per dare la necessaria
          flessibilità a coloro che, per impegni di lavoro o di studio, non
          possono programmare a priori un corso a date fisse.
        </Typography>
        <Typography variant="h5" color={theme.palette.primary.light}>
          Esami
        </Typography>
        <Typography variant="body1">
          In collaborazione con la{" "}
          <span>
            <a href="http://www.am-nautica.it/">Scuola Nautica AM </a>
          </span>
          di Rosignano, effettuiamo la preparazione per l{"’"}esame per la
          patente nautica a vela sia entro le 12 miglia che oltre.
        </Typography>
        <Typography variant="h5" color={theme.palette.primary.light}>
          Corsi e tariffe
        </Typography>
        <Typography variant="body1">
          Sono previste tre tipologie di corso: base, perfezionamento e altura.
          Questi corsi potranno essere effettuati al raggiungimento di un numero
          minimo di allievi. Potranno essere concordate anche uscite singole
          della durata di tre o sei ore, sempre con un minimo di partecipanti.
          Per ogni modulo di insegnamento sono indicate le quote di
          partecipazione, che coprono le spese di noleggio dell{"’"}
          imbarcazione e rimborso dell{"’"}istruttore.
        </Typography>

        <PriceTable />
      </PageLayout>
    </>
  );
}
