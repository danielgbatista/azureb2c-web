/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export interface RefreshTokenProps {
  not_before: number;
  token_type: string;
  access_token: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

export const RequestRefreshToken = async (
  refresh_token: string
): Promise<RefreshTokenProps | undefined> => {
  const params = new URLSearchParams();

  params.append("grant_type", "refresh_token");
  params.append("client_id", "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee");
  params.append("scope", "3071a3f0-ffb1-4aab-a43a-7d4c3ab1c8ee offline_access");
  params.append("refresh_token", refresh_token);
  params.append("redirect_uri", "urn:ietf:wg:oauth:2.0:oob");
  params.append("client_secret", "TMY8Q~iYM0IvIz2QiGpKoePxqBulCZpAK1T1cby9");

  try {
    const response = await axios.post(
      "https://senai127nucleoti.b2clogin.com/senai127nucleoti.onmicrosoft.com/B2C_1_signin_signup/oauth2/v2.0/token",
      params
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
