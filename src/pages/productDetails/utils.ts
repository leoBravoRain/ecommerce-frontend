import { CartItemType } from "../../redux/reducers/cart/types";
import { ProductType } from "../../services/products/types";

// receive items of cart and add the new item checking if it already exists
export const getNewItems = (
  product: ProductType | undefined,
  items: CartItemType[],
  itemQuantity: number,
  productIsOnCart: {
    id: number;
    isIn: boolean;
  }
) => {
  if (!!product) {
    let newItems = [...items];

    // if items is empty
    if (newItems.length === 0) {
      newItems = [
        {
          ...product,
          quantity: itemQuantity,
        },
      ];
    }

    // if items has any element
    else {
      if (productIsOnCart.isIn) {
        newItems[productIsOnCart.id] = {
          ...newItems[productIsOnCart.id],
          quantity: itemQuantity,
        };
      } else {
        newItems.push({
          ...product,
          quantity: itemQuantity,
        });
      }
    }

    // return array
    return newItems;
  }
};
