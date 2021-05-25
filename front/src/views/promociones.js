import {
  Typography,
  makeStyles,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import React from "react";

const styles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const promociones = [
  {
    title: "Promoción 2x1",
    image: "/images/promocion2x1.png",
    description:
      "¡Disfruta de nuestras promociones 2x1! Válido solo hasta el 30 de mayo de 2021",
  },
  {
    title: "Promoción 3x1",
    image: "/images/promocion2x1.png",
    description:
      "¡Disfruta de nuestras promociones 3x1! Válido solo hasta el 30 de Agosto de 2021",
  },
  {
    title: "Promoción 1x2 xd",
    image: "/images/promocion2x1.png",
    description:
      "¡Disfruta de nuestras promociones 1x2! Válido solo hasta el 30 de Junio de 2021",
  },
  {
    title: "Promoción 2x1",
    image: "/images/promocion2x1.png",
    description:
      "¡Disfruta de nuestras promociones 2x1! Válido solo hasta el 30 de Julio de 2021",
  },
  {
    title: "Promoción 2x1",
    image: "/images/promocion2x1.png",
    description:
      "¡Disfruta de nuestras promociones 2x1! Válido solo hasta el 30 de mayo de 2021",
  },
];

const Promociones = () => {
  const style = styles();

  return (
    <Container className={style.cardGrid} maxWidth="md">
      <Grid container spacing={5}>
        {promociones.map((promo) => (
          <Grid item key={promo} xs={12} sm={6} md={4}>
            <Card className={style.card}>
              <CardMedia
                className={style.cardMedia}
                image={promo.image}
                title="Image title"
              />
              <CardContent className={style.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {promo.title}
                </Typography>
                <Typography>{promo.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Promociones;
