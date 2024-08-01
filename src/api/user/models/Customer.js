'use strict';

/**
 * Lifecycle callbacks for the `customer` model.
 */

const bcrypt = require('bcryptjs');

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      if (data.pin) {
        data.pin = await bcrypt.hash(data.pin, 10);
      }
    },
    async beforeUpdate(params, data) {
      if (data.pin) {
        data.pin = await bcrypt.hash(data.pin, 10);
      }
    },
  },
};
