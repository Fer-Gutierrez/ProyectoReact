import { Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const ServiceForm = ({ handleChange }) => {
  return (
    <div style={{ padding: "1rem 2rem" }}>
      <Typography
        marginTop={"5rem"}
        variant="h3"
        color="secondary.dark"
        fontWeight={600}
      >
        Elegí cuando quisieras recibir tu servicio
      </Typography>
      <h3 style={{ fontWeight: "300" }}>
        Las lecturas de Astrología o Tarot se realizan de forma virtual.
      </h3>
      <h3 style={{ fontWeight: "300" }}>
        Favor de seleccionar una fecha para realizar lectura
      </h3>
      <div>
        <DatePicker
          id="fechaServicio"
          name="fechaServicio"
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
      </div>
      <h3 style={{ fontWeight: "300" }}>
        En caso de no ser posbile, nos comunicaremos con usted para coordinar
        una nueva fecha.
      </h3>
    </div>
  );
};

export default ServiceForm;
