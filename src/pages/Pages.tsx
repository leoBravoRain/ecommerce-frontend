import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { routes } from "../config/routes";

import Catalog from "./catalog/Catalog";
import ProductDetails from "./productDetails/ProductDetails";
import Checkout from "./checkout/Checkout";
import NotFound from "./notFound/notFound";

const Pages = () => (
  <Router>
    <Routes>
      <Route path={routes.catalog} element={<Catalog />} />
      <Route path={routes.productDetails} element={<ProductDetails />} />
      <Route path={routes.checkout} element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default Pages;
