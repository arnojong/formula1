/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  viewUsers: async function(req, res) {
    const users = await User.find();
    return res.view('pages/banhammer', {users});
  },
  ban: async function(req, res) {
    await User.destroyOne({id: req.params.id});
    const users = await User.find();
    return res.view('pages/banhammer', {users});
  },



};
