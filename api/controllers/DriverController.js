const fetch = require("node-fetch");

//TODO: Add stuff
module.exports = {
  view: async function(req, res) {
    const response = await fetch('http://ergast.com/api/f1/2019/drivers.json')
    const myJson = await response.json();
    const drivers = myJson.MRData.DriverTable.Drivers;
    const string = JSON.stringify(drivers);
    return res.view('pages/drivers', {drivers});
    driverList.forEach(driver => {
      console.log(driver.givenName + driver.familyName);
    });
  }
};
