import { Typography, makeStyles, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@material-ui/core";
import React from "react";
import primera from './images/primera.jpg'; 

const styles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const promos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Promociones = () => {
  const style = styles();
	
  return (
	<div style={{'background-color':'#E7D8C9'}}> 
		<Container className={style.cardGrid} maxWidth="md">
          <Grid container spacing={5}>
            {promos.map((promo) => (
              <Grid item key={promo} xs={12} sm={6} md={4}>
                <Card className={style.card}>
                  <CardMedia
                    className={style.cardMedia}
                    image={primera}
                    title="Image title"
                  />
                  <CardContent className={style.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {promo}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View {/* en caso de que se use un boton o algo (?*/}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
	</div> 
  );
};



export default Promociones;
