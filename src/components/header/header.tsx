import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { AppBar, Container } from "@mui/material";

const Header = () => (
  <AppBar
    sx={{
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#061E24",
      height: "120px"
    }}
    position="static"
  >
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "32px"
      }}
      component="nav"
      maxWidth="xl"
    >
      <ShoppingBagIcon sx={{ fontSize: "60px" }} />
      DevMarketF
    </Container>
  </AppBar>
);

export default Header;
