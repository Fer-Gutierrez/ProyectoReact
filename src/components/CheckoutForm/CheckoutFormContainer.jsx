import React, { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import UseAlert from "../../utils/alerts/UseAlert";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import FinishOrder from "./FinishOrder";

const CheckoutFormContainer = () => {
  const [typeInCart, SetTypeInCart] = useState("");
  const [onChangeValidation, setOnChangeValidation] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { alertError, alertInfo } = UseAlert();
  const {
    cart,
    deleteCartItem,
    getTotalPriceCart,
    getTotalQuantityCart,
    deleteCart,
  } = useContext(CartContext);
  const navigate = useNavigate();

  let totalPrice = getTotalPriceCart();
  let totalQuantity = getTotalQuantityCart();

  const saveOrder = (data) => {
    let withDelivery = data?.formaEnvio === "EAD" && true;

    let InfoDelivery = null;
    if (data?.formaEnvio === "EAD") {
      if (data?.envioInfoComprador) {
        InfoDelivery = {
          calleEntrega: data?.calleComprador,
          alturaEntrega: data?.alturaComprador,
          pisoEntrega: data?.pisoComprador,
          deptoEntrega: data?.deptoComprador,
          ciudadEntrega: data?.ciudadComprador,
          provinciaEntrega: data?.provinciaComprador,
          observacionesEntrega: data?.observacionesEntrega,
        };
      } else {
        InfoDelivery = {
          calleEntrega: data?.calleEntrega,
          alturaEntrega: data?.alturaEntrega,
          pisoEntrega: data?.pisoEntrega,
          deptoEntrega: data?.deptoEntrega,
          ciudadEntrega: data?.ciudadEntrega,
          provinciaEntrega: data?.provinciaEntrega,
          observacionesEntrega: data?.observacionesEntrega,
        };
      }
    }

    const dataOrder = {
      buyer: {
        nombre: data?.nombreComprador,
        apellido: data?.apellidoComprador,
        dni: data?.dniComprador,
        email: data?.emailComprador,
        celular: data?.celComprador,
        calle: data?.calleComprador,
        altura: data?.alturaComprador,
        piso: data?.pisoComprador,
        depto: data?.deptoComprador,
        ciudad: data?.ciudadComprador,
        provincia: data?.provinciaComprador,
      },
      items: cart,
      totalPrice,
      totalQuantity,
      withDelivery,
      InfoDelivery,
      date: serverTimestamp(),
    };

    const ordersColl = collection(db, "orders");
    addDoc(ordersColl, dataOrder)
      .then((res) => {
        setOrderId(res.id);
        editSoldProducts(dataOrder.items);
        deleteCart(true);
      })
      .catch((err) => {
        console.log(err);
        alertError("Error: La venta no pudo ser procesada.");
      });
  };

  const editSoldProducts = (soldProducts) => {
    soldProducts.length > 0 &&
      soldProducts.map((p) => {
        if (p.reqStock) {
          let product = doc(db, "products", p.id);
          updateDoc(product, { stock: p.stock - p.quantity });
        }
      });
  };

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
      fechaServicio: new Date().getDate(),
    },

    onSubmit: saveOrder,

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
        fechaServicio: Yup.date()
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

  useEffect(() => {
    let resultado = "";
    cart.map((p) => {
      if (p?.reqStock === true) {
        if (resultado === "Services" || resultado === "Products-Services") {
          resultado = "Products-Services";
        } else if (resultado === "") {
          resultado = "Products";
        }
      } else {
        if (resultado === "Products" || resultado === "Products-Services") {
          resultado = "Products-Services";
        } else if (resultado === "") {
          resultado = "Services";
        }
      }
    });
    SetTypeInCart(resultado);
  }, [cart]);

  return (
    <div>
      {orderId ? (
        <FinishOrder
          orderId={orderId}
          alertInfo={alertInfo}
          navigate={navigate}
        />
      ) : (
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
          totalQuantity={totalQuantity}
          typeInCart={typeInCart}
        />
      )}
    </div>
  );
};

export default CheckoutFormContainer;
