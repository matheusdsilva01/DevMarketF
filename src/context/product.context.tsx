import { Dispatch, ReactNode, createContext, useReducer } from "react";

import {
  productReducer,
  productReducerProps
} from "@/reducers/product.reducer";
import { ProductType } from "@/types/product";

type ProductContextType = ProductType[];
type ProductDispatchType = Dispatch<productReducerProps>;

type ProductContextProviderProps = {
  children: ReactNode;
};
export const ProductContext = createContext({} as ProductContextType);

export const ProductDispatchContext = createContext({} as ProductDispatchType);

let id = 0;

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const [listProduct, dispatch] = useReducer(productReducer, products);

  return (
    <ProductContext.Provider value={listProduct}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
};

const products = [
  {
    id: id++,
    title: "Leite de vaca 300ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75",
    price: 300.5
  },
  {
    id: id++,
    title: "Ovo Caipira Grande 30 unidades",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FNG002%2F1.jpg&w=640&q=75",
    price: 37.4
  },
  {
    id: id++,
    title: "Leite integral 1L",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fimg_tmp%2F3192bab6529b4435bd60f071ed90a448_f0fad34475b3454e8a2e0ecdd2a1c519.jpg&w=640&q=75",
    price: 9.86
  },
  {
    id: id++,
    title: "Leite fermentado 1L",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT004%2F1.jpg&w=640&q=75",
    price: 18.7
  },
  {
    id: id++,
    title: "Café com leite 500ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT006%2F1.jpg&w=640&q=75",
    price: 18.9
  }
];

export default ProductContextProvider;
