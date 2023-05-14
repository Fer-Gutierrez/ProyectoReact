import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";

const CardItem = ({ item, navigate, addToCart }) => {
  return (
    <Card>
      <CardActionArea>
        <Link to={`/itemDetail/${item.id}`}>
          <CardMedia
            className={styles.MuiCardMedia}
            component="img"
            height="140"
            image={item.img}
            alt={item.name}
          />
          <CardContent className={styles.MuiCardContent}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="secondary.dark"
              fontWeight="600"
            >
              {item.name}
            </Typography>
            <Typography
              className={styles.lineMaxDescription}
              variant="body2"
              color="primary.light"
              fontWeight="200"
            >
              {item.description}
            </Typography>
            <Typography
              variant="h4"
              color={"primary.main"}
              padding={".3rem"}
              paddingTop={".7rem"}
            >
              $
              {Number(item.price).toLocaleString("es-AR", {
                minimumFractionDigits: 2,
              })}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className={styles.MuiCardActions}>
        <Tooltip title="Agregar 1 al carrito">
          <Button
            onClick={() => addToCart({...item, quantity: 1})}
            className={styles.btnAgregarCarrito}
          >
            <i className={"bi bi-bag-plus-fill"}></i>
          </Button>
        </Tooltip>
        <Tooltip title="Entrar a la ficha del producto">
        <Button
          onClick={() => navigate(`/itemDetail/${item.id}`)}
          variant="contained"
          className={styles.btnAgregarCarrito}
          >
          Ver mas
        </Button>
          </Tooltip>
      </CardActions>
    </Card>
  );
};

export default CardItem;
