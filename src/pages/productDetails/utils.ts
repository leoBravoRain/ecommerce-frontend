import { CartItemType } from "../../redux/reducers/cart/types";
import { ProductType } from "../../services/products/types";

// receive items of cart and add the new item checking if it already exists
export const getNewItems = (
  product: ProductType | undefined,
  items: CartItemType[],
  itemQuantity: number,
  productId: string | undefined
) => {
  if (!!product) {
    let newItems = items;

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
      // flag to check if element already exists
      let elementExists = false;

      // check if element exists in array
      newItems = newItems.map((item) => {
        // if element is already in array
        if (item._id === productId) {
          elementExists = true;
          // return element increasing quantity
          return {
            ...item,
            quantity: item.quantity + itemQuantity,
          };
        }
        return item;
      });

      // if element is not in array
      if (!elementExists)
        //   add element into array
        newItems.push({
          ...product,
          quantity: itemQuantity,
        });
    }

    // return array
    return newItems;
  }
};
