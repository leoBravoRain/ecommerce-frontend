export const productDetailsBaseUrl = "/productDetails";

export const routes = {
  catalog: "/catalog",
  productDetails: `${productDetailsBaseUrl}/:productId`,
  checkout: "/checkout",
  paymentMethods: '/payment',
  paymentConfirmation: '/paymentConfirmation'
};
