import { FormEvent, useContext, useEffect, useState } from "react";

import { ProductContext } from "@/context/product.context";
import { ProductType } from "@/types/product";
import { Box, InputAdornment, Modal as ModalWrapper } from "@mui/material";

import {
  BoxImg,
  ButtonSearchImage,
  ButtonSubmitModal,
  ContentBoxModal,
  IconCloseModal,
  ImagePreviewProduct,
  InputModal,
  WrapperImage
} from "./modal.style";

interface ModalProps {
  modalState: boolean;
  closeModal: () => void;
  onSubmit: (e: FormEvent<HTMLDivElement>, product: ProductType) => void;
  productId: number | undefined;
}

const modal = ({ closeModal, modalState, onSubmit, productId }: ModalProps) => {
  const listProducts = useContext(ProductContext);
  const [product, setProduct] = useState<ProductType>({} as ProductType);

  useEffect(() => {
    setProduct(
      listProducts.find(el => el.id === productId) || ({} as ProductType)
    );
  }, [productId]);

  return (
    <ModalWrapper
      onClose={closeModal}
      open={modalState}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ContentBoxModal
        component="form"
        onSubmit={(e: FormEvent<HTMLDivElement>) => onSubmit(e, product)}
      >
        <BoxImg>
          <Box sx={{ width: "100%" }}>
            <WrapperImage>
              <ImagePreviewProduct
                component="img"
                src={product?.picture || "/img-search.svg"}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/img-search.svg";
                }}
              />

              <ButtonSearchImage variant="contained" component="label">
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
              </ButtonSearchImage>
            </WrapperImage>
          </Box>
          <Box>
            <InputModal
              sx={{
                marginBottom: "30px"
              }}
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              placeholder="Titulo"
              label="Titulo"
              value={product?.title || ""}
              onChange={e =>
                setProduct((oldValue: any) => ({
                  ...oldValue,
                  title: e.target.value
                }))
              }
            />
            <InputModal
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                )
              }}
              inputProps={{
                inputMode: "numeric",
                step: "0.01"
              }}
              placeholder="Preço"
              label="Preço"
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
        </BoxImg>

        <ButtonSubmitModal variant="contained" disableRipple type="submit">
          {product.id ? "Editar produto" : "Criar produto"}
        </ButtonSubmitModal>
        <IconCloseModal onClick={closeModal} fontSize="large" />
      </ContentBoxModal>
    </ModalWrapper>
  );
};

export default modal;
