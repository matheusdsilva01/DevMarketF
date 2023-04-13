import CardProduct from "@/components/card/card";
import Header from "@/components/header/header";
import { Container } from "@mui/material";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          backgroundColor: "#1C1C1C",
          minHeight: "calc(100vh - 120px)",
          height: "100%",
          padding: "",
          display: "flex",
          justifyContent: "center",
          columnGap: "150px",
          rowGap: "80px",
          flexWrap: "wrap"
        }}
      >
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Container>
    </>
  );
};

export default HomeLayout;
