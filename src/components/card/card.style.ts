import {
  Button,
  Card,
  CardActions,
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
  backgroundColor: theme.colors["primary-08"],
  width: "230px",
  height: "340px",
  padding: "5px",
  borderRadius: "10px",
  borderColor: theme.colors["primary-06"],
  border: "solid 2px",
  position: "relative",
  "&:hover": {
    borderColor: theme.colors["primary-08"]
  },
  "&:focus": {
    borderColor: theme.colors["primary-07"]
  }
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
  // backgroundColor: theme.colors["secondary-03"],
  color: theme.colors["text-white"],
  "&:hover, &:focus": {
    backgroundColor: theme.colors["secondary-04"]
  },
  "&:active": {
    backgroundColor: theme.colors["secondary-05"]
  }
}));

export const CardProductActions = styled(CardActions)(({ theme }) => ({
  position: "absolute",
  right: 0,
  top: 0,
  display: "flex",
  flexDirection: "column"
}));
