export const auth0Config = {
    domain: import.meta.env.VITE_AUTH0_DOMAIN as string,
    clientId: import.meta.env.VITE_AUTH0_CLIENTID as string,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE as string,
    issuer: import.meta.env.VITE_AUTH0_ISSUER as string,
};