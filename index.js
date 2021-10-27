// const data = require('./lib/data.js');
const asyncData = require('./lib/async-data.js');

// function parodykFailoTurini(err, content) {
//     if (err) {
//         console.log(err, content);
//         return false;
//     }

//     console.log(content);
//     console.log(content.name);
//     console.log(content.age);
// }

// data.read('students', 'asd', parodykFailoTurini);
// data.read('students', 'petras', parodykFailoTurini);
// data.read('students', 'maryte', parodykFailoTurini);

// data.folderContent('students', (err, list) => {
//     console.log(list);
// });

// data.create('books', 'grybu-karas', { text: 'Simtas grybu susirinko' }, (err, msg) => {
//     console.log(err, msg);

//     data.read('books', 'grybu-karas', (err, content) => {
//         console.log(err, content);

//         content.img = 'grybas.png';

//         data.update('books', 'grybu-karas', content, (err, msg) => {
//             console.log(err, msg);

//             data.read('books', 'grybu-karas', (err, content) => {
//                 console.log(err, content);

//                 data.delete('books', 'grybu-karas', (err, msg) => {
//                     console.log(err, msg);
//                 })
//             })
//         })
//     })
// })

// IIFE
(async () => {
    const bc = await asyncData.create('books', 'zuikis-puikis', { text: 'Simtas zuikiu susirinko' });
    console.log(bc);

    const br1 = await asyncData.read('books', 'zuikis-puikis');
    console.log(br1);

    br1.text += ' net zalia girele linko';
    const bu = await asyncData.update('books', 'zuikis-puikis', br1);
    console.log(bu);

    const br2 = await asyncData.read('books', 'zuikis-puikis');
    console.log(br2);

    const bd = await asyncData.delete('books', 'zuikis-puikis');
    console.log(bd);
})();