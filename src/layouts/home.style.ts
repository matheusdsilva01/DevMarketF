import { Box, Container, TextField } from "@mui/material";
import styled from "styled-components";

export const HomeContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.colors["gray-01"],
  minHeight: "calc(100vh - 120px)",
  height: "100%",
  padding: "50px 0",
  display: "flex",
  justifyContent: "center",
  columnGap: "150px",
  rowGap: "80px",
  flexWrap: "wrap"
}));

export const ContentModal = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "800px",
  height: "600px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.colors["gray-08"],
  border: "2px solid #000",
  boxShadow: "24px",
  padding: "60px 80px"
}));

export const Input = styled(TextField)(({ theme }) => ({
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
}));
