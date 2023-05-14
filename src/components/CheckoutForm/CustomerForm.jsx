import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const CustomerForm = ({ handleChange, errors }) => {
  return (
    <div>
      <Typography
        marginTop={"5rem"}
        variant="h3"
        color="secondary.dark"
        fontWeight={600}
      >
        Completá tus datos personales
      </Typography>
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
  );
};

export default CustomerForm;
