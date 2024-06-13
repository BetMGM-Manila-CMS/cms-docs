import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'da9696e46e2fa32edbb7287a0b9bbd8bf99ecc0f', queries,  });
export default client;
  