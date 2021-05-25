import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Home, Products, Sucursales, Contact, Promociones } from "../views";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { usePointNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/point";

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
    name: "Promociones",
    ruta: "/promociones",
    component: Promociones,
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
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    paddingBottom: '50px',
  },
  appbar: {
    alignItems: "center",
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} color="transparent">
        <NavMenu useStyles={usePointNavigationMenuStyles}>
          {routes.map((elem, index) => (
            <NavItem
              active={index === value}
              onClick={() => {
                setValue(index);
              }}
              key={elem.name}
              as={Link}
              to={elem.ruta}
            >
              {elem.name}
            </NavItem>
          ))}
        </NavMenu>
      </AppBar>
    </div>
  );
};

export { routes };
export default Menu;
