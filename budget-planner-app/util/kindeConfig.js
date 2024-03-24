import { KindeSDK } from "@kinde-oss/react-native-sdk-0-7x";

// const client = new KindeSDK(
//   YOUR_KINDE_ISSUER,
//   YOUR_KINDE_REDIRECT_URI,
//   YOUR_KINDE_CLIENT_ID,
//   YOUR_KINDE_LOGOUT_REDIRECT_URI
// );
export const client = new KindeSDK(
  "https://kaac.kinde.com",
  "exp://192.168.1.45:8081",
  "9e301d0d6c7f4f3eb6635f7d49df258f",
  "exp://192.168.1.45:8081"
);
