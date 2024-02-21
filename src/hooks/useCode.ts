/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useCode = () => {
  const location = useLocation();
  const [code, setCode] = useState<string>();

  useEffect(() => {
    // Obtém a parte da URL após o # (hash)
    const hash = location.search;

    // Verifica se a hash contém o Code
    if (hash.includes("code=")) {
      // Divide a hash usando o '=' como separador e pega o segundo elemento (o Code)
      const extractedCode = hash.split("=")[1];

      const newURL = window.location.pathname;
      window.history.replaceState(null, "", newURL);

      setCode(extractedCode);
    }
  }, [location]);

  return code;
};

export { useCode };
