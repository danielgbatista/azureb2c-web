import { useState } from "react";
import {
  RefreshTokenProps,
  RequestRefreshToken,
} from "../service/refreshToken";
import { useToken } from "./useToken";

const useRefreshToken = () => {
  const { response } = useToken();
  const [refreshToken, setRefreshToken] = useState<
    RefreshTokenProps | undefined
  >();

  const refresh = async () => {
    if (response) {
      const result = await RequestRefreshToken(response.refresh_token);

      setRefreshToken(result);
    }
  };

  return {
    refresh,
    refreshToken,
  };
};

export default useRefreshToken;
