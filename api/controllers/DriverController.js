const fetch = require("node-fetch");

//TODO: Add stuff
module.exports = {
  view: async function() {
    const response = await fetch('http://ergast.com/api/f1/2019/drivers.json')
    const myJson = await response.json();
    const driverList = myJson.MRData.DriverTable.Drivers;
    driverList.forEach(driver => {
      console.log(driver.givenName + driver.familyName);
    });
  }
};
