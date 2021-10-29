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
// (async () => {
//     const bc = await asyncData.create('books', 'zuikis-puikis', { text: 'Simtas zuikiu susirinko' });
//     console.log(bc);

//     const br1 = await asyncData.read('books', 'zuikis-puikis');
//     console.log(br1);

//     br1.text += ' net zalia girele linko';
//     const bu = await asyncData.update('books', 'zuikis-puikis', br1);
//     console.log(bu);

//     const br2 = await asyncData.read('books', 'zuikis-puikis');
//     console.log(br2);

//     const bd = await asyncData.delete('books', 'zuikis-puikis');
//     console.log(bd);
// })();

//filmai
//1.sukurti filma Robotas C
//2. objekte nurodyti pavadinima, rezisieriu ir isleidimo metus 
//3.perskaityti R
//4. papildyti faila pagrindiniai aktoriai U
//5. perkaitom ar pavyko irasyti aktorius R
//6. atnaujinti rezisieriu U
//7.perskaitom R
//8.delete D
//9. Perskaitom R

(async () => {

    const Robotas = {
        pavadinimas: "Robotas",
        rezisierius: "Nijole",
        metai: 2021,
    }

    const filmas = await asyncData.create('filmai', 'Robotas', Robotas)
    console.log(filmas);

    const filmasRead = await asyncData.read('filmai', 'Robotas');
    console.log(filmasRead);

    filmasRead.aktoriai = ['Rimantas', 'Chuck', 'Xi'];
    const filmasUpdate = await asyncData.update('filmai', 'Robotas', filmasRead);
    console.log(filmasUpdate);


    const filmasRead2 = await asyncData.read('filmai', 'Robotas');
    console.log(filmasRead2);

    filmasRead2.rezisierius = 'Nijole S.'
    const filmasUpdate2 = await asyncData.update('filmai', 'Robotas', filmasRead2)
    console.log(filmasUpdate2);

    const filmasRead3 = await asyncData.read('filmai', 'Robotas');
    console.log(filmasRead3);

    const filmasDelete = await asyncData.delete('filmai', 'Robotas');
    console.log(filmasDelete);

    const filmasRead4 = await asyncData.read('filmai', 'Robotas');
    console.log(filmasRead4);

})();

// br1.text += ' net zalia girele linko';
//     const bu = await asyncData.update('books', 'zuikis-puikis', br1);
//     console.log(bu);