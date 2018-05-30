var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
    console.log('Odczytane dane:'.green);
    console.log(files);
    fs.writeFile('./zadanie-13-4-zawartość.txt', files, function(err) {
        if (err) throw err;
        console.log('Dane zostały zapisane!'.green);
    });
});