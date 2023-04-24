import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import styles from "./CardItem.module.css";

const CardItem = ({ item }) => {
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          className={styles.MuiCardMedia}
          component="img"
          height="140"
          image={item.img}
          alt={item.name}
        />
        <CardContent className={styles.MuiCardContent}>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography className={styles.lineClamp} variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.MuiCardActions} >
        <Button className={styles.btnAgregarCarrito}>
          <i class="bi bi-bag-plus-fill"></i>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
