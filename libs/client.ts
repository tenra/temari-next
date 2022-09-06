import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
    apiKey: "54a6c8ca5453402e9bfa5c421f3d8b2be77d" || "",
});
