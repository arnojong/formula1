module.exports = {


  friendlyName: 'Make premium',


  description: 'Make user premium if he/she has 5 or more comments',


  inputs: {

    id: {
      type: 'number',
      example: 1,
      description: 'The id of the user that will get premium.'
    }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    await User.updateOne({id: inputs.id})
    .set({
      isPremium: true
    })
  }


};

