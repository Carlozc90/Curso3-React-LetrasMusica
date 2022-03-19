import { useContext } from "react";
import LetrasContext from "../context/LetasProvider";

const useLetras = () => {
  return useContext(LetrasContext);
};

export default useLetras;
