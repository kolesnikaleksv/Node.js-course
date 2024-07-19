import fs from 'fs';
import path from 'path';

const sourceDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
  console.warn(`Sourse dir ${sourceDir} doesn't exist!`);
  console.log('Exiting...');
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmSync(destinationDir, { recursive: true });

  console.log('Destination dir removed');
}

fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Start', performance.now());
  fileNames.forEach((fileName, i) => {
    const soursFilePath = path.join(sourceDir, fileName);
    const destinationFilePath = path.join(
      destinationDir,
      `${i + 1}. ${fileName}`
    );

    const readStream = fs.createReadStream(soursFilePath);
    const writeStream = fs.createWriteStream(destinationFilePath);

    readStream.pipe(writeStream);

    writeStream.on('finish', (err) => {
      console.log(`File ${fileName} was copied`);
    });
  });
  console.log('end', performance.now());
});
