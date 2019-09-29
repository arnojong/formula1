const fetch = require("node-fetch");

//TODO: Add stuff
module.exports = {
  view: async function(req, res) {
    const response = await fetch('http://ergast.com/api/f1/2019/drivers.json')
    const myJson = await response.json();
    const drivers = myJson.MRData.DriverTable.Drivers;
    const query = req.query.name;
    if(query) {
      drivers.forEach(function(driver) {
        if (driver.givenName == query) {
          let drivers = [];
          drivers.push(driver);
          return res.view('pages/drivers', {drivers});
        } else {
        }
      })
    } else {
      return res.view('pages/drivers', {drivers});
    };
  }

};
