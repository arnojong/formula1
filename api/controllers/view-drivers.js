module.exports = {


    friendlyName: 'View drivers',
  
  
    description: 'Display "Drivers" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/drivers'
      }
  
    },
  
  
    fn: async function () {
  
      // Respond with view.
      return {};
  
    }
  
  
  };
  