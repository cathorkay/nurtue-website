const sharp = require("sharp");

const name = "feature-1.png";

sharp(`public/images/${name}`)
  .resize(600)
  .png({ quality: 80, force: false })
  .jpeg({ quality: 80, force: false })
  .toFile(name);

sharp(`public/images/${name}`)
  .resize(600)
  .toFile(name + ".webp");
