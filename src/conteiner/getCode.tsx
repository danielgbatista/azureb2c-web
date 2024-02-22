import "../index.css";
import { FC } from "react";
import { useToken } from "../hooks/useToken";
import useRefreshToken from "../hooks/useRefreshToken";

export const GetCode: FC = () => {
  const { decodedToken, token } = useToken();
  const { refresh, refreshToken } = useRefreshToken();

  return (
    <div className="container">
      <div className="code_item">
        <p>Token codificado: </p>
        <code className="token_content">
          "access_token":{refreshToken ? refreshToken.access_token : token}
        </code>
        <button className="button" onClick={() => refresh()}>
          <b>Refresh Token</b>
        </button>
      </div>
      <div className="code_item">
        <p>Token decodificado: </p>
        <code className="token_content">
          {refreshToken
            ? JSON.stringify(refreshToken)
            : JSON.stringify(decodedToken)}
        </code>
      </div>
    </div>
  );
};
