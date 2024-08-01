'use strict';

/**
 * A set of functions called "actions" for `customer`
 */

module.exports = {
  async login(ctx) {
    const { phoneNumber, pin } = ctx.request.body;

    if (!phoneNumber || !pin) {
      return ctx.badRequest('Phone number and PIN are required');
    }

    const { error, customer, token } = await strapi.services['api::customer.login'].login({
      phoneNumber,
      pin,
    });

    if (error) {
      return ctx.badRequest(error);
    }

    ctx.send({ customer, token });
  },
};
