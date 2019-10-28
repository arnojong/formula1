module.exports = {


  friendlyName: 'View my posts',


  description: 'Display "My posts" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/my-posts'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
