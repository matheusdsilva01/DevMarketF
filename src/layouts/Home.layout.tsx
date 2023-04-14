import { FormEvent, MouseEvent, useContext, useState } from "react";

import CardProduct from "@/components/card/card";
import Header from "@/components/header/header";
import Modal from "@/components/modal/modal";
import { ProductContext } from "@/context/product.context";
import { ProductType } from "@/types/product";
import AddIcon from "@mui/icons-material/Add";
import { Button, Container, Popover, Typography } from "@mui/material";

import theme from "@/styles/theme";

const HomeLayout = () => {
  const [modalState, setModalState] = useState(false);
  const [idProduct, setIdProduct] = useState<number>();
  const { listProducts, addProduct, editProduct } = useContext(ProductContext);

  const openModal = (id?: number) => {
    setIdProduct(id);
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
    setIdProduct(undefined);
  };

  const onSubmit = (e: FormEvent<HTMLDivElement>, product: ProductType) => {
    e.preventDefault();
    if (product) {
      if (product.id) {
        editProduct(product);
      } else {
        addProduct(product);
      }
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
      <Container
        sx={{
          backgroundColor: theme.colors["gray-01"],
          minHeight: "calc(100vh - 120px)",
          height: "100%",
          padding: "50px 0",
          display: "flex",
          justifyContent: "center",
          columnGap: "150px",
          rowGap: "80px",
          flexWrap: "wrap"
        }}
        maxWidth="xl"
      >
        {listProducts.map(product => (
          <CardProduct
            key={product.id}
            onClick={() => openModal(product.id)}
            {...product}
          />
        ))}
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none"
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: 145
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          PaperProps={{
            sx: {
              backgroundColor: theme.colors["black-12"],
              borderRadius: "10px"
            }
          }}
          disableScrollLock
        >
          <Typography
            sx={{
              padding: "10px"
            }}
          >
            Adicionar produto
          </Typography>
        </Popover>
        <Button
          disableRipple
          onClick={() => openModal()}
          variant="contained"
          sx={{
            position: "absolute",
            bottom: 25,
            right: 25,
            width: 64,
            height: 64,
            textAlign: "center",
            borderRadius: "100%",
            backgroundColor: theme.colors["secondary-06"],
            filter: "alpha(opacity=60)",
            color: theme.colors["text-white"],
            "&:hover, &:focus": {
              backgroundColor: theme.colors["secondary-07"]
            },
            "&:active": {
              backgroundColor: theme.colors["secondary-08"]
            }
          }}
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <AddIcon sx={{ fontSize: 50 }} />
        </Button>
        <Modal
          closeModal={closeModal}
          modalState={modalState}
          onSubmit={onSubmit}
          productId={idProduct}
        />
      </Container>
    </>
  );
};

export default HomeLayout;
