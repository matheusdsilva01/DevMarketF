import { ProductType } from "@/types/product";
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

type CardProductProps = {
  onClick: (value: string | number) => void;
} & ProductType;
const CardProduct = ({ onClick, picture, price, title }: CardProductProps) => {
  return (
    <CardWrapper>
      <ImgProduct component="img" src={picture} />
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
          {title}
        </CardText>
        <CardText fontSize={16} fontWeight={600} component="h3">
          {priceFormatter(price)}
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
