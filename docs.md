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
        access_token:"eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJvaWQiOiIyOTU3Mzg4NC03YjY0LTQ0ZWMtYWE3Ny1iYmZjMDM4NDEzMjUiLCJzdWIiOiIyOTU3Mzg4NC03YjY0LTQ0ZWMtYWE3Ny1iYmZjMDM4NDEzMjUiLCJuYW1lIjoiRGFuaWVsIEJhdGlzdGEiLCJlbWFpbHMiOlsiZGFuaWVsLmcuYmF0aXN0YTIxQG91dGxvb2suY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbl9zaWdudXAiLCJub25jZSI6ImRlZmF1bHROb25jZSIsImF6cCI6IjMwNzFhM2YwLWZmYjEtNGFhYi1hNDNhLTdkNGMzYWIxYzhlZSIsInZlciI6IjEuMCIsImlhdCI6MTcwODUzMDM2MCwiYXVkIjoiMzA3MWEzZjAtZmZiMS00YWFiLWE0M2EtN2Q0YzNhYjFjOGVlIiwiZXhwIjoxNzA4NTMzOTYwLCJpc3MiOiJodHRwczovL3NlbmFpMTI3bnVjbGVvdGkuYjJjbG9naW4uY29tL2IyYThmMTEzLTVmZDMtNDM0Zi04NzBmLTE5NTg5NGI1YjFlNC92Mi4wLyIsIm5iZiI6MTcwODUzMDM2MH0.bbbqzTGull2B4NTYx0nTz4-ALlJK2hdxXp73_wKGQJlI31CqzaWUzZA2TwMQztUWUgxu5z1LTuxTuR1Spkvkm0t1yd-SbJvAi5skbMbGhNTM1Aqr_Rxy9TyoBBz8RDQMi6fU9PM-wF18e2Lk9m-DMN0tkAVFF3EqfpgD7Cvq2yxI4jzoZuJRZDz8d6QtF_MlddB297PAvQdBOjcX8OHmOfwx7DWwmR0nn7eOs6R0tHXdoMEpx8E93egz0F4B0zlIn6Ch_gW6du1o9IgLje-PhWH7BGDdw2EgC-OsNUZVMhUqO_LaljgPX6L_6sBJpracmvt2ePiuLnG5fmk8b9hwnQ"
        expires_in: 3600
        expires_on: 1708533960
        id_token:"eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3NlbmFpMTI3bnVjbGVvdGkuYjJjbG9naW4uY29tL2IyYThmMTEzLTVmZDMtNDM0Zi04NzBmLTE5NTg5NGI1YjFlNC92Mi4wLyIsInN1YiI6IjI5NTczODg0LTdiNjQtNDRlYy1hYTc3LWJiZmMwMzg0MTMyNSIsImF1ZCI6IjMwNzFhM2YwLWZmYjEtNGFhYi1hNDNhLTdkNGMzYWIxYzhlZSIsImV4cCI6MTcwODUzMzk2MCwibm9uY2UiOiJkZWZhdWx0Tm9uY2UiLCJpYXQiOjE3MDg1MzAzNjAsImF1dGhfdGltZSI6MTcwODUzMDM1OSwib2lkIjoiMjk1NzM4ODQtN2I2NC00NGVjLWFhNzctYmJmYzAzODQxMzI1IiwibmFtZSI6IkRhbmllbCBCYXRpc3RhIiwiZW1haWxzIjpbImRhbmllbC5nLmJhdGlzdGEyMUBvdXRsb29rLmNvbSJdLCJ0ZnAiOiJCMkNfMV9zaWduaW5fc2lnbnVwIiwiYXRfaGFzaCI6InVzbElzNHlnZnFfU29hcmt5RWRGMEEiLCJuYmYiOjE3MDg1MzAzNjB9.puHntI_3wblniyiaRLtm64EbccjFFJPQu7QuSIbv-a854qq1FiPkOqHJjqdFhpijW9NdGQT27W88_5GEUsLIBVSpkazYjfKwXjIZv269HwH6KtuMBa_Kw3DuVI0O_BwBF3JzZYTYIR2IEe_mlhHjwMEn58yyHQcSSXAg_Ob6wuvlQ8-snnFsKI4Y1b2ik90qmiA0BAptWOWxjErIlNAYHbJkUDbMRxQR-RafzS21AcNCzUMmMbpY2f4Mbb_Mqaln2LogwQk_Dfm3qbcOi6dHqeRfukq5-pxYSl9kF6K2diV-fzzKbu_QSaAjan1gUtBF9lHJlxMVDqHfN5tuHlXiXA"
        id_token_expires_in: 3600
        not_before: 1708530360
        profile_info:"eyJ2ZXIiOiIxLjAiLCJ0aWQiOiJiMmE4ZjExMy01ZmQzLTQzNGYtODcwZi0xOTU4OTRiNWIxZTQiLCJzdWIiOm51bGwsIm5hbWUiOiJEYW5pZWwgQmF0aXN0YSIsInByZWZlcnJlZF91c2VybmFtZSI6bnVsbCwiaWRwIjpudWxsfQ"
        refresh_token:"eyJraWQiOiJjcGltY29yZV8wOTI1MjAxNSIsInZlciI6IjEuMCIsInppcCI6IkRlZmxhdGUiLCJzZXIiOiIxLjAifQ..3fXSX8OEa6pPH4Xv.9iKl5QojlAdWcI5gutr440fWK8AaYMiK0yDNJfCRPnhOpzoNnBccc2GQOVy64NzENk0GLO9O9Mf_D86ULTnpz8m2ieGAtbOOm8rc3Jde0ED6cGqEcpiaBamaY5AwZxb4arERHGklgc6IUG0ywfKoSU6rHrMTQEaUYYjJgmQGnXpclnL_qnJMsveKyEKZNJYsMNbVnBK3Gb-t8uczBCDDTX-8mBBa3AeaJJNf2NilNuaj_g9S3TpDz1AAl0J9uRDpg8vOOCFTuS42kHXZqFEZtKz3jQ8nKu1Krvee2qY-rJz8WenCj9tWN6gTvQCkWsk-lNdFZSqOocQDtiub__D2DYpK_sWvx6XSWWoDcca8QBnIoh5kzGAujLgFgPKHh1mRfURQPwXGdMEYpVYPvRlt2W0BEklwtFKe28c68PxOZDxWeZeDv5ail7RYET0x1bqs3Qocj1yXlCpEf6aXaD-4khfYMiJbU_9YrRXg1cObtBRG-NiaCeQcOqJituJ4EPt5CZVLvH77Kh1W0ZVgJM_H3Ff04zYTosjUUAi8Y-0ADPBsrnSDUMVmf3mAOqC7nh1nZORcoEuoHzryaSn4ICb7ve43aHty9YI3Om2z7W_0TmEcaSmLqaQdiBqY_eTHtqvEyviCJjQ.QniOe9QVf4XcnRlirt3h9Q"
        refresh_token_expires_in: 1209600
        resource: "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee"
        scope: "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee offline_access openid"
        token_type: "Bearer"   
    }
    ```

##Documentação de rotas do B2C

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