import { Typography } from "@material-ui/core";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 400,
    },
  },
}));


const Contact = () => {
  const classes = useStyles();

  return (
    <div style={{padding: '10px', width: '400px'}}>
      <Typography variant="h3">
        Enviar un correo
      </Typography>
      <form className={classes.root}>
        <div>
          <TextField label="Nombre completo" fullWidth autocomplete="none"/>
        </div>
        <div>
          <TextField label="Correo" fullWidth autocomplete="none"/>
        </div>
        <div>
          <TextField label="Mensaje" fullWidth multiline rows={5} autoComplete="none" />
        </div>
        <Button type="submit" variant="contained" color="primary" style={{margin: '0 40%'}}>Enviar</Button>
    </form>
    </div>
    
  )
};

export default Contact;
