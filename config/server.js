module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "2cf133f57927ce4f29ad1b1b3d77f5224b9f2d85a5aa8f32c76708f7be94a3e1e123edab9f42d40518c46fc22601165a67b57f2b770fea2f066bc08ff5ebb9602abd616359fb7b20d464f8b9835eadf085730753dd63061c5054847fc221e8cca30ae22d4edce85a5fd689ba6e2e094a967afcc587ab23f8ae41997daaa0be39",
    ]),
  },
});

hi