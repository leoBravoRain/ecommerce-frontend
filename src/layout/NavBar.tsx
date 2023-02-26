import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { companyName } from "../config/baseConfig";
import { routes } from "../config/routes";
import { useAppSelector } from "../redux/hooks.types";

const NavBar = () => {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <AppBar position="static" sx={{ marginBottom: "20px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* home page */}
        <Link
          to={routes.catalog}
          // as this is repeated, maybe it can be implemented as css class, or using other component
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {companyName}
          </Typography>
        </Link>

        <Box>
          <Link
            to={routes.catalog}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Home />
          </Link>

          {/* cart (checkout) */}
          {/* if there is items on cart, display link */}
          {items.length > 0 && (
            <Link
              to={routes.checkout}
              style={{
                marginLeft: "20px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ShoppingCartIcon />
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
