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

const CardItem = ({ item }) => {
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
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className={styles.MuiCardActions}>
        <Tooltip title="Agregar al carrito">
          <Button className={styles.btnAgregarCarrito}>
            <i className="bi bi-bag-plus-fill"></i>
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default CardItem;
