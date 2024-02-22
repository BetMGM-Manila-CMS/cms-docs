import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/7eb9602a-63c1-49ab-986c-560697edb96a/github/dev/main', token: 'da9696e46e2fa32edbb7287a0b9bbd8bf99ecc0f', queries,  });
export default client;
  