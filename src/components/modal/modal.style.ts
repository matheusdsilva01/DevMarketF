import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Button,
  ButtonTypeMap,
  CardMedia,
  CardMediaTypeMap,
  Paper,
  TextField,
  styled
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import theme from "@/styles/theme";

export const ContentBoxModal = styled(Box)(() => ({
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
}));

export const BoxImg = styled(Box)(() => ({
  display: "flex",
  flex: "auto",
  "@media (max-width:780px)": {
    flexDirection: "column",
    justifyContent: "center"
  }
}));

export const WrapperImage = styled(Paper)(() => ({
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
}));

export const ImagePreviewProduct: OverridableComponent<
  CardMediaTypeMap<{}, "div">
> = styled(CardMedia)(() => ({
  width: "100%",
  objectFit: "cover",
  aspectRatio: "1/1"
}));

export const ButtonSearchImage: OverridableComponent<
  ButtonTypeMap<{}, "button">
> = styled(Button)(() => ({
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
}));

export const InputModal = styled(TextField)(() => ({
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
      borderWidth: "2px",
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
}));

export const ButtonSubmitModal = styled(Button)(() => ({
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
}));

export const IconCloseModal = styled(CancelIcon)(() => ({
  position: "absolute",
  top: 10,
  right: 10,
  cursor: "pointer",
  transition: "all 0.3s",
  "&:hover": {
    filter: "drop-shadow(0 0 5px #000)"
  }
}));
