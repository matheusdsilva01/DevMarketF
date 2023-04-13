import { AppBar, Container, ContainerTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import styled from "styled-components";

export const AppBarHeader = styled(AppBar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.colors["primary-02"],
  height: "120px"
}));

export const ContainerNav: OverridableComponent<ContainerTypeMap<{}, "div">> =
  styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "32px"
  }));
