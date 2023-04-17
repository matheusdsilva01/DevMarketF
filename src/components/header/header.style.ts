import { AppBar, Container, ContainerTypeMap, styled } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import theme from "@/styles/theme";
export const AppBarHeader = styled(AppBar)(({}) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#061E24",
  height: "120px"
}));

export const ContainerNav: OverridableComponent<ContainerTypeMap<{}, "div">> =
  styled(Container)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "32px"
  }));
