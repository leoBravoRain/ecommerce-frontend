import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { companyName } from "../config/baseConfig";
import { routes } from "../config/routes";
import { useAppSelector } from "../redux/hooks.types";

const NavBar = () => {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* home page */}
        <Link to={routes.catalog}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {companyName}
          </Typography>
        </Link>

        {/* cart (checkout) */}
        {/* if there is items on cart, display link */}
        {items.length > 0 && (
          <Link to={routes.checkout}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Checkout
            </Typography>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
