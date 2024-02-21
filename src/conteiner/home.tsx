import "../index.css";
import { FC } from "react";

export const Home: FC = () => {
  const link =
    "https://senai127nucleoti.b2clogin.com/senai127nucleoti.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signin_signup&client_id=3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Ftoken%2F&scope=openid&response_type=code&prompt=login";

  return (
    <div className="container">
      <header className="redirect_link">
        <p>
          Para acessar o link de login <a href={link}>clique aqui</a>
        </p>
      </header>
    </div>
  );
};
