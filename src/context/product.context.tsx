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

const products = [
  {
    id: 1,
    title: "Leite de vaca 300ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75",
    price: 300.5
  },
  {
    id: 2,
    title: "Leite de vaca 300ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75",
    price: 300.5
  },
  {
    id: 3,
    title: "Leite de vaca 300ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75",
    price: 300.5
  },
  {
    id: 4,
    title: "Leite de vaca 300ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75",
    price: 300.5
  }
];

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const [listProducts, setListProducts] = useState<ProductType[]>(products);

  const addProduct = (product: ProductType) => {
    const newProduct = { ...product, id: listProducts.length + 1 };
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
