import { FormEvent, useState } from "react";

import CardProduct from "@/components/card/card";
import Header from "@/components/header/header";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Modal,
  Paper
} from "@mui/material";

import { ContentModal, HomeContainer, Input } from "./home.style";

type productType = {
  title: string;
  price: number;
  picture: string;
};

const HomeLayout = () => {
  const [modalState, setModalState] = useState(false);
  const [idProduct, setIdProduct] = useState<string | number>();
  const [product, setProduct] = useState<productType | any>();

  const openModal = (id?: number | string) => {
    setModalState(true);
    setIdProduct(id);
  };
  const closeModal = () => {
    setModalState(false);
    setIdProduct(undefined);
  };
  const onSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(product);
    closeModal();
  };
  return (
    <>
      <Header />
      <HomeContainer maxWidth="xl">
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <CardProduct onClick={openModal} />
        <Button
          disableRipple
          onClick={() => openModal()}
          variant="contained"
          sx={{ position: "absolute", bottom: 25, right: 25 }}
        >
          IconAdd
        </Button>
        <Modal
          open={modalState}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ContentModal
            component="form"
            onSubmit={(e: FormEvent<HTMLDivElement>) => onSubmit(e)}
          >
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "100%" }}>
                <Paper
                  sx={{
                    width: "324px",
                    height: "324px",
                    display: "flex",
                    alignItems: "center",
                    position: "relative"
                  }}
                >
                  <img
                    src={product?.picture || "/imgError.svg"}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = "/imgError.svg";
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ position: "absolute", bottom: "2px", right: "2px" }}
                  >
                    Carregar imagem
                    <input
                      onChange={({ target: { files } }) => {
                        if (files) {
                          setProduct((oldState: any) => ({
                            ...oldState,
                            picture: URL.createObjectURL(files[0])
                          }));
                        }
                      }}
                      accept="image/*"
                      type="file"
                      hidden
                    />
                  </Button>
                </Paper>
              </Box>
              <Box>
                <Input
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  placeholder="Title"
                  label="Title"
                  value={product?.title || ""}
                  onChange={e =>
                    setProduct((oldValue: any) => ({
                      ...oldValue,
                      title: e.target.value
                    }))
                  }
                />
                <Input
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    )
                  }}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*"
                  }}
                  placeholder="Price"
                  label="Price"
                  type="number"
                  value={product?.price || ""}
                  onChange={e =>
                    setProduct((oldValue: any) => ({
                      ...oldValue,
                      price: Number(e.target.value)
                    }))
                  }
                />
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{ flex: "none", display: "block", float: "right" }}
              type="submit"
            >
              submit
            </Button>
          </ContentModal>
        </Modal>
      </HomeContainer>
    </>
  );
};

export default HomeLayout;
