import { ProductType } from "@/types/product";

type addOrEditReducer = {
  type: "added" | "changed";
  product: any;
};
type deleteReducer = {
  type: "deleted";
  productId: number;
};
export type productReducerProps = addOrEditReducer | deleteReducer;

export const productReducer = (
  state: ProductType[],
  action: productReducerProps
) => {
  switch (action.type) {
    case "added": {
      const newProduct = { id: id++, ...action.product };
      return [newProduct, ...state];
    }
    case "changed": {
      return state.map(el =>
        el.id === action.product.id ? action.product : el
      );
    }
    case "deleted": {
      return state.filter(el => el.id !== action.productId);
    }
    default: {
      return state;
    }
  }
};

let id = 0;
