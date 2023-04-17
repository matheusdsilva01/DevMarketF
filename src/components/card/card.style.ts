import {
  Button,
  Card,
  CardActions,
  CardMedia,
  CardMediaTypeMap,
  CardTypeMap,
  Typography,
  TypographyTypeMap,
  styled
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import theme from "@/styles/theme";

export const CardWrapper: OverridableComponent<CardTypeMap<{}, "div">> = styled(
  Card
)(() => ({
  position: "relative",
  backgroundColor: "#00647D",
  transition: "all 0.3s",
  width: "230px",
  height: "340px",
  padding: "5px",
  borderRadius: "10px",
  borderColor: "#064150",
  border: "solid 2px",
  "&:hover": {
    borderColor: "#00647D"
  },
  "&:focus": {
    borderColor: "#045063"
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
  styled(Typography)(() => ({ padding: "0px" }));

export const CardPrductActions = styled(CardActions)(() => ({
  position: "absolute",
  right: 0,
  top: 0,
  display: "flex",
  rowGap: "5px",
  flexDirection: "column"
}));

export const ButtonAction = styled(Button)(() => ({
  width: "min-content",
  backgroundColor: theme.colors["black-04"],
  filter: "alpha(opacity=60)",
  color: theme.colors["text-white"],
  "&:hover, &:focus": {
    backgroundColor: theme.colors["secondary-04"]
  },
  "&:active": {
    backgroundColor: theme.colors["secondary-05"]
  }
}));
