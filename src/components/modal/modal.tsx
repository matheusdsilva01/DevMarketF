import { FormEvent, useContext, useEffect, useState } from "react";

import { ProductContext } from "@/context/product.context";
import { ContentModal, Input } from "@/layouts/home.style";
import { ProductType } from "@/types/product";
import { Box, Button, InputAdornment, Modal, Paper } from "@mui/material";

interface ModalProps {
  modalState: boolean;
  closeModal: () => void;
  onSubmit: (e: FormEvent<HTMLDivElement>, product: ProductType) => void;
  productId: number | undefined;
}

const modal = ({ closeModal, modalState, onSubmit, productId }: ModalProps) => {
  const { listProducts } = useContext(ProductContext);
  const [product, setProduct] = useState<ProductType>({} as ProductType);

  useEffect(() => {
    setProduct(
      listProducts.find(el => el.id === productId) || ({} as ProductType)
    );
  }, [productId]);

  return (
    <Modal
      open={modalState}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ContentModal
        component="form"
        onSubmit={(e: FormEvent<HTMLDivElement>) => onSubmit(e, product)}
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
  );
};

export default modal;
