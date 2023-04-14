import { FormEvent, MouseEvent, useContext, useState } from "react";

import CardProduct from "@/components/card/card";
import Header from "@/components/header/header";
import { ProductContext } from "@/context/product.context";
import { ProductType } from "@/types/product";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  InputAdornment,
  Modal,
  Paper,
  Popover,
  Typography
} from "@mui/material";

import { ContentModal, HomeContainer, Input } from "./home.style";

const HomeLayout = () => {
  const [modalState, setModalState] = useState(false);
  const [idProduct, setIdProduct] = useState<string | number>();
  const { listProducts, setListProducts } = useContext(ProductContext);
  const [product, setProduct] = useState<ProductType>({} as ProductType);
  console.log(listProducts);

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
    if (product) {
      setListProducts(oldValue => [...oldValue, product]);
    }
    closeModal();
  };

  // popover
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Header />
      <HomeContainer maxWidth="xl">
        {listProducts.map((product, i) => (
          <CardProduct key={i} onClick={openModal} {...product} />
        ))}
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none"
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          disableScrollLock
        >
          <Typography>Adicionar produto</Typography>
        </Popover>
        <Button
          disableRipple
          onClick={() => openModal()}
          variant="contained"
          sx={{ position: "absolute", bottom: 25, right: 25 }}
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <AddIcon />
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
