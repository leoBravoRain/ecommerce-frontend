import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { companyName } from "../config/baseConfig";
import { routes } from "../config/routes";
import { useAppSelector } from "../redux/hooks.types";

const NavBar = () => {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* home page */}
        <Link href={routes.catalog} underline="none" color="inherit">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {companyName}
          </Typography>
        </Link>

        {/* cart (checkout) */}
        {/* if there is items on cart, display link */}
        {items.length > 0 && (
          <Link href={routes.checkout} underline="none" color="inherit">
            <ShoppingCartIcon />
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
