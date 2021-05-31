import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import LazyLoad from 'react-lazyload';

const Home = () => {
  return (
    <Container component="main" maxWidth="md">
      <Grid container justify="center">
        <Grid item xs={12}>
          <LazyLoad once>
            <img
              src="/images/BannerInicio.png"
              alt="foto de final"
              style={{
                width: '100%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </LazyLoad>
        </Grid>
        <Grid item xs={12}>
          <h2>¿Quienes Somos?</h2>
          <div>
            <Typography>
              <i>Amamos crear comida</i>
            </Typography>
            <Typography>
              Somos un negocio local con más de 10 años de experiencia en el
              mundo de la repostería, siempre estamos buscando la manera de
              mejorar la calidad de nuestros productos y ampliar nuestro
              catálogo para traerte sólo lo mejor. ¡Celebra tus mejores momentos
              con nosotros! Contamos con sucursales en diferentes zonas de Nuevo
              León como Monterrey, San Nicolás, Apodaca y Santiago, ¡visítanos y
              encuentra nuestros postres en la más cercana!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
