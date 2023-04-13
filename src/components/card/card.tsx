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

interface CardProductProps {
  onClick: (value: string | number) => void;
}
const CardProduct = ({ onClick }: CardProductProps) => {
  const dataProduct = {
    id: 1,
    title: "Leite de vaca 300ml",
    picture:
      "https://freshmania.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ffm-public-dev%2Fskus_v2%2FLT003%2F1.jpg&w=640&q=75",
    price: 300.5
  };
  return (
    <CardWrapper>
      <ImgProduct component="img" src={dataProduct.picture} />
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
          {dataProduct.title}
        </CardText>
        <CardText fontSize={16} fontWeight={600} component="h3">
          {priceFormatter(dataProduct.price)}
        </CardText>
      </CardContent>
      <CardProductActions disableSpacing>
        <ButtonAction onClick={() => onClick(1)} variant="text" disableRipple>
          <BorderColorIcon />
        </ButtonAction>
        <ButtonAction onClick={() => onClick(1)} variant="text" disableRipple>
          <DeleteIcon />
        </ButtonAction>
      </CardProductActions>
    </CardWrapper>
  );
};

export default CardProduct;
