import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from "react";

import { ProductType } from "@/types/product";

type ProductContextType = {
  listProducts: ProductType[];
  setListProducts: Dispatch<SetStateAction<ProductType[]>>;
};

type ProductContextProviderProps = {
  children: ReactNode;
};

export const ProductContext = createContext({} as ProductContextType);

const products = [
  {
    title: "Leite de vaca 300ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75",
    price: 300.5
  },
  {
    title: "Leite de vaca 300ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75",
    price: 300.5
  },
  {
    title: "Leite de vaca 300ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75",
    price: 300.5
  },
  {
    title: "Leite de vaca 300ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75",
    price: 300.5
  }
];

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const [listProducts, setListProducts] = useState<ProductType[]>(products);

  return (
    <ProductContext.Provider value={{ listProducts, setListProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
