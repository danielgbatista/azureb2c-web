/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export interface Token {
  access_token: string;
  expires_in: number;
  expires_on: number;
  id_token: string;
  id_token_expires_in: number;
  not_before: number;
  profile_info: string;
  refresh_token: string;
  refresh_token_expires_in: number;
  resource: string;
  scope: string;
  token_type: string;
}

export const getToken = async (code: string): Promise<Token | undefined> => {
  const params = new URLSearchParams();

  params.append("grant_type", "authorization_code");
  params.append("client_id", "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee");
  params.append("scope", "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee offline_access");
  params.append("code", code);
  params.append("redirect_uri", "urn:ietf:wg:oauth:2.0:oob");
  params.append("client_secret", "TMY8Q~iYM0IvIz2QiGpKoePxqBulCZpAK1T1cby9");

  try {
    const response = await axios.post(
      "https://senai127nucleoti.b2clogin.com/senai127nucleoti.onmicrosoft.com/B2C_1_signin_signup/oauth2/v2.0/token",
      params
    );
    console.log("Request:", { ...response.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
