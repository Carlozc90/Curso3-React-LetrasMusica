import axios from "axios";
import { createContext, useState } from "react";

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState("");
  const [letra, setLetra] = useState("");
  const [cargando, setCargando] = useState(false);

  const busquedaLetra = async (busqueda) => {
    setCargando(true);
    try {
      const { artista, cancion } = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const { data } = await axios(url);
      setLetra(data.lyrics);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };
  return (
    <LetrasContext.Provider
      value={{ cargando, alerta, setAlerta, busquedaLetra, letra }}
    >
      {children}
    </LetrasContext.Provider>
  );
};

export { LetrasProvider };

export default LetrasContext;
