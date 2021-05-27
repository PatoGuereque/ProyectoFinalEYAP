import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 140,
    },
  });
  
  const sucursales = [
    {
      title: "Monterrey",
      image: "https://wallpaperaccess.com/full/2759211.jpg",
      description:
        "Monterrey es una ciudad y capital del estado de Nuevo León. Se encuentra en la Región Noreste de México.",
    },
    {
      title: "San Nicolás",
      image: "https://www.futboltotal.com.mx/wp-content/uploads/2019/05/EstadioUniversitario.jpg",
      description:
        "San Nicolás de los Garza es un municipio que forma parte de la Zona Metropolitana de Monterrey, en el Estado de Nuevo León, al noreste de México.",
    },
    {
      title: "Apodaca",
      image: "https://www.aeropuertos.net/imagenes/Aeropuerto-Internacional-Mariano-Escobedo.jpg",
      description:
        "Apodaca es una ciudad mexicana, situada en el estado de Nuevo León y cabecera del municipio del mismo nombre. ",
    },
    {
      title: "Santiago",
      image: "https://cfcdn1.allmexico365.com/wp-content/uploads/cola-de-caballo-monterrey-dec-2016.jpg",
      description:
        "El municipio de Santiago es uno de los 51 municipios en que se encuentra dividido el estado mexicano de Nuevo León.",
    }
  ];
  
  const Sucursales = () => {
    const style = styles();
    const classes = useStyles();

    return (
      <Container className={style.cardGrid} maxWidth="md">
        <Grid container spacing={5}>
          {sucursales.map((sucursal) => (
            <Grid item key={sucursal} xs={12}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={sucursal.image}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {sucursal.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {sucursal.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Llamar
                    </Button>
                    <Button size="small" color="primary">
                    Dirección
                    </Button>
                </CardActions>
                </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };

  export default Sucursales;