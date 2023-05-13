import React, { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import UseAlert from "../../utils/alerts/UseAlert";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutFormContainer = () => {
  const [onChangeValidation, setOnChangeValidation] = useState(false);
  const { alertError } = UseAlert();
  const { cart, deleteCartItem, getTotalPriceCart, getTotalQuantityCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const { handleSubmit, handleChange, errors, isValid, values } = useFormik({
    initialValues: {
      emailComprador: "",
      dniComprador: "",
      celComprador: "",
      nombreComprador: "",
      apellidoComprador: "",
      calleComprador: "",
      alturaComprador: "",
      pisoComprador: 0,
      deptoComprador: "",
      ciudadComprador: "",
      provinciaComprador: "",
      formaEnvio: "EAD",
      envioInfoComprador: false,
      calleEntrega: "",
      alturaEntrega: "",
      pisoEntrega: "",
      deptoEntrega: "",
      ciudadEntrega: "",
      provinciaEntrega: "",
      observacionesEntrega: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object().shape({
      emailComprador: Yup.string()
        .email("Debe ser un email válido")
        .required("Este campo es requerido")
        .max(50, "No debe superar 50 caracteres"),
      dniComprador: Yup.number("Debe ser numérico de 8 caracteres.")
        .max(99999999, "Debe tener 8 caracteres")
        .min(10000000, "Debe tener 8 caracteres")
        .required("Esta campo es requerido"),
      celComprador: Yup.string()
        .matches(
          /^[1-9][0-9].{8,10}$/,
          "Debe ser numérico sin 0 y in 15 con un máximo de 10 caracteres"
        )
        .required("Este campo es requerido"),
      nombreComprador: Yup.string()
        .required("Este campo es requerido")
        .max(50, "No debe superar 50 caracteres"),
      apellidoComprador: Yup.string()
        .max(50, "No puede superar 50 caracteres")
        .required("Este campo es requerido"),
      calleComprador: Yup.string()
        .required("Este campo es requerido")
        .max(50, "No debe superar 50 caracteres"),
      alturaComprador: Yup.number("El campo debe ser numérico").required(
        "Este campo es requerido"
      ),
      pisoComprador: Yup.number().optional().nullable(),
      deptoComprador: Yup.string().nullable(),
      ciudadComprador: Yup.string()
        .max(50, "No debe superar 50 caracteres")
        .required("Este campo es requerido"),
      provinciaComprador: Yup.string()
        .max(50, "No debe superar 50 caracteres")
        .required("Este campo es requerido"),
      formaEnvio: Yup.string().required(),
      envioInfoComprador: Yup.boolean(),
      calleEntrega: Yup.string().when(["formaEnvio", "envioInfoComprador"], {
        is: (formaEnvio, envioInfoComprador) =>
          formaEnvio === "EAD" && !envioInfoComprador,
        then: (schema) =>
          schema
            .required("Este campo es requerido")
            .max(50, "No debe superar 50 caracteres"),
      }),
      alturaEntrega: Yup.number("El campo debe ser numérico").when(
        ["formaEnvio", "envioInfoComprador"],
        {
          is: (formaEnvio, envioInfoComprador) =>
            formaEnvio === "EAD" && !envioInfoComprador,
          then: (schema) => schema.required("Este campo es requerido"),
        }
      ),
      pisoEntrega: Yup.number().optional().nullable(),
      deptoEntrega: Yup.string().nullable(),
      ciudadEntrega: Yup.string().when(["formaEnvio", "envioInfoComprador"], {
        is: (formaEnvio, envioInfoComprador) =>
          formaEnvio === "EAD" && !envioInfoComprador,
        then: (schema) =>
          schema
            .required("Este campo es requerido")
            .max(50, "No debe superar 50 caracteres"),
      }),
      provinciaEntrega: Yup.string().when(
        ["formaEnvio", "envioInfoComprador"],
        {
          is: (formaEnvio, envioInfoComprador) =>
            formaEnvio === "EAD" && !envioInfoComprador,
          then: (schema) =>
            schema
              .required("Este campo es requerido")
              .max(50, "No debe superar 50 caracteres"),
        }
      ),
      observacionesEntrega: Yup.string()
        .max(200, "Solo se permiten hasta 200 caracteres.")
        .notRequired(),
    }),
    validateOnChange: onChangeValidation,
  });

  //Si hay errores se activa validateOnChange, de lo contrario se desactiva:
  useEffect(() => {
    setOnChangeValidation(!isValid);
  }, [isValid]);

  //Segundo Alert cuando intentamos Finalizar la compra con campos incompletos:
  const verificarCamposFaltantes = () => {
    let totalErrors = Object.entries(errors).length;
    totalErrors > 0 &&
      alertError(`Falta completar ${totalErrors} campos requeridos`);
  };

  //Primer alert cuando intentamos Finalizar la compra con campos incompletos:
  useEffect(() => {
    if (Object.entries(errors).length > 0 && !onChangeValidation) {
      alertError("Debe completar los campos requeridos");
    }
  }, [errors]);

  let totalPrice = getTotalPriceCart();
  let totalProducts = getTotalQuantityCart();

  return (
    <div>
      <CheckoutForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
        values={values}
        verificarCamposFaltantes={verificarCamposFaltantes}
        cart={cart}
        navigate={navigate}
        deleteCartItem={deleteCartItem}
        totalPrice={totalPrice}
        totalProducts={totalProducts}
      />
    </div>
  );
};

export default CheckoutFormContainer;
