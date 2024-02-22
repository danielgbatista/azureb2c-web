##Anotações 
    Application                                     B2C
       Button          Redirect                     Login
       Process        Return Code                   Login
       Process   Use code to get acc tk             Auth Endpoint
       Home    Use acc tk to visible private routes Auth Endpoint Success 

    Regras: Apenas retornar a tela de token quando o access token e o refresh token forem verificados.

* **Rotas**
    * [LogIn B2C](https://senai127nucleoti.b2clogin.com/senai127nucleoti.onmicrosoft.com/b2c_1_signin_signup/oauth2/v2.0/authorize?client_id=3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee&response_type=code&redirect_uri=http://localhost:5173/token/&scope=3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8eeoffline_access) 
    * [Obter Access Token](https://senai127nucleoti.b2clogin.com/senai127nucleoti.onmicrosoft.com/B2C_1_signin_signup/oauth2/v2.0/token)
---
* **Request**
    **URL** : `https://senai127nucleoti.b2clogin.com/senai127nucleoti.onmicrosoft.com/B2C_1_signin_signup/oauth2/v2.0/token`
    **Method** : `POST`
    **Body:**
    ```json
    {
        [key]: {value}
        "grant_type": "authorization_code",
        "client_id": "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee"
        "scope": "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee offline_access"
        "code": ${code}
        "code_verifier": "ThisIsntRandomButItNeedsToBe43CharactersLong"
        "client_secret": "TMY8Q~iYM0IvIz2QiGpKoePxqBulCZpAK1T1cby9"
    }
    ```
    **Response:**
    ```json
    {
        access_token: string,
        expires_in: number,
        expires_on: number,
        id_token: string,
        id_token_expires_in: number,
        not_before: number,
        profile_info: string,
        refresh_token: string,
        refresh_token_expires_in: number,
        resource: string
        scope: string,
        token_type: string,   
    }
    ```
    ---
    **URL** : `https://senai127nucleoti.b2clogin.com/senai127nucleoti.onmicrosoft.com/B2C_1_signin_signup/oauth2/v2.0/token`
    **Method** : `POST`
    **Body:**
    ```json
    {
        [key]: {value}
        "grant_type": "refresh_token",
        "client_id": "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee"
        "scope": "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee offline_access"
        "refresh_token": ${refresh_token}
        "client_secret": "TMY8Q~iYM0IvIz2QiGpKoePxqBulCZpAK1T1cby9"
    }
    ```
    **Response:**
    ```json
    {
        access_token: string,
        expires_in: number,
        expires_on: number,
        id_token: string,
        id_token_expires_in: number,
        not_before: number,
        profile_info: string,
        refresh_token: string,
        refresh_token_expires_in: number,
        resource: string
        scope: string,
        token_type: string,   
    }
    ```
---

##Implementação do Msal-Node

Post falando sobre:
[Artigo Medium](https://medium.com/codex/azure-ad-b2c-quick-start-for-react-js-single-page-apps-spa-38a70d13acd)

* **Criando o arquivo de configurações**
    > Neste arquivo iremos guardar os links para conexão com nosso AD B2C.
    
~~~ ts
import { LogLevel } from "@azure/msal-browser";

export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signin_signup",
    },
    authorities: {
        signUpSignIn: {
        authority:
            "https://senai127nucleoti.b2clogin.com/senai127nucleoti.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signin_signup&client_id=3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Ftoken%2F&scope=openid&response_type=id_token&prompt=login",
        },
    },
    authorityDomain: "https://senai127nucleoti.b2clogin.com",
};

export const msalConfig = {
    auth: {
        clientId: "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee",
        authority:
        "https://senai127nucleoti.b2clogin.com/senai127nucleoti.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signin_signup&client_id=3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Ftoken%2F&scope=openid&response_type=id_token&prompt=login",
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: "http://localhost:5173/token/",
        postLogoutRedirectUri: "/",
        navigateToLoginRequestUrl: true,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
        loggerCallback: (
            level: LogLevel,
            message: string,
            containsPii: boolean
        ) => {
            if (containsPii) {
            return;
            }
            switch (level) {
            case LogLevel.Error:
                console.error(message);
                return;
            case LogLevel.Info:
                console.info(message);
                return;
            case LogLevel.Verbose:
                console.debug(message);
                return;
            case LogLevel.Warning:
                console.warn(message);
                return;
            default:
                return;
            }
        },
        },
    },
};

export const loginRequest = {
    scopes: ["openid", "User.Read"],
};
~~~~
---
 * **Aplicando no App.tsx**
~~~ tsx
import "./App.css";
import { useToken } from "./hooks/get-token";
import { Route, Routes } from "react-router-dom";
import { Home } from "./conteiner/home";
import { GetToken } from "./conteiner/get-token";
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";

function App({ msalInstance }: { msalInstance: IPublicClientApplication }) {
    const token = useToken();

    return (
        <MsalProvider instance={msalInstance}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/token/" element={<GetToken />} />
            </Routes>
        </MsalProvider>
    );
}

export default App;
~~~
----
* **Implementando no Main.tsx**
~~~ tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./config/authConfig.ts";

export const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
        <App msalInstance={msalInstance} />
        </Router>
    </React.StrictMode>
);
~~~