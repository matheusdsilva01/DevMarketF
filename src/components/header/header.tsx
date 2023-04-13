import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { AppBarHeader, ContainerNav } from "./header.style";

const Header = () => (
  <AppBarHeader position="static">
    <ContainerNav component="nav" maxWidth="xl">
      <ShoppingBagIcon sx={{ fontSize: "60px" }} />
      DevMarketF
    </ContainerNav>
  </AppBarHeader>
);

export default Header;
