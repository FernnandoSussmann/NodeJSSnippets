var fs = require('fs')

fs.writeFile('mynewfile3.txt', 'Hello Content\n', (err) => {
    if (err)
        throw err;
    console.log('Saved');
});
