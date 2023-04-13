import {
  Button,
  Card,
  CardMedia,
  CardMediaTypeMap,
  CardTypeMap,
  Typography,
  TypographyTypeMap
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import styled from "styled-components";

export const CardWrapper: OverridableComponent<CardTypeMap<{}, "div">> = styled(
  Card
)(({ theme }) => ({
  backgroundColor: "#6E56CF",
  width: "230px",
  height: "340px",
  padding: "5px",
  borderRadius: "10px",
  position: "relative"
}));

export const ImgProduct: OverridableComponent<CardMediaTypeMap<{}, "div">> =
  styled(CardMedia)(() => ({
    width: "100%",
    margin: "auto",
    aspectRatio: "1/1",
    borderRadius: "10px"
  }));

export const CardText: OverridableComponent<TypographyTypeMap<{}, "span">> =
  styled(Typography)(({ theme }) => ({
    color: theme.colors["text-white"]
  }));

export const ButtonAction = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colors["primary-03"],
  "&:hover": {
    backgroundColor: theme.colors["primary-04"]
  },
  "&:active": {
    backgroundColor: theme.colors["primary-05"]
  }
}));
