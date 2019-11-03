/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  viewAll: async function(req, res) {
    try {
      const posts = await Post.find({published: true});
      return res.view('pages/list', {posts});
    } catch (err) {
      return res.view('500', {data: err});
    }
  },
  viewMine: async function(req, res) {
    try {
      const posts = await Post.find({createdById: req.me.id});
      return res.view('pages/my-posts', {posts});
    } catch (err) {
      return res.view('500', {data: err});
    }
  },
  add: function(req, res) {
    return res.view('pages/add');
  },
  edit: async function(req, res) {
    try {
      const post = await Post.findOne({id: req.params.id})
      console.log(post);
      return res.view('pages/edit', {post})
    } catch (err) {
      return res.view('500', {data: err});
    }
  },
  create: async function(req, res) {
    try {
      await Post.create({
        title: req.body.title,
        body: req.body.body,
        createdBy: req.me.fullName,
        createdByKey: req.me.fullName.replace(/\s+/g, '').toLowerCase(),
        createdById: req.me.id,
        published: req.body.published
      });
      res.redirect('/list');
    } catch (err) {
      return res.view('500', {data: err});
    }
  },
  update: async function(req, res) {
    try {
      await Post.updateOne({ id: req.params.id })
      .set({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published
      });
      res.redirect('/my-posts');
    } catch (err) {
      return res.view('500', {data: err});
    }
  },
  publish: async function (req, res) {
    const post = await Post.findOne({id: req.params.id})
    await Post.updateOne({ id: req.params.id })
    .set({
      published: !post.published
    })
    res.redirect('/my-posts');
  },
  filter: async function (req, res) {
    try {
      let posts = [];
      const team = req.query.team;
      const query = req.query.query;
      if (query && team) {
        posts = await Post.find({
          createdByKey: team,
          published:true,
          or : [
            { title: { 'contains' : query } },
            { body: { 'contains' : query } },
          ]
        });
      } else if (query) {
        posts = await Post.find({
          published:true,
          or : [
            { title: { 'contains' : query } },
            { body: { 'contains' : query } },
            { createdBy: { 'contains' : query } },
          ]
        });
      } else if (team) {
        posts = await Post.find({
          published: true,
          createdByKey: team,
        });
      } else {
        posts = await Post.find({published: true});
      }
      return res.view('pages/list', {posts});
    } catch (err) {
      return res.view('500', {data: err});
    }
  },
  single: async function (req, res) {
    try {
      const post = await Post.findOne({id: req.params.id});
      const comments = await Comment.find({onPost: req.params.id});
      const user = await User.findOne({id: req.me.id});
      return res.view('pages/post', {post, comments, user});
    } catch (err) {
      return res.view('500', {data: err});
    }

  }
};


