import { Box, Button, Typography } from "@mui/material";

const Counter = ({ product, counter, increment, decrement }) => {
  return (
    <Box display={"flex"} padding={"10px"}>
      <Button
        style={{ minWidth: 0, padding:8}}
        variant="contained"
        color="secondary"
        onClick={decrement}
      >
        -
      </Button>
      <Typography margin={"5px 10px"}>{counter}</Typography>
      <Button
        style={{ minWidth: 0, padding:8}}
        variant="contained"
        color="secondary"
        onClick={() => increment(product.stock)}
      >
        +
      </Button>
    </Box>
  );
};

export default Counter;
