var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Hello Content', (err) => {
    if (err)
        throw err;
    console.log('Saved');
});
