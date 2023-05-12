import React from "react";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const CheckoutFormContainer = () => {
  const [formaEnvio, setFormaEnvio] = useState("EAD"); //REL
  const [envioInfoComprador, SetEnvioInfoComprador] = useState(false);
  const [validarAlCambiar, setValidarAlCambiar] = useState(false);

  const { handleSubmit, handleChange, errors, isValid } = useFormik({
    initialValues: {
      emailComprador: "",
      dniComprador: "",
      nombreComprador: "",
      apellidoComprador: "",
      calleComprador: "",
      alturaComprador: "",
      pisoComprador: 0,
      deptoComprador: "",
      ciudadComprador: "",
      provinciaComprador: "",
      formaEnvio: formaEnvio,
      envioInfoComprador: envioInfoComprador,
      calleEntrega: "",
      alturaEntrega: "",
      pisoEntrega: "",
      deptoEntrega: "",
      ciudadEntrega: "",
      provinciaEntrega: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object().shape({
      emailComprador: Yup.string()
        .email("Debe ser un email válido")
        .required("Esta campo es requerido")
        .max(50, "No debe superar 50 caracteres"),
      dniComprador: Yup.number("Debe ser numérico de 8 caracteres.")
        .max(99999999, "Debe tener 8 caracteres")
        .min(10000000, "Debe tener 8 caracteres")
        .required("Esta campo es requerido"),
      nombreComprador: Yup.string()
        .required("Esta campo es requerido")
        .max(50, "No debe superar 50 caracteres"),
      apellidoComprador: Yup.string()
        .max(50, "No puede superar 50 caracteres")
        .required("Esta campo es requerido"),
      calleComprador: Yup.string()
        .required("Esta campo es requerido")
        .max(50, "No debe superar 50 caracteres"),
      alturaComprador: Yup.number("El campo debe ser numérico").required(
        "Esta campo es requerido"
      ),
      pisoComprador: Yup.number().optional().nullable(),
      deptoComprador: Yup.string().nullable(),
      ciudadComprador: Yup.string()
        .max(50, "No debe superar 50 caracteres")
        .required("Esta campo es requerido"),
      provinciaComprador: Yup.string()
        .max(50, "No debe superar 50 caracteres")
        .required("Esta campo es requerido"),
    }),

    validateOnChange: validarAlCambiar,
  });

  //Si hay errores se activa validateOnChange:
  useEffect(() => {
    setValidarAlCambiar(!isValid);
  }, [isValid]);

  const alternarEnvio = (e) => {
    setFormaEnvio(e.target.value);
  };

  return (
    <div>
      <CheckoutForm
        formaEnvio={formaEnvio}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
        alternarEnvio={alternarEnvio}
      />
    </div>
  );
};

export default CheckoutFormContainer;
