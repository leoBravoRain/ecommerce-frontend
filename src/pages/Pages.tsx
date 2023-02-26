import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { routes } from "../config/routes";

import Catalog from "./catalog/Catalog";
import ProductDetails from "./productDetails/ProductDetails";
import Checkout from "./checkout/Checkout";
import PaymentMethod from "./paymentMethod/PaymentMethod";
import PaymentConfirmation from "./paymentConfirmation/PaymentConfirmation";
import NotFound from "./notFound/notFound";
import NavBar from "../layout/NavBar";

const Pages = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path={routes.catalog} element={<Catalog />} />
      <Route path={routes.productDetails} element={<ProductDetails />} />
      <Route path={routes.checkout} element={<Checkout />} />
      <Route path={routes.paymentMethods} element={<PaymentMethod />} />
      <Route
        path={routes.paymentConfirmation}
        element={<PaymentConfirmation />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default Pages;
