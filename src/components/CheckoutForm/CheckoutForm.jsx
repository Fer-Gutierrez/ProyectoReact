import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

const CheckoutForm = () => {
  return (
    <div style={{ padding: "70px 7.5% 0 7.5%" }}>
      <Typography variant="h4" color="primary" fontWeight={600}>
        Elegí como queres recibir el producto
      </Typography>
      <FormControl>
        <RadioGroup>
          <Button variant="outlined">
            <FormControlLabel
              value="EAD"
              control={<Radio />}
              label="Entrega a Domicilio"
            />
          </Button>
          <Button variant="outlined">
            <FormControlLabel
              value="REL"
              control={<Radio />}
              label="Retiro en Local"
            />
          </Button>
        </RadioGroup>
      </FormControl>
      <form action="">
        <Typography variant="h4" color="primary" fontWeight={600}>
          Completá tus datos personales
        </Typography>
        <TextField id="dniComprador" label="DNI" variant="outlined" />
        <TextField id="nombreComprador" label="Nombre" variant="outlined" />
        <TextField id="apellidoComprador" label="Apellido" variant="outlined" />
        <TextField id="emailComprador" label="Email" variant="outlined" />
      </form>
    </div>
  );
};

export default CheckoutForm;
