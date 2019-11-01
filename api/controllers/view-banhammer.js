module.exports = {


  friendlyName: 'View banhammer',


  description: 'Display "Banhammer" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/banhammer'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
