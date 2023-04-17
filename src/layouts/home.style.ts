import { Button, Container, Typography, styled } from "@mui/material";

import theme from "@/styles/theme";

export const HomeContainer = styled(Container)(() => ({
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

export const ButtonAddProduct = styled(Button)(() => ({
  position: "fixed",
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
}));

export const TextPopover = styled(Typography)(() => ({
  padding: "5px 15px"
}));
