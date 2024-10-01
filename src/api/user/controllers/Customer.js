// ./api/user/controllers/user.js
"use strict";

module.exports = {
  async customLogin(ctx) {
    const { phoneNumber, pin } = ctx.request.body;

    if (!phoneNumber || !pin) {
      return ctx.badRequest("Phone number and PIN are required");
    }

    const user = await strapi
      .query("user", "users-permissions")
      .findOne({ phoneNumber, pin });

    if (user) {
      return ctx.send({ user });
    } else {
      return ctx.badRequest("Invalid phone number or PIN");
    }
  },
};
