import { useTheme } from '@mui/material/styles';
import { Box, Card, CardActionArea, CardMedia, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Image, { StaticImageData } from "next/image";
import corsiSrc from 'public/images/corsi.jpg'
import regateSrc from 'public/images/regate.jpg'
import assistitaSrc from 'public/images/assistita.jpg'
import Link from '../Link';

export default function Content() {

  const cardContentProps: CardContentProps[] = [
    {
      title: "Corsi di vela", image: corsiSrc, link: "/corsi-di-vela",
      text:
        `Il corso di vela è tenuto interamente a bordo di uno yacht 
        cabinato di 13,5 metri, organizzato con l'unico obiettivo di promuovere la vela.`
    },
    {
      title: "Regate", image: regateSrc, link: "/regate",
      text: `La nostra esperienza nasce dai monotipi Solaris36 e Platu25
        con cui abbiamo partecipato al Circuito Italiano ed ai Campionati Mondiali, 
        oltre che dalle Vele Storiche a cui abbiamo partecipato con il nostro Sangermani 40.
        Partecipiamo con discreto successo alle regate ORC disputate nel mar Ligure
        e alto Tirreno con un Dufour 44 Performace.
    ` },
    {
      title: "Navigazione assistita", image: assistitaSrc, link: "/navigazione-assistita",
      text: `Ai principianti che vogliono godersi il piacere di 
        veleggiare davanti alle nostre coste oppure  fra le isole dell ${'’'}arcipelago, magari non disdegnando
        qualche bagno rinfrescante, offriamo l ${'’'}esperienza della navigazione assistita dai nostri esperti
        velisti che vi introdurranno all ${'’'}uso della tecnica della navigazione a vela su un cabinato di 13,5 m. 
    ` }
  ];

  return (
    <Container sx={{ py: 2 }} maxWidth="lg">
      <Typography variant="h4" component="h1" color="#00366b" gutterBottom>
        Cos'è Amica Vela?
      </Typography>
      <Typography variant="body1" component="h2" gutterBottom>
        È un{"'"}associazione sportiva dilettantistica nata per iniziativa di un gruppo di amici appassionati
        del mare e della vela. L'attività svolta dall'associazione è finalizzata alla promozione e diffusione
        della nautica e della navigazione da diporto attraverso corsi di vela e regate.
      </Typography>

      <Typography variant="h4" component="h3" color="#00366b" textAlign={"center"} marginY={"3rem"} >
        I nostri servizi ai soci
      </Typography>

      <Grid container columnSpacing={4}>

        {cardContentProps.map((props, index) => (
          <GridItem props={props} index={index} key={index} />
        ))}

      </Grid>

    </Container>
  )
}

interface CardContentProps {
  title: string;
  image: string | StaticImageData;
  link: string;
  text: string;
}

function GridItem({ props, index }: { props: CardContentProps, index: number }) {

  const theme = useTheme();

  return (
    <Grid xs={12} md={4} key={index}
      sx={{ padding: "1rem" }}
    >
      <Link href={props.link} underline="none">
        <CardActionArea sx={{ height: "100%" }}>
          <Card sx={{ padding: "1rem", alignContent: "center", justifyContent: "center", height: "100%" }}>
            <CardMedia title={props.title}>
              <Typography variant="h5" component="h4" color={(theme.palette.primary.light)} gutterBottom>
                {props.title}
              </Typography>
              <Image
                alt="corsi di vela"
                src={props.image}
                style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
              >
              </Image>
              <Typography variant="body1" align='center' gutterBottom padding={1}>
                {props.text}
              </Typography>
            </CardMedia>
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  )
}

