module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "LbOEGe35u/zq8kAGK8fE7g=="),
    },
  },
});
