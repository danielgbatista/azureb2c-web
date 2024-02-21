/* eslint-disable react-hooks/exhaustive-deps */
import "../index.css";
import { FC, useEffect, useState } from "react";
import { useCode } from "../hooks/useCode";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { getToken } from "../service/getToken";

export const GetCode: FC = () => {
  const code = useCode();
  const [token, setToken] = useState<string | null>();
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>();

  useEffect(() => {
    const fetchToken = async () => {
      if (code) {
        try {
          const response = await getToken(code);

          const access_token = response ? response.access_token : null;
          const decodedToken = response
            ? jwtDecode(response.access_token)
            : null;

          setToken(access_token);
          setDecodedToken(decodedToken);
        } catch (error) {
          console.error("Erro ao obter token:", error);
        }
      }
    };

    fetchToken();
  }, [code]);

  return (
    <div className="container">
      <div className="code_item">
        <p>Token codificado: </p>
        <code className="token_content">"access_token":{token}</code>
      </div>
      <div className="code_item">
        <p>Token decodificado: </p>
        <code className="token_content">{JSON.stringify(decodedToken)}</code>
      </div>
    </div>
  );
};
