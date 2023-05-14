import React from "react";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { Button } from "@mui/material";

const FinishOrder = ({ orderId, alertInfo, navigate }) => {
  return (
    <div
      style={{
        color: "#3f3f3f",
        padding: "70px 7.5% 0 7.5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "4rem" }}>
        ¡Gracias por tu compra!
      </h1>
      <h2 style={{ fontWeight: "300" }}>Tu pedido tiene el siguiente código</h2>
      <div
        style={{
          border: "solid 3px #d0a9a2",
          backgroundColor: "#d0a9a2",
          padding: "1rem",
          borderRadius: "15px",
          margin: "2rem",
        }}
      >
        <h1 style={{ letterSpacing: ".2rem", color: "#edebe8" }}>{orderId}</h1>
      </div>
      <h2 style={{ fontWeight: "300", textAlign: "center" }}>
        Vas a recibir un correo con tu factura y todas la información para el
        envío o el retiro del producto en el local.
      </h2>
      <div
        style={{
          color: "#d0a9a2",
          marginTop: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SimCardDownloadIcon
          onClick={() => alertInfo("Comprobante descargado con éxito")}
          style={{ cursor: "pointer", fontSize: "5rem" }}
        />
        <p style={{ color: "#3f3f3f" }}>Descargar comprobante</p>
      </div>

      <Button
        onClick={() => navigate("/")}
        variant="contained"
        color="secondary"
        style={{
          margin: "4rem",
          padding: "10px",
          fontSize: 14,
        }}
      >
        Volver al Inicio
      </Button>
    </div>
  );
};

export default FinishOrder;
