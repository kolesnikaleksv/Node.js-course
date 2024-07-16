const fs = require('fs');

fs.writeFile('./first.txt', 'First file text', (err) => {
  if (err) console.log(err);
  else {
    console.log('File fsrst.txt was written');

    fs.appendFile('./first.txt', '\nOne more line', (err) => {
      if (err) console.log(err);
      else {
        console.log('Appended text to the first.txt file');
        fs.rename('./first.txt', './renamed-first.txt', (err) => {
          if (err) console.log(err);
          else console.log('Renamed the first.txt file');
        });
      }
    });
  }
});
