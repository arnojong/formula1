const fetch = require("node-fetch");

//TODO: Add stuff
module.exports = {
  view: async function(req, res) {
    const response = await fetch('http://ergast.com/api/f1/2019/drivers.json')
    const myJson = await response.json();
    let drivers = myJson.MRData.DriverTable.Drivers;
    if (req.query.name) {
      const query = req.query.name.toLowerCase();
      newDrivers = [];
      drivers.forEach(function(driver) {
        const fullName = (driver.givenName + ' ' + driver.familyName).toLowerCase();
        if (fullName.indexOf(query) > -1) {
          newDrivers.push(driver);
        }
      });
      drivers = newDrivers;
    }
    return res.view('pages/drivers', {drivers});

  }

};
