const fs = require('fs-extra');

const imgDir = `${__dirname}/../build/app/static/assets/images`;
const imgFile = `${__dirname}/../build/static/assets/images`;

const jsDir = `${__dirname}/../build/app/static/js`;
const jsFile = `${__dirname}/../build/static/js`;

const favDir = `${__dirname}/../build/app/favicon.png`;
const favFile = `${__dirname}/../build/favicon.png`;

fs.ensureDir(imgDir)
  .then(() => {
    fs.ensureDir(jsDir)
      .catch(console.log);
  })
  .then(() => {
    fs.copy(jsFile, jsDir)
      .catch(console.log);
  })
  .then(() => {
    fs.copy(imgFile, imgDir)
      .catch(console.log);
  })
  .then(() => {
    fs.copy(favFile, favDir);
  })
  .then(() => {
    console.log('copied');
  })
  .catch((err) => {
    console.error(err);
  });
