module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "someSecretKey"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "8Fm88O8dvRcZLM1fQho1Zw=="), // Use the salt generated
  },
});
