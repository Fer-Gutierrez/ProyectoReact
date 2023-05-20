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
import styles from "./CheckoutForm.module.css";

const DeliveryForm = ({ handleChange, errors, values, typeInCart }) => {
  return (
    <div style={{ padding: "1rem 2rem" }}>
      {(typeInCart === "Services" || typeInCart === "Products-Services") && (
        <div style={{marginBottom: "3rem"}}>
          <h1 className={styles.titles}>¿Como queres recibir el tu lectura?</h1>
          <p >
            Las lecturas y preguntas de astrologia y tarot seran coordinadas
            segun disponibilidad. <br/>
            Indicanos un comentario para conocer tu disponibilidad de fechas y
            horarios:
          </p>
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
          <p style={{marginTop: "1rem", fontWeight: "600"}}>Nos comunicaremos con usted para coordinar una fecha.</p>
        </div>
      )}
      {(typeInCart === "Products" || typeInCart === "Products-Services") && (
        <div>
          <h1 className={styles.titles}>¿Como queres recibir el producto?</h1>
          <FormControl style={{width: "100%"}}>
            <RadioGroup  defaultValue={"REL"}>
              <div style={{ marginTop: "1rem", justifyContent:"center", display: "flex", gap: "10px" }}>
                <Button style={{padding: "1rem"}} variant="outlined">
                  <FormControlLabel
                   style={{margin: 0}}
                    name="formaEnvio"
                    onChange={handleChange}
                    value="REL"
                    control={<Radio style={{padding: ".5rem"}} />}
                    label={
                      <div
                        className={styles.btnFormaEnvio}
                      >
                        <AddBusinessRoundedIcon fontSize="large" /> Retiro en
                        Local
                      </div>
                    }
                  />
                </Button>
                <Button style={{padding: "1rem"}} variant="outlined">
                  <FormControlLabel
                    style={{margin: 0}}
                    name="formaEnvio"
                    onChange={handleChange}
                    value="EAD"
                    control={<Radio style={{padding: ".5rem"}} />}
                    label={
                      <div
                      className={styles.btnFormaEnvio}
                      >
                        <LocalShippingRoundedIcon fontSize="large" /> Entrega a
                        domicilio
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
                <Grid item xs={11} sm={12} lg={12}>
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
