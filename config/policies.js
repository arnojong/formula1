/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  PostController: {
    '*': 'is-logged-in',
    'add': 'is-admin',
    'edit': 'is-admin',
    'viewMine': 'is-admin',
    'create': 'is-admin',
    'update': 'is-admin',
    'publish': 'is-admin',
  },

  CommentController: {
    '*': 'is-logged-in'
  },

  UserController: {
    '*': 'is-super-admin'
  },

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'view-homepage-or-redirect': true,

};
