/**
 * CommentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function(req, res) {
    try {
      await Comment.create({
        body: req.body.comment,
        onPost: req.params.id,
        isItalic: req.body.italic,
        commentedBy: req.me.fullName,
        commentedById: req.me.id,
      });
      const user = await User.findOne({id: req.me.id})
      let currentCount = user.commentCount;
      let newCount = currentCount + 1;
      await User.updateOne({id: req.me.id})
      .set({
        commentCount: newCount
      })
      if (!user.isPremium && newCount >= 5) {
        await sails.helpers.makePremium.with({
          id: req.me.id
        });
      }
      return res.redirect('/post/' +req.params.id);
    } catch (err) {
      return res.view('500', {data: err});
    }
  }

};

