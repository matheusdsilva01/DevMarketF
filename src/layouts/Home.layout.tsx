import { FormEvent, MouseEvent, useContext, useState } from "react";
import { toast } from "react-toastify";

import CardProduct from "@/components/card/card";
import Header from "@/components/header/header";
import Modal from "@/components/modal/modal";
import {
  ProductContext,
  ProductDispatchContext
} from "@/context/product.context";
import { ProductType } from "@/types/product";
import AddIcon from "@mui/icons-material/Add";
import { Popover } from "@mui/material";

import theme from "@/styles/theme";

import { ButtonAddProduct, HomeContainer, TextPopover } from "./home.style";
const PaperStylePopover = {
  backgroundColor: theme.colors["black-12"],
  borderRadius: "5px"
};
const HomeLayout = () => {
  const [modalState, setModalState] = useState(false);
  const [idProduct, setIdProduct] = useState<number>();
  const listProducts = useContext(ProductContext);
  const dispatch = useContext(ProductDispatchContext);

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

    if (!product.picture || !product.price || product.title === "") {
      toast.error("Preencha todos os campos!!!");
    } else {
      if (product.id) {
        toast.success("Produto editado com sucesso!!!");
        dispatch({
          type: "changed",
          product
        });
      } else {
        toast.success("Produto criado com sucesso!!!");
        dispatch({
          type: "added",
          product
        });
      }
      closeModal();
      resetAllValuesInput();
    }
  };

  const resetAllValuesInput = () => {
    setIdProduct(0);
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
            sx: PaperStylePopover
          }}
          disableScrollLock
        >
          <TextPopover>Adicionar produto</TextPopover>
        </Popover>
        <ButtonAddProduct
          disableRipple
          onClick={() => openModal()}
          variant="contained"
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <AddIcon sx={{ fontSize: 50 }} />
        </ButtonAddProduct>
        <Modal
          closeModal={closeModal}
          modalState={modalState}
          onSubmit={onSubmit}
          productId={idProduct}
        />
      </HomeContainer>
    </>
  );
};

export default HomeLayout;
