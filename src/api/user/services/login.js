'use strict';

/**
 * `login` service.
 */

const bcrypt = require('bcryptjs');

module.exports = {
  async login({ phoneNumber, pin }) {
    const customer = await strapi.db.query('api::customer.customer').findOne({ where: { phoneNumber } });

    if (!customer) {
      return { error: 'Customer not found' };
    }

    const validPassword = bcrypt.compareSync(pin, customer.pin);

    if (!validPassword) {
      return { error: 'Invalid PIN' };
    }

    // Create a JWT token
    const token = strapi.plugins['users-permissions'].services.jwt.issue({
      id: customer.id,
    });

    return { customer, token };
  },
};
