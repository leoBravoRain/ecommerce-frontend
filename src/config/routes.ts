export const productDetailsBaseUrl = "/productDetails";

export const routes = {
  catalog: "/",
  productDetails: `${productDetailsBaseUrl}/:productId`,
  checkout: "/checkout",
  paymentMethods: "/payment",
  paymentConfirmation: "/paymentConfirmation",
};
