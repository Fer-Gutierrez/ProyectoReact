import {
  Button,
  Grid,
  FormControl,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";

const CheckoutForm = ({
  formaEnvio,
  handleChange,
  handleSubmit,
  errors,
  alternarEnvio,
}) => {
  return (
    <div style={{ padding: "70px 7.5% 0 7.5%" }}>
      <Typography variant="h3" color="secondary.dark" fontWeight={600}>
        Resumen de tu pedido
      </Typography>
      <div style={{ padding: ".3rem 2rem" }}>
        <Typography variant="h6" color="primary" fontWeight={400}>
          Total de compra:
        </Typography>
        <Typography variant="h6" color="primary" fontWeight={400}>
          Productos:
        </Typography>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <Typography
          marginTop={"5rem"}
          variant="h3"
          color="secondary.dark"
          fontWeight={600}
        >
          Completá tus datos personales
        </Typography>
        <div>
          <Grid
            container
            spacing={2}
            padding={"1rem 2rem"}
            flex
            justifyContent={"lefth"}
          >
            <Grid item xs={11} sm={8} lg={12}>
              <TextField
                id="emailComprador"
                label="Email"
                variant="outlined"
                fullWidth
                name="emailComprador"
                onChange={handleChange}
                error={errors.emailComprador && true}
                helperText={errors.emailComprador}
              />
            </Grid>
            <Grid padding={"auto"} item xs={11} sm={4} lg={2}>
              <TextField
                id="dniComprador"
                label="DNI"
                variant="outlined"
                fullWidth
                name="dniComprador"
                onChange={handleChange}
                error={errors.dniComprador && true}
                helperText={errors.dniComprador}
              />
            </Grid>
            <Grid item xs={11} sm={6} lg={5}>
              <TextField
                id="nombreComprador"
                label="Nombre"
                variant="outlined"
                fullWidth
                name="nombreComprador"
                onChange={handleChange}
                error={errors.nombreComprador && true}
                helperText={errors.nombreComprador}
              />
            </Grid>
            <Grid item xs={11} sm={6} lg={5}>
              <TextField
                id="apellidoComprador"
                label="Apellido"
                variant="outlined"
                fullWidth
                name="apellidoComprador"
                onChange={handleChange}
                error={errors.apellidoComprador && true}
                helperText={errors.apellidoComprador}
              />
            </Grid>
            <Grid item xs={11} sm={6} lg={5}>
              <TextField
                id="calleComprador"
                label="Calle"
                variant="outlined"
                fullWidth
                name="calleComprador"
                onChange={handleChange}
                error={errors.calleComprador && true}
                helperText={errors.calleComprador}
              />
            </Grid>
            <Grid item xs={11} sm={2} lg={1}>
              <TextField
                id="alturaComprador"
                label="Altura"
                variant="outlined"
                fullWidth
                name="alturaComprador"
                onChange={handleChange}
                error={errors.alturaComprador && true}
                helperText={errors.alturaComprador}
              />
            </Grid>
            <Grid item xs={11} sm={2} lg={1}>
              <TextField
                id="pisoComprador"
                label="Piso"
                variant="outlined"
                fullWidth
                name="pisoComprador"
                onChange={handleChange}
                error={errors.pisoComprador && true}
                helperText={errors.pisoComprador}
              />
            </Grid>
            <Grid item xs={11} sm={2} lg={1}>
              <TextField
                id="deptoComprador"
                label="Dpto"
                variant="outlined"
                fullWidth
                name="deptoComprador"
                onChange={handleChange}
                error={errors.deptoComprador && true}
                helperText={errors.deptoComprador}
              />
            </Grid>
            <Grid item xs={11} sm={6} lg={2}>
              <TextField
                id="ciudadComprador"
                label="Ciudad"
                variant="outlined"
                fullWidth
                name="ciudadComprador"
                onChange={handleChange}
                error={errors.ciudadComprador && true}
                helperText={errors.ciudadComprador}
              />
            </Grid>
            <Grid item xs={11} sm={6} lg={2}>
              <TextField
                id="provinciaComprador"
                label="Provincia"
                variant="outlined"
                fullWidth
                name="provinciaComprador"
                onChange={handleChange}
                error={errors.provinciaComprador && true}
                helperText={errors.provinciaComprador}
              />
            </Grid>
          </Grid>
        </div>
        <Typography
          marginTop={"5rem"}
          variant="h3"
          color="secondary.dark"
          fontWeight={600}
        >
          Elegí como queres recibir el producto
        </Typography>
        <div style={{ padding: "1rem 2rem" }}>
          <FormControl>
            <RadioGroup defaultValue={formaEnvio}>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button variant="outlined">
                  <FormControlLabel
                    onClick={alternarEnvio}
                    name="formaEnvio"
                    onChange={handleChange}
                    value="EAD"
                    control={<Radio />}
                    label={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <LocalShippingRoundedIcon fontSize="large" /> Entrega a
                        domicilio
                      </div>
                    }
                  />
                </Button>
                <Button variant="outlined">
                  <FormControlLabel
                    onClick={alternarEnvio}
                    name="formaEnvio"
                    onChange={handleChange}
                    value="REL"
                    control={<Radio />}
                    label={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <AddBusinessRoundedIcon fontSize="large" /> Retiro en
                        Local
                      </div>
                    }
                  />
                </Button>
              </div>
            </RadioGroup>
          </FormControl>
          {formaEnvio === "EAD" && (
            <div style={{ marginTop: "1rem" }}>
              <Typography variant="h5" color="primary" fontWeight={400}>
                Completá los datos para el envío:
              </Typography>
              <FormControlLabel
                name="envioInfoComprador"
                onChange={handleChange}
                control={<Checkbox />}
                label="Misma direccion que datos personales"
              />
              <Grid
                container
                spacing={2}
                padding={"1rem 0"}
                flex
                justifyContent={"lefth"}
              >
                <Grid item xs={11} sm={6} lg={5}>
                  <TextField
                    id="calleEntrega"
                    label="Calle"
                    variant="outlined"
                    fullWidth
                    name="calleEntrega"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={11} sm={2} lg={1}>
                  <TextField
                    id="alturaEntrega"
                    label="Altura"
                    variant="outlined"
                    fullWidth
                    name="alturaEntrega"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={11} sm={2} lg={1}>
                  <TextField
                    id="pisoEntrega"
                    label="Piso"
                    variant="outlined"
                    fullWidth
                    name="pisoEntrega"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={11} sm={2} lg={1}>
                  <TextField
                    id="deptoEntrega"
                    label="Dpto"
                    variant="outlined"
                    fullWidth
                    name="deptoEntrega"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={11} sm={6} lg={2}>
                  <TextField
                    id="ciudadEntrega"
                    label="Ciudad"
                    variant="outlined"
                    fullWidth
                    name="ciudadEntrega"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={11} sm={6} lg={2}>
                  <TextField
                    id="provinciaEntrega"
                    label="Provincia"
                    variant="outlined"
                    fullWidth
                    name="provinciaEntrega"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </div>
          )}
        </div>
        <div
          style={{
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{
              padding: "10px",
              fontSize: 14,
            }}
          >
            Comprar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
