const _ = require("lodash");


const variousBrownBears = [
  "Atlas bear",
  "Bergman's bear",
  "Blue bear",
  "Eurasian brown bear",
  "European brown bear",
  "Gobi bear",
  "Grizzly bear",
  "Himalayan brown bear",
  "Ussuri brown bear",
  "Kamchatka brown bear",
  "Kodiak bear",
  "Marsican brown bear (critically endangered)",
  "Mexican grizzly bear",
  "East Siberian brown bear",
  "Syrian brown bear"
];

const randomBear = _.sample(variousBrownBears);
console.log(randomBear);

// const variousBrownBears = require("./bears");