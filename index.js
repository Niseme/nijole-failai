const data = require('./lib/data.js');

function parodykFailoTurini(err, content) {
    if (err) {
        console.log(err, content);
        return false;
    }

    console.log(content);
    console.log(content.name);
    console.log(content.age);
}

data.read('students', 'asd', parodykFailoTurini);
data.read('students', 'petras', parodykFailoTurini);
data.read('students', 'maryte', parodykFailoTurini);

data.folderContent('students', (err, list) => {
    console.log(list);
});