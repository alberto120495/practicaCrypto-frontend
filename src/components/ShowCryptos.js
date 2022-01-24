import { useEffect, useState } from "react";
import "./ShowCryptos.css";

function ShowCryptos() {
  const [data, setData] = useState([]);

  const fetchData = async (method = "GET") => {
    const url = `http://localhost:4000/`;
    const res = await fetch(url, {
      method,
      headers: {},
    });
    const body = await res.json();
    setData(body);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Listado de Cryptos</h2>
      {data?.monedas?.map(({ nombre, usd, id }) => (
        <div className="show" key={id}>
          <p>
            <span className="name">Crypto:</span> {nombre}
          </p>
          <p>
            <span className="value">USD:</span> ${usd}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShowCryptos;
