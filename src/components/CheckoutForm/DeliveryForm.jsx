import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

const DeliveryForm = ({ handleChange, errors, values, typeInCart }) => {
  return (
    <div style={{ padding: "1rem 2rem" }}>
      {(typeInCart === "Services" || typeInCart === "Products-Services") && (
        <div fullWidth>
          <Typography
            marginTop={"5rem"}
            marginBottom={"2rem"}
            variant="h3"
            color="secondary.dark"
            fontWeight={600}
          >
            ¿Como queres recibir el tu lectura?
          </Typography>
          <h3 style={{ fontWeight: "300", marginBottom: ".4rem" }}>
            Las lecturas y preguntas de astrologia y tarot seran coordinadas
            segun disponibilidad.
          </h3>
          <h3 style={{ fontWeight: "300", marginBottom: ".4rem" }}>
            Indicanos un comentario para conocer tu disponibilidad de fechas y
            horarios:
          </h3>
          <TextField
            id="disponibilidadServicio"
            color="secondary"
            label="Disponibilidad"
            variant="outlined"
            fullWidth
            name="disponibilidadServicio"
            onChange={handleChange}
            error={errors.disponibilidadServicio && true}
            helperText={errors.disponibilidadServicio}
          />
          <h3>Nos comunicaremos con usted para coordinar una fecha.</h3>
        </div>
      )}
      {(typeInCart === "Products" || typeInCart === "Products-Services") && (
        <div>
          <Typography
            marginTop={"5rem"}
            marginBottom={"2rem"}
            variant="h3"
            color="secondary.dark"
            fontWeight={600}
          >
            ¿Como queres recibir el producto?
          </Typography>
          <FormControl>
            <RadioGroup defaultValue={"REL"}>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button variant="outlined">
                  <FormControlLabel
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
          {values.formaEnvio === "EAD" && (
            <div style={{ marginTop: "1rem" }}>
              <Typography variant="h5" color="primary" fontWeight={400}>
                Completá los datos para el envío:
              </Typography>
              <FormControlLabel
                name="envioInfoComprador"
                onChange={handleChange}
                control={<Checkbox />}
                label="Tomar la misma direccion que complté en datos personales"
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
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    name="calleEntrega"
                    onChange={handleChange}
                    error={
                      errors.calleEntrega && !values.envioInfoComprador && true
                    }
                    helperText={
                      !values.envioInfoComprador && errors.calleEntrega
                    }
                    disabled={values.envioInfoComprador && true}
                    value={
                      values.envioInfoComprador
                        ? values.calleComprador
                        : values.calleEntrega
                    }
                  />
                </Grid>
                <Grid item xs={11} sm={2} lg={1}>
                  <TextField
                    id="alturaEntrega"
                    label="Altura"
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    name="alturaEntrega"
                    onChange={handleChange}
                    error={
                      errors.alturaEntrega && !values.envioInfoComprador && true
                    }
                    helperText={
                      !values.envioInfoComprador && errors.alturaEntrega
                    }
                    disabled={values.envioInfoComprador && true}
                    value={
                      values.envioInfoComprador
                        ? values.alturaComprador
                        : values.alturaEntrega
                    }
                  />
                </Grid>
                <Grid item xs={11} sm={2} lg={1}>
                  <TextField
                    id="pisoEntrega"
                    label="Piso"
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    name="pisoEntrega"
                    onChange={handleChange}
                    error={
                      errors.pisoEntrega && !values.envioInfoComprador && true
                    }
                    helperText={
                      !values.envioInfoComprador && errors.pisoEntrega
                    }
                    disabled={values.envioInfoComprador && true}
                    value={
                      values.envioInfoComprador
                        ? values.pisoComprador
                        : values.pisoEntrega
                    }
                  />
                </Grid>
                <Grid item xs={11} sm={2} lg={1}>
                  <TextField
                    id="deptoEntrega"
                    label="Dpto"
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    name="deptoEntrega"
                    onChange={handleChange}
                    error={
                      errors.deptoEntrega && !values.envioInfoComprador && true
                    }
                    helperText={
                      !values.envioInfoComprador && errors.deptoEntrega
                    }
                    disabled={values.envioInfoComprador && true}
                    value={
                      values.envioInfoComprador
                        ? values.deptoComprador
                        : values.deptoEntrega
                    }
                  />
                </Grid>
                <Grid item xs={11} sm={6} lg={2}>
                  <TextField
                    id="ciudadEntrega"
                    label="Ciudad"
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    name="ciudadEntrega"
                    onChange={handleChange}
                    error={
                      errors.ciudadEntrega && !values.envioInfoComprador && true
                    }
                    helperText={
                      !values.envioInfoComprador && errors.ciudadEntrega
                    }
                    disabled={values.envioInfoComprador && true}
                    value={
                      values.envioInfoComprador
                        ? values.ciudadComprador
                        : values.ciudadEntrega
                    }
                  />
                </Grid>
                <Grid item xs={11} sm={6} lg={2}>
                  <TextField
                    id="provinciaEntrega"
                    label="Provincia"
                    color="secondary"
                    variant="outlined"
                    fullWidth
                    name="provinciaEntrega"
                    onChange={handleChange}
                    error={
                      errors.provinciaEntrega &&
                      !values.envioInfoComprador &&
                      true
                    }
                    helperText={
                      !values.envioInfoComprador && errors.provinciaEntrega
                    }
                    disabled={values.envioInfoComprador && true}
                    value={
                      values.envioInfoComprador
                        ? values.provinciaComprador
                        : values.provinciaEntrega
                    }
                  />
                </Grid>
                <Grid item xs={11} sm={11} lg={11}>
                  <TextField
                    id="observacionesEntrega"
                    color="secondary"
                    label="Observaciones para la entrega"
                    variant="outlined"
                    fullWidth
                    name="observacionesEntrega"
                    onChange={handleChange}
                    error={errors.observacionesEntrega && true}
                    helperText={errors.observacionesEntrega}
                  />
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DeliveryForm;
