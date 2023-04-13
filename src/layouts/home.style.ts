import { Container } from "@mui/material";
import styled from "styled-components";

export const HomeContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.colors["gray-01"],
  minHeight: "calc(100vh - 120px)",
  height: "100%",
  padding: "",
  display: "flex",
  justifyContent: "center",
  columnGap: "150px",
  rowGap: "80px",
  flexWrap: "wrap"
}));
