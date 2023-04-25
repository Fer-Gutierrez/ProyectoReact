import { Box, Button, Typography, colors } from "@mui/material";

const Counter = ({ product, counter, increment, decrement }) => {
  return (
    <Box display={"flex"} padding={"10px"}>
      <Button
        style={{
          minWidth: 0,
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 0,
          paddingBottom: 0,
          fontSize: 14,
          margin: 0,
        }}
        variant="contained"
        color="secondary"
        onClick={decrement}
      >
        <i class="bi bi-dash-circle"></i>
      </Button>
      <Typography
        borderRadius={"5px"}
        padding={0.5}
        paddingLeft={1}
        paddingRight={1}
        variant="h5"
        marginLeft={0.5}
        marginRight={0.5}
        backgroundColor={colors.grey[400]}
      >
        {counter}
      </Typography>
      <Button
        style={{
          minWidth: 0,
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 0,
          paddingBottom: 0,
          fontSize: 14,
          margin: 0,
        }}
        variant="contained"
        color="secondary"
        onClick={() => increment(product.stock)}
      >
        <i class="bi bi-plus-circle"></i>
      </Button>
    </Box>
  );
};

export default Counter;
