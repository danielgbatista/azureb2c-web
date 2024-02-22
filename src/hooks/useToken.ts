/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { RequestToken, TokenProps } from "../service/getToken";
import { useCode } from "./useCode";
import { jwtDecode } from "jwt-decode";

const useToken = () => {
  const code = useCode();
  const [token, setToken] = useState<string | null>();
  const [response, setResponse] = useState<TokenProps | null>();
  const [decodedToken, setDecodedToken] = useState<string | null>();

  useEffect(() => {
    const token = async () => {
      try {
        const response = await RequestToken(code as string);

        const access_token = response ? response.access_token : null;
        const decodedToken = response ? jwtDecode(response.access_token) : null;

        setToken(access_token);
        setDecodedToken(JSON.stringify(decodedToken));
        setResponse(response);
      } catch (error) {
        console.error("Erro ao obter token:", error);
      }
    };

    token();
  }, [code]);

  return { token, decodedToken, response };
};

export { useToken };
