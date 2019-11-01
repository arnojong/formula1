/**
 * Comment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    body: {
      type: 'string'
    },

    onPost: {
      type: 'number'
    },

    isItalic: {
      type: 'boolean',
      defaultsTo: false
    },

    commentedBy: {
      type: 'string'
    },

    commentedById: {
      type: 'number'
    }

  },

};

