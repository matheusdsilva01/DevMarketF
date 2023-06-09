import { useContext } from "react";
import { toast } from "react-toastify";

import { ProductDispatchContext } from "@/context/product.context";
import { ProductType } from "@/types/product";
import { priceFormatter } from "@/util/priceFormatter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardContent } from "@mui/material";

import {
  ButtonAction,
  CardPrductActions,
  CardText,
  CardWrapper,
  ImgProduct
} from "./card.style";

type CardProductProps = {
  onClick: () => void;
} & ProductType;
const CardProduct = ({
  onClick,
  picture,
  price,
  title,
  id
}: CardProductProps) => {
  const dispatch = useContext(ProductDispatchContext);

  const deleteProduct = (productId: number) => {
    dispatch({
      type: "deleted",
      productId: productId
    });
    toast.info("Produto excluido!!!");
  };

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
          component="h2"
        >
          {title}
        </CardText>
        <CardText fontSize={16} fontWeight={600} component="h3">
          {priceFormatter(price)}
        </CardText>
      </CardContent>
      <CardPrductActions disableSpacing>
        <ButtonAction onClick={onClick} variant="text" disableRipple>
          <BorderColorIcon />
        </ButtonAction>
        <ButtonAction
          onClick={() => deleteProduct(id)}
          variant="text"
          disableRipple
        >
          <DeleteIcon />
        </ButtonAction>
      </CardPrductActions>
    </CardWrapper>
  );
};

export default CardProduct;
