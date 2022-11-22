const fs = require("fs");
const sharp = require("sharp");

const dirPath = "YOUR_DIRECTORY_GOES_HERE";

function processConversion(file) {
  if (file.includes(".pdf")) {
    return;
  }
  try {
    const imageProcessing = sharp();
    const fullPathOfFile = `${dirPath}${file}`;
    const stream = fs.createReadStream(fullPathOfFile);
    const webPStream = imageProcessing.webp({ quality: 70 });
    finalFile = webPStream;
    finalFileName = `${fullPathOfFile}.webp`;
    const writer = fs.createWriteStream(finalFileName);
    stream.pipe(webPStream).pipe(writer);
  } catch (ex) {
    console.log(ex);
  }
}

const convertImageToWebP = (path) => {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    processConversion(file);
  });
};

convertImageToWebP(dirPath);
