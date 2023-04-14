import { useContext } from "react";

import { ProductContext } from "@/context/product.context";
import { ProductType } from "@/types/product";
import { priceFormatter } from "@/util/priceFormatter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

import theme from "@/styles/theme";

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
  const { removeProduct } = useContext(ProductContext);
  return (
    <Card
      sx={{
        backgroundColor: "#00647D",
        transition: "all 0.3s",
        width: "230px",
        height: "340px",
        padding: "5px",
        borderRadius: "10px",
        borderColor: "#064150",
        border: "solid 2px",
        position: "relative",
        "&:hover": {
          borderColor: "#00647D"
        },
        "&:focus": {
          borderColor: "#045063"
        }
      }}
    >
      <CardMedia
        sx={{
          width: "100%",
          margin: "auto",
          aspectRatio: "1/1",
          borderRadius: "10px"
        }}
        component="img"
        src={picture}
      />
      <CardContent
        sx={{
          marginTop: "15px",
          padding: "0 5px"
        }}
      >
        <Typography
          fontSize={16}
          fontWeight={600}
          paddingBottom={0}
          sx={{ padding: "0px" }}
          component="h2"
        >
          {title}
        </Typography>
        <Typography fontSize={16} fontWeight={600} component="h3">
          {priceFormatter(price)}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          display: "flex",
          rowGap: "5px",
          flexDirection: "column"
        }}
        disableSpacing
      >
        <Button
          sx={{
            width: "min-content",
            backgroundColor: theme.colors["black-04"],
            filter: "alpha(opacity=60)",
            color: theme.colors["text-white"],
            "&:hover, &:focus": {
              backgroundColor: theme.colors["secondary-04"]
            },
            "&:active": {
              backgroundColor: theme.colors["secondary-05"]
            }
          }}
          onClick={onClick}
          variant="text"
          disableRipple
        >
          <BorderColorIcon />
        </Button>
        <Button
          sx={{
            width: "min-content",
            backgroundColor: theme.colors["black-04"],
            filter: "alpha(opacity=60)",
            color: theme.colors["text-white"],
            "&:hover, &:focus": {
              backgroundColor: theme.colors["secondary-04"]
            },
            "&:active": {
              backgroundColor: theme.colors["secondary-05"]
            }
          }}
          onClick={() => removeProduct(id)}
          variant="text"
          disableRipple
        >
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
