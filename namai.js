const asyncData = require('./lib/async-data.js');
(async () => {
    const namai = [
        {
            adresas: "Berlyno 4",
            aukstas: 4,
            kaina: 1500,
        },
        {
            adresas: "Paryziaus 1",
            aukstas: 3,
            kaina: 1300,
        },
        {
            adresas: "Vilniaus 14",
            aukstas: 1,
            kaina: 1800,
        },
        {
            adresas: "Lonodono 33",
            aukstas: 44,
            kaina: 2300,
        }
    ]

    for (let i = 0; i < namai.length; i++) {
        const ntC = await asyncData.create('nt', 'pardavimai' + i, namai[i])
        console.log(ntC);

    }

    const ntfc = await asyncData.folderContent('nt')
    console.log(ntfc);

    //const array1 = ['a', 'b', 'c'];
    // for (const element of array1) {
    //     console.log(element);
    // }

    for (const failoPavadinimas of ntfc) {
        console.log(failoPavadinimas);
        const ntread = await asyncData.read('nt', failoPavadinimas)
        console.log(ntread);
    }

    // for (let i = 0; i < ntfc.length; i++) {
    //     const ntr = await asyncData.read('nt', ntfc[i])
    //     console.log(ntr);
    // }




})();