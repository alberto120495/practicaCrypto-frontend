import React, { useState } from "react";
import "./MakeCrypto.css";
import ShowCryptos from "./ShowCryptos";
const initValues = {
  nombre: "",
  usd: 0,
};
function MakeCrypto() {
  const [formValues, setFormValues] = useState(initValues);
  const { nombre, usd } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const fetchData = (data, method) => {
    const url = `http://localhost:4000/`;
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    fetchData(formValues, "POST");
    setFormValues(initValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Nombre de la criptomoneda"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label>USD</label>
          <input
            type="number"
            placeholder="Nombre de la criptomoneda"
            name="usd"
            value={usd}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div className="boton">
          <button type="submit" className="enviar">
            <span> Guardar</span>
          </button>
        </div>
      </form>

      <ShowCryptos />
    </div>
  );
}

export default MakeCrypto;
