import ProductContextProvider from "@/context/product.context";
import HomeLayout from "@/layouts/Home.layout";

export default function Home() {
  return (
    <>
      <ProductContextProvider>
        <HomeLayout />
      </ProductContextProvider>
    </>
  );
}
