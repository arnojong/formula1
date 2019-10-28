/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: {
      type: 'string'
    },

    body: {
      type: 'string'
    },

    createdBy: {
      type: 'string'
    },

    createdById: {
      type: 'number'
    },

    published: {
      type: 'boolean',
      defaultsTo: false,
    }

  },

};

