import { FormEvent, useContext, useEffect, useState } from "react";

import { ProductContext } from "@/context/product.context";
import { ProductType } from "@/types/product";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Button,
  InputAdornment,
  Modal as ModalWrapper,
  Paper,
  TextField
} from "@mui/material";

import theme from "@/styles/theme";

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
    <ModalWrapper
      onClose={closeModal}
      open={modalState}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          width: "90%",
          maxWidth: "800px",
          height: "90%",
          maxHeight: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: theme.colors["gray-08"],
          border: "2px solid #000",
          boxShadow: "24px",
          padding: "60px 80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
          "@media (max-width:780px)": {
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 20px",
            alignItems: "center"
          }
        }}
        component="form"
        onSubmit={(e: FormEvent<HTMLDivElement>) => onSubmit(e, product)}
      >
        <Box
          sx={{
            display: "flex",
            flex: "auto",
            "@media (max-width:780px)": {
              flexDirection: "column",
              justifyContent: "center"
            }
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Paper
              sx={{
                width: "100%",
                marginRight: "60px",
                maxWidth: "324px",
                display: "flex",
                alignItems: "center",
                position: "relative",
                "@media (max-width:780px)": {
                  width: "50%",
                  margin: "auto",
                  marginBottom: "30px"
                }
              }}
            >
              <img
                src={product?.picture || "/img-search.svg"}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/img-search.svg";
                }}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  aspectRatio: "1/1"
                }}
              />

              <Button
                variant="contained"
                component="label"
                sx={{
                  position: "absolute",
                  bottom: "2px",
                  right: "2px",
                  backgroundColor: theme.colors["black-11"],
                  filter: "alpha(opacity=60)",
                  color: theme.colors["text-white"],
                  "&:hover, &:focus": {
                    backgroundColor: theme.colors["secondary-04"]
                  },
                  "&:active": {
                    backgroundColor: theme.colors["secondary-05"]
                  },
                  "@media (max-width:780px)": {
                    fontSize: "10px"
                  }
                }}
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
            <TextField
              sx={{
                backgroundColor: theme.colors["black-09"],
                borderRadius: "4px",
                marginBottom: "30px",
                "& >*": {
                  color: theme.colors["text-white"]
                },
                "& label.Mui-focused": {
                  color: theme.colors["text-white"]
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "white"
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.colors["primary-06"]
                  },
                  "&:hover fieldset": {
                    borderColor: theme.colors["primary-08"]
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.colors["primary-07"]
                  },
                  "& .MuiInputAdornment-positionStart p": {
                    color: theme.colors["text-white"]
                  }
                }
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
            <TextField
              sx={{
                backgroundColor: theme.colors["black-09"],
                borderRadius: "4px",
                "& >*": {
                  color: theme.colors["text-white"]
                },
                "& label.Mui-focused": {
                  color: theme.colors["text-white"]
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "white"
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.colors["primary-06"]
                  },
                  "&:hover fieldset": {
                    borderColor: theme.colors["primary-08"]
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.colors["primary-07"]
                  },
                  "& .MuiInputAdornment-positionStart p": {
                    color: theme.colors["text-white"]
                  }
                }
              }}
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
        </Box>

        <Button
          variant="contained"
          disableRipple
          sx={{
            width: "100%",
            float: "right",
            maxWidth: "173px",
            flex: "none",
            display: "block",
            padding: "10px 25px",
            backgroundColor: theme.colors["secondary-03"],
            filter: "alpha(opacity=60)",
            color: theme.colors["text-white"],
            whiteSpace: "nowrap",
            "&:hover, &:focus": {
              backgroundColor: theme.colors["secondary-04"]
            },
            "&:active": {
              backgroundColor: theme.colors["secondary-05"]
            },
            "@media (max-width:780px)": {
              marginTop: "30px"
            }
          }}
          type="submit"
        >
          {product.id ? "Editar produto" : "Criar produto"}
        </Button>
        <CancelIcon
          onClick={closeModal}
          fontSize="large"
          sx={{ position: "absolute", top: 10, right: 10, cursor: "pointer" }}
        />
      </Box>
    </ModalWrapper>
  );
};

export default modal;
