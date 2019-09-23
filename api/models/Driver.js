/**
 * Driver.js
 *
 * The model of a driver
 */

module.exports = {

  attributes: {

    fullName: {
      type: 'string',
      description: 'Full representation of the driver\'s name.',
    },

    nationality: {
      type: 'string',
      description: 'Nationality of the driver',
    },

    racingNumber: {
      type: 'number',
      description: 'Racing number of the driver',
    },

  },

};
