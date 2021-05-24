import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Home, Products, Sucursales, Contact, Promociones } from "../views";

const routes = [
  {
    name: "Inicio",
    ruta: "/",
    component: Home,
  },
  {
    name: "Productos",
    ruta: "/productos",
    component: Products,
  },
  {
    name: "Sucursales",
    ruta: "/sucursales",
    component: Sucursales,
  },
  {
    name: "Contacto",
    ruta: "/contacto",
    component: Contact,
  },
  {
    name: "Promociones",
    ruta: "/promociones",
    component: Promociones,
  },
];

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          {routes.map((elem) => (
            <Tab
              key={elem.name}
              label={elem.name}
              component={Link}
              to={elem.ruta}
              value={elem.ruta}
              {...a11yProps(0)}
            />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
};

export { routes };
export default Menu;
