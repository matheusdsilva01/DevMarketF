import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";

import { ProductType } from "@/types/product";

type ProductContextType = {
  listProducts: ProductType[];
  addProduct: (product: ProductType) => void;
  editProduct: (product: ProductType) => void;
  removeProduct: (productId: number) => void;
};

type ProductContextProviderProps = {
  children: ReactNode;
};
export const ProductContext = createContext({} as ProductContextType);
let id = 0;

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

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const [listProducts, setListProducts] = useState<ProductType[]>(products);

  const addProduct = (product: ProductType) => {
    const newProduct = { ...product, id: id++ };
    setListProducts(oldValue => [newProduct, ...oldValue]);
  };

  const removeProduct = (productId: number) => {
    toast.info("Produto excluido!!!");
    setListProducts(oldValue => oldValue.filter(el => el.id !== productId));
  };

  const editProduct = (product: ProductType) => {
    setListProducts(oldValue =>
      oldValue.map(el => (el.id === product.id ? product : el))
    );
  };

  return (
    <ProductContext.Provider
      value={{ listProducts, addProduct, editProduct, removeProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
