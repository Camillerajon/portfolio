const RobotstxtPlugin = require("robotstxt-webpack-plugin");
 
const options = {}; // see options below
 
module.exports = {
  plugins: [new RobotstxtPlugin(options)]
};