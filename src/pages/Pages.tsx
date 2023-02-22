import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { routes } from "../config/routes";

import Catalog from "./catalog/Catalog";
import NotFound from "./notFound/notFound";

const Pages = () => (
  <Router>
    <Routes>
      <Route path={routes.catalog} element={<Catalog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default Pages;
