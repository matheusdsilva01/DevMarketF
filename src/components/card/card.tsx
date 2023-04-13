import { priceFormatter } from "@/util/priceFormatter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardContent } from "@mui/material";

import {
  ButtonAction,
  CardProductActions,
  CardText,
  CardWrapper,
  ImgProduct
} from "./card.style";

const CardProduct = () => {
  return (
    <CardWrapper>
      <ImgProduct
        component="img"
        src="https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75"
      />
      <CardContent
        sx={{
          marginTop: "15px",
          padding: "0 5px"
        }}
      >
        <CardText
          fontSize={16}
          fontWeight={600}
          paddingBottom={0}
          sx={{ padding: "0px" }}
          component="h2"
        >
          Leite de vaca 300ml
        </CardText>
        <CardText fontSize={16} fontWeight={600} component="h3">
          {priceFormatter(300.5)}
        </CardText>
      </CardContent>
      <CardProductActions disableSpacing>
        <ButtonAction variant="text" disableRipple>
          <BorderColorIcon />
        </ButtonAction>
        <ButtonAction variant="text" disableRipple>
          <DeleteIcon />
        </ButtonAction>
      </CardProductActions>
    </CardWrapper>
  );
};

export default CardProduct;
