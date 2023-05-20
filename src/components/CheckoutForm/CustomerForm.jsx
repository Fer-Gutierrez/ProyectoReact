import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "./CheckoutForm.module.css";

const CustomerForm = ({ handleChange, errors }) => {
  return (
    <div>
      <h1 className={styles.titles}>Completá tus datos personales</h1>
      <Grid
        container
        spacing={2}
        padding={"1rem 2rem"}
        flex
        justifyContent={"lefth"}
      >
        <Grid item xs={11} sm={6} lg={6}>
          <TextField
            id="nombreComprador"
            color="secondary"
            label="Nombre"
            variant="outlined"
            fullWidth
            name="nombreComprador"
            onChange={handleChange}
            error={errors.nombreComprador && true}
            helperText={errors.nombreComprador}
          />
        </Grid>
        <Grid item xs={11} sm={6} lg={6}>
          <TextField
            id="apellidoComprador"
            color="secondary"
            label="Apellido"
            variant="outlined"
            fullWidth
            name="apellidoComprador"
            onChange={handleChange}
            error={errors.apellidoComprador && true}
            helperText={errors.apellidoComprador}
          />
        </Grid>
        <Grid padding={"auto"} item xs={11} sm={3} lg={2}>
          <TextField
            id="dniComprador"
            color="secondary"
            label="DNI"
            variant="outlined"
            fullWidth
            name="dniComprador"
            onChange={handleChange}
            error={errors.dniComprador && true}
            helperText={errors.dniComprador}
          />
        </Grid>
        <Grid padding={"auto"} item xs={11} sm={3} lg={2}>
          <TextField
            id="celComprador"
            color="secondary"
            label="Celular"
            variant="outlined"
            placeholder="Sin 0 y sin 15"
            fullWidth
            name="celComprador"
            onChange={handleChange}
            error={errors.celComprador && true}
            helperText={errors.celComprador}
          />
        </Grid>
        <Grid item xs={11} sm={6} lg={8}>
          <TextField
            id="emailComprador"
            color="secondary"
            label="Email"
            variant="outlined"
            fullWidth
            name="emailComprador"
            onChange={handleChange}
            error={errors.emailComprador && true}
            helperText={errors.emailComprador}
          />
        </Grid>
        <Grid item xs={11} sm={6} lg={5}>
          <TextField
            id="calleComprador"
            color="secondary"
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
            color="secondary"
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
            color="secondary"
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
            color="secondary"
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
            color="secondary"
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
            color="secondary"
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
  );
};

export default CustomerForm;
