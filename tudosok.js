const tudosok = [{
  "_id": {
    "$oid": "67b495bd4e690e2ff73d9cf2"
  },
  "nev": "Albert Einstein",
  "szakterulet": "Fizika",
  "orszag": "Németország",
  "felfedezesek": [
    "Relativitáselmélet",
    "Fotoelektromos jelenség"
  ],
  "publikaciok": [
    "E=mc^2",
    "Brown-mozgás"
  ],
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2865456000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-464140800000"
    }
  },
  "__v": 0,
  "createdAt": {
    "$date": "2025-02-18T14:14:21.599Z"
  },
  "updatedAt": {
    "$date": "2025-02-18T14:14:21.599Z"
  },
  "kep": "albert_einstein.jpg"
},
{
  "_id": {
    "$oid": "67b495bd4e690e2ff73d9cf3"
  },
  "nev": "Alan Turing",
  "szakterulet": "Matematika, Informatika",
  "orszag": "Egyesült Királyság",
  "felfedezesek": [
    "Turing-gép",
    "Mesterséges intelligencia alapjai"
  ],
  "publikaciok": [
    "Computing Machinery and Intelligence"
  ],
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1815350400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-491356800000"
    }
  },
  "__v": 0,
  "createdAt": {
    "$date": "2025-02-18T14:14:21.600Z"
  },
  "updatedAt": {
    "$date": "2025-02-18T14:14:21.600Z"
  },
  "kep": "alan_turing.png"
},
{
  "_id": {
    "$oid": "67b4ba6edd8ffb87c9989100"
  },
  "nev": "Isaac Newton",
  "szakterulet": "Matematika, Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-10318838400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-7660656000000"
    }
  },
  "felfedezesek": [
    "Gravitációs törvény",
    "Newton-mozgástörvények",
    "Klasszikus mechanika alapjai",
    "Differenciál- és integrálszámítás"
  ],
  "publikaciok": [
    "Philosophiæ Naturalis Principia Mathematica",
    "Opticks"
  ],
  "kep": "tudos_1739900465676.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b4c934038993520ccd3152"
  },
  "nev": "János Neumann",
  "szakterulet": "Matematika, Informatika, Kvantummechanika",
  "orszag": "Magyarország, USA",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2083190400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-406944000000"
    }
  },
  "felfedezesek": [
    "Neumann-elvek (modern számítógépek architektúrája)",
    "Játékelmélet alapjai",
    "Sejtautomaták elmélete",
    "Numerikus analízis fejlesztése"
  ],
  "publikaciok": [
    "Theory of Games and Economic Behavior (1944)",
    "First Draft of a Report on the EDVAC (1945)"
  ],
  "kep": "tudos_1739902474133.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b4cfb23b5631d05717a2c3"
  },
  "nev": "Nikola Tesla",
  "szakterulet": "Elektromágneses mezők, Villamosság",
  "orszag": "Szerbia",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3581020800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-851558400000"
    }
  },
  "felfedezesek": [
    "Tesla tekercs",
    "Aszinkron motor",
    "Rádiótechnika",
    "Váltakozó áram"
  ],
  "publikaciok": [
    "Recherches sur les Substances Radioactives"
  ],
  "kep": "tudos_1739902898336.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5e883ac33cd0a30bffc0b"
  },
  "nev": "Alessandro Volta",
  "szakterulet": "Fizika",
  "orszag": "Olaszország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-7096118400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-4507228800000"
    }
  },
  "felfedezesek": [
    "Elektromos áramkör",
    "Volta-oszlop (első elektromos elem)"
  ],
  "publikaciok": [
    "Le lettere del Signor Don Alessandro Volta"
  ],
  "kep": "tudos_1739975391623.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5e883ac33cd0a30bffc0c"
  },
  "nev": "André-Marie Ampère",
  "szakterulet": "Fizika, Matematika",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-6151939200000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-4214764800000"
    }
  },
  "felfedezesek": [
    "Elektrodinamika alapjai",
    "Ampère törvényei"
  ],
  "publikaciok": [
    "Mémoire sur la théorie mathématique des phénomènes électrodynamiques"
  ],
  "kep": "tudos_1739975630962.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5e883ac33cd0a30bffc0d"
  },
  "nev": "Antoine Lavoisier",
  "szakterulet": "Kémia",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-7142947200000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-5542992000000"
    }
  },
  "felfedezesek": [
    "Tömegmegmaradás törvénye",
    "Oxigén szerepe az égésben"
  ],
  "publikaciok": [
    "Traité élémentaire de chimie"
  ],
  "kep": "tudos_1739975677884.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5e883ac33cd0a30bffc0e"
  },
  "nev": "Archimédész",
  "szakterulet": "Matematika, Fizika, Mérnöki tudományok",
  "orszag": "Ókori Görögország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-53110339200000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-55477180800000"
    }
  },
  "felfedezesek": [
    "Felhajtóerő törvénye",
    "Csavarorsó (Archimédész-csavar)"
  ],
  "publikaciok": [
    "A kör méreteiről",
    "A spirálokról"
  ],
  "kep": "tudos_1739975589033.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5ec76ac33cd0a30bffc31"
  },
  "nev": "Charles Babbage",
  "szakterulet": "Matematika, Számítástechnika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-5617641600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-3099081600000"
    }
  },
  "felfedezesek": [
    "Analitikai gép",
    "Diferenciálgép"
  ],
  "publikaciok": [
    "On the Economy of Machinery and Manufactures"
  ],
  "kep": "tudos_1739996234875.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5ec76ac33cd0a30bffc32"
  },
  "nev": "Henri Becquerel",
  "szakterulet": "Fizika",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3693600000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1936137600000"
    }
  },
  "felfedezesek": [
    "Radioaktivitás felfedezése"
  ],
  "publikaciok": [
    "Recherches sur une Propriété Nouvelle de la Matière"
  ],
  "kep": "tudos_1739996342374.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5ec76ac33cd0a30bffc33"
  },
  "nev": "Niels Bohr",
  "szakterulet": "Fizika",
  "orszag": "Dánia",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2658182400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-224726400000"
    }
  },
  "felfedezesek": [
    "Bohr-féle atommodell",
    "Kvantummechanika alapjai"
  ],
  "publikaciok": [
    "On the Constitution of Atoms and Molecules"
  ],
  "kep": "tudos_1739996676641.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5ec76ac33cd0a30bffc34"
  },
  "nev": "Ludwig Boltzmann",
  "szakterulet": "Fizika",
  "orszag": "Ausztria",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3971894400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1998345600000"
    }
  },
  "felfedezesek": [
    "Boltzmann-állandó",
    "Statisztikus mechanika"
  ],
  "publikaciok": [
    "Lectures on Gas Theory"
  ],
  "kep": "tudos_1739996628076.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5ec76ac33cd0a30bffc35"
  },
  "nev": "Robert Boyle",
  "szakterulet": "Kémia, Fizika",
  "orszag": "Írország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-10821945600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-8772883200000"
    }
  },
  "felfedezesek": [
    "Boyle-törvény",
    "Gázok viselkedésének tanulmányozása"
  ],
  "publikaciok": [
    "The Sceptical Chymist"
  ],
  "kep": "tudos_1739996731536.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5ec76ac33cd0a30bffc36"
  },
  "nev": "Tycho Brahe",
  "szakterulet": "Csillagászat",
  "orszag": "Dánia",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-13350182400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-11618899200000"
    }
  },
  "felfedezesek": [
    "Pontos bolygópálya-megfigyelések",
    "Tycho-rendszer"
  ],
  "publikaciok": [
    "De Nova Stella"
  ],
  "kep": "tudos_1739996184320.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5ec76ac33cd0a30bffc37"
  },
  "nev": "William Henry Bragg",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3392409600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-877564800000"
    }
  },
  "felfedezesek": [
    "Röntgenkrisztallográfia",
    "Bragg-törvény"
  ],
  "publikaciok": [
    "X-rays and Crystal Structure"
  ],
  "kep": "tudos_1739996914162.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5ec76ac33cd0a30bffc38"
  },
  "nev": "William Lawrence Bragg",
  "szakterulet": "Fizika",
  "orszag": "Ausztrália",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2516832000000"
    }
  },
  "halalozasiDatum": {
    "$date": "1971-07-01T00:00:00.000Z"
  },
  "felfedezesek": [
    "Röntgenkrisztallográfia",
    "Kristályszerkezet elemzés"
  ],
  "publikaciok": [
    "The Crystalline State"
  ],
  "kep": "tudos_1739996998601.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5ec76ac33cd0a30bffc39"
  },
  "nev": "Louis de Broglie",
  "szakterulet": "Fizika",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2441836800000"
    }
  },
  "halalozasiDatum": {
    "$date": "1987-03-19T00:00:00.000Z"
  },
  "felfedezesek": [
    "Hullám-részecske kettősség",
    "De Broglie-hullámhossz"
  ],
  "publikaciok": [
    "Recherches sur la théorie des quanta"
  ],
  "kep": "tudos_1739996585033.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b5ec76ac33cd0a30bffc3a"
  },
  "nev": "Robert Bunsen",
  "szakterulet": "Kémia",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-5009904000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2220912000000"
    }
  },
  "felfedezesek": [
    "Bunsen-égő",
    "Spektroszkópia"
  ],
  "publikaciok": [
    "Gasometry: The Chemistry of Gases"
  ],
  "kep": "tudos_1739996807838.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc62"
  },
  "nev": "Rachel Carson",
  "szakterulet": "Biológia",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1975536000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-180403200000"
    }
  },
  "felfedezesek": [
    "Ökológiai veszélyek felismerése",
    "DDT és egyéb peszticidek hatásainak feltárása"
  ],
  "publikaciok": [
    "Silent Spring"
  ],
  "kep": "tudos_1740148756767.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc63"
  },
  "nev": "Henry Cavendish",
  "szakterulet": "Kémia, Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-7517750400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-5044464000000"
    }
  },
  "felfedezesek": [
    "Hidrogén izolálása",
    "Föld tömegének és sűrűségének meghatározása"
  ],
  "publikaciok": [
    "Experiments on Air"
  ],
  "kep": "tudos_1740148859195.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc64"
  },
  "nev": "James Chadwick",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2467756800000"
    }
  },
  "halalozasiDatum": {
    "$date": "1974-07-24T00:00:00.000Z"
  },
  "felfedezesek": [
    "Neutron felfedezése"
  ],
  "publikaciok": [
    "Possible Existence of a Neutron"
  ],
  "kep": "tudos_1740148908453.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc65"
  },
  "nev": "Jacques Charles",
  "szakterulet": "Fizika",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-7041513600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-4630608000000"
    }
  },
  "felfedezesek": [
    "Charles-törvény"
  ],
  "publikaciok": [
    "Gázok térfogatának változása a hőmérséklet függvényében"
  ],
  "kep": "tudos_1740148941637.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc66"
  },
  "nev": "Marie Curie",
  "szakterulet": "Fizika, Kémia",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3223584000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1120176000000"
    }
  },
  "felfedezesek": [
    "Rádium és polónium felfedezése",
    "Radioaktivitás kutatása"
  ],
  "publikaciok": [
    "Radioactive Substances"
  ],
  "kep": "tudos_1740148976108.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc67"
  },
  "nev": "Pierre Curie",
  "szakterulet": "Fizika",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3491251200000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2010355200000"
    }
  },
  "felfedezesek": [
    "Piezolektromosság",
    "Radioaktivitás kutatása"
  ],
  "publikaciok": [
    "Studies on Radioactivity"
  ],
  "kep": "tudos_1740149002003.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc68"
  },
  "nev": "John Dalton",
  "szakterulet": "Kémia, Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-6416150400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-3958243200000"
    }
  },
  "felfedezesek": [
    "Atomelmélet",
    "Dalton-törvény"
  ],
  "publikaciok": [
    "A New System of Chemical Philosophy"
  ],
  "kep": "tudos_1740149029847.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc69"
  },
  "nev": "Charles Darwin",
  "szakterulet": "Biológia",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-5077036800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2767651200000"
    }
  },
  "felfedezesek": [
    "Természetes szelekció elmélete",
    "Evolúciós elmélet"
  ],
  "publikaciok": [
    "On the Origin of Species"
  ],
  "kep": "tudos_1740149054926.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc6a"
  },
  "nev": "Clinton Davisson",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2783116800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-376012800000"
    }
  },
  "felfedezesek": [
    "Elektronok hullámtermészete"
  ],
  "publikaciok": [
    "The Scattering of Electrons by a Single Crystal of Nickel"
  ],
  "kep": "tudos_1740149086736.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc6b"
  },
  "nev": "René Descartes",
  "szakterulet": "Matematika, Filozófia",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-11794550400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-10094630400000"
    }
  },
  "felfedezesek": [
    "Analitikus geometria",
    "Descartes-féle koordináta-rendszer"
  ],
  "publikaciok": [
    "Discourse on the Method"
  ],
  "kep": "tudos_1740136815146.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc6c"
  },
  "nev": "Paul Dirac",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2126995200000"
    }
  },
  "halalozasiDatum": {
    "$date": "1984-10-20T00:00:00.000Z"
  },
  "felfedezesek": [
    "Dirac-egyenlet",
    "Antianyag"
  ],
  "publikaciok": [
    "The Principles of Quantum Mechanics"
  ],
  "kep": "tudos_1740149288030.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc6d"
  },
  "nev": "Christian Doppler",
  "szakterulet": "Fizika",
  "orszag": "Ausztria",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-5241369600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-3685651200000"
    }
  },
  "felfedezesek": [
    "Doppler-effektus"
  ],
  "publikaciok": [
    "Über das farbige Licht der Doppelsterne"
  ],
  "kep": "tudos_1740154977997.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b644e0ac33cd0a30bffc6e"
  },
  "nev": "Pierre Dulong",
  "szakterulet": "Fizika, Kémia",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-5834332800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-4148409600000"
    }
  },
  "felfedezesek": [
    "Dulong-Petit törvény"
  ],
  "publikaciok": [
    "Recherches sur la Chaleur Spécifique"
  ],
  "kep": "tudos_1740155736137.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc7f"
  },
  "nev": "Thomas Edison",
  "szakterulet": "Fizika, Mérnöki tudományok",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3877977600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1205712000000"
    }
  },
  "felfedezesek": [
    "Izzólámpa fejlesztése",
    "Fonográf",
    "Filmfelvevő"
  ],
  "publikaciok": [
    "Edison’s Patents"
  ],
  "kep": "tudos_1740155758517.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc80"
  },
  "nev": "Paul Ehrlich",
  "szakterulet": "Orvostudomány",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3654374400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1715731200000"
    }
  },
  "felfedezesek": [
    "Kemoterápia alapjai",
    "Immunológia fejlesztése"
  ],
  "publikaciok": [
    "Experimental Chemotherapy"
  ],
  "kep": "tudos_1740155787663.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc81"
  },
  "nev": "Euclid",
  "szakterulet": "Matematika",
  "orszag": "Ókori Görögország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-62135596800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-62135596800000"
    }
  },
  "felfedezesek": [
    "Euklideszi geometria"
  ],
  "publikaciok": [
    "Elements"
  ],
  "kep": "tudos_1740155853582.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc82"
  },
  "nev": "Michael Faraday",
  "szakterulet": "Fizika, Kémia",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-5625849600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-3229977600000"
    }
  },
  "felfedezesek": [
    "Elektromágneses indukció",
    "Elektrolízis törvényei"
  ],
  "publikaciok": [
    "Experimental Researches in Electricity"
  ],
  "kep": "tudos_1740155877399.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc83"
  },
  "nev": "Pierre de Fermat",
  "szakterulet": "Matematika",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-11435472000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-9623836800000"
    }
  },
  "felfedezesek": [
    "Fermat utolsó tétele",
    "Végtelen leszállás módszere"
  ],
  "publikaciok": [
    "Arithmetica marginalia"
  ],
  "kep": "tudos_1740177323191.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc84"
  },
  "nev": "Enrico Fermi",
  "szakterulet": "Fizika",
  "orszag": "Olaszország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2154038400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-476323200000"
    }
  },
  "felfedezesek": [
    "Neutronok lassítása",
    "Első atommáglya"
  ],
  "publikaciok": [
    "Nuclear Physics"
  ],
  "kep": "tudos_1740149746461.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc85"
  },
  "nev": "Alexander Fleming",
  "szakterulet": "Orvostudomány",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2789769600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-467424000000"
    }
  },
  "felfedezesek": [
    "Penicillin felfedezése"
  ],
  "publikaciok": [
    "On the Antibacterial Action of Penicillium Moulds"
  ],
  "kep": "tudos_1740137059619.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc86"
  },
  "nev": "Benjamin Franklin",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-8329651200000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-5671036800000"
    }
  },
  "felfedezesek": [
    "Villámhárító",
    "Elektromosság kutatása"
  ],
  "publikaciok": [
    "Experiments and Observations on Electricity"
  ],
  "kep": "tudos_1740137099921.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc87"
  },
  "nev": "Galileo Galilei",
  "szakterulet": "Csillagászat, Fizika",
  "orszag": "Olaszország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-12808281600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-10350028800000"
    }
  },
  "felfedezesek": [
    "Távcsöves csillagászat úttörője",
    "Mozgástörvények"
  ],
  "publikaciok": [
    "Dialogue Concerning the Two Chief World Systems"
  ],
  "kep": "tudos_1740177385274.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc88"
  },
  "nev": "Carl Friedrich Gauss",
  "szakterulet": "Matematika, Fizika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-6080140800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-3624480000000"
    }
  },
  "felfedezesek": [
    "Gauss-elimináció",
    "Gauss-törvény"
  ],
  "publikaciok": [
    "Disquisitiones Arithmeticae"
  ],
  "kep": "tudos_1740137747787.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc89"
  },
  "nev": "William Gilbert",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-13430880000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-11552630400000"
    }
  },
  "felfedezesek": [
    "Föld mágneses mezőjének leírása"
  ],
  "publikaciok": [
    "De Magnete"
  ],
  "kep": "tudos_1740177445527.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc8a"
  },
  "nev": "Hans Geiger",
  "szakterulet": "Fizika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2753481600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-765936000000"
    }
  },
  "felfedezesek": [
    "Geiger-Müller számláló"
  ],
  "publikaciok": [
    "On the Scattering of α-Particles"
  ],
  "kep": "tudos_1740154373029.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64660ac33cd0a30bffc8b"
  },
  "nev": "Kurt Gödel",
  "szakterulet": "Matematika, Logika",
  "orszag": "Ausztria, Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2009577600000"
    }
  },
  "halalozasiDatum": {
    "$date": "1978-01-14T00:00:00.000Z"
  },
  "felfedezesek": [
    "Gödel-féle nemteljességi tételek"
  ],
  "publikaciok": [
    "On Formally Undecidable Propositions"
  ],
  "kep": "tudos_1740177465541.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc91"
  },
  "nev": "Stephen Hawking",
  "szakterulet": "Elméleti fizika, Kozmológia",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-883008000000"
    }
  },
  "halalozasiDatum": {
    "$date": "2018-03-14T00:00:00.000Z"
  },
  "felfedezesek": [
    "Hawking-sugárzás",
    "Fekete lyukak termodinamikája"
  ],
  "publikaciok": [
    "A Brief History of Time"
  ],
  "kep": "tudos_1740177497692.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc92"
  },
  "nev": "Heinrich Hertz",
  "szakterulet": "Fizika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3561408000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2398291200000"
    }
  },
  "felfedezesek": [
    "Elektromágneses hullámok létezésének bizonyítása"
  ],
  "publikaciok": [
    "Electric Waves"
  ],
  "kep": "tudos_1740177530138.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc93"
  },
  "nev": "David Hilbert",
  "szakterulet": "Matematika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3406233600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-848275200000"
    }
  },
  "felfedezesek": [
    "Hilbert-terek",
    "Hilbert-problémák"
  ],
  "publikaciok": [
    "Grundlagen der Geometrie"
  ],
  "kep": "tudos_1740177558305.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc94"
  },
  "nev": "Hippocrates",
  "szakterulet": "Orvostudomány",
  "orszag": "Ókori Görögország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-47650982400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-50491123200000"
    }
  },
  "felfedezesek": [
    "Hippokratészi eskü",
    "Orvosi diagnosztika alapjai"
  ],
  "publikaciok": [
    "Corpus Hippocraticum"
  ],
  "kep": "tudos_1740177594449.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc95"
  },
  "nev": "Fred Hoyle",
  "szakterulet": "Csillagászat, Asztrofizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1720656000000"
    }
  },
  "halalozasiDatum": {
    "$date": "2001-08-20T00:00:00.000Z"
  },
  "felfedezesek": [
    "Csillagok nukleoszintézise"
  ],
  "publikaciok": [
    "The Nature of the Universe"
  ],
  "kep": "tudos_1740177625340.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc96"
  },
  "nev": "Edwin Hubble",
  "szakterulet": "Csillagászat",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2528150400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-513129600000"
    }
  },
  "felfedezesek": [
    "Hubble-törvény",
    "Galaxisok tágulása"
  ],
  "publikaciok": [
    "The Realm of the Nebulae"
  ],
  "kep": "tudos_1740177745280.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc97"
  },
  "nev": "Christian Huygens",
  "szakterulet": "Fizika, Csillagászat",
  "orszag": "Hollandia",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-10751961600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-8661859200000"
    }
  },
  "felfedezesek": [
    "Fénysugárzás hullámtermészete",
    "Szaturnusz gyűrűinek felfedezése"
  ],
  "publikaciok": [
    "Traité de la lumière"
  ],
  "kep": "tudos_1740177879595.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc98"
  },
  "nev": "Johannes Kepler",
  "szakterulet": "Csillagászat, Matematika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-12560140800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-10701849600000"
    }
  },
  "felfedezesek": [
    "Kepler-törvények",
    "Elliptikus bolygópályák"
  ],
  "publikaciok": [
    "Astronomia Nova"
  ],
  "kep": "tudos_1740154733341.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc99"
  },
  "nev": "Jan Ingenhousz",
  "szakterulet": "Botanika, Kémia",
  "orszag": "Hollandia",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-7544188800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-5374684800000"
    }
  },
  "felfedezesek": [
    "Fotoszintézis felfedezése"
  ],
  "publikaciok": [
    "Experiments Upon Vegetables"
  ],
  "kep": "tudos_1740177939656.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc9a"
  },
  "nev": "James Prescott Joule",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4765824000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2531606400000"
    }
  },
  "felfedezesek": [
    "Energiamegmaradás törvénye",
    "Joule-effektus"
  ],
  "publikaciok": [
    "On the Mechanical Equivalent of Heat"
  ],
  "kep": "tudos_1740178018341.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc9b"
  },
  "nev": "James Clerk Maxwell",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4372358400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2845065600000"
    }
  },
  "felfedezesek": [
    "Elektromágneses hullámegyenletek",
    "Maxwell-Boltzmann eloszlás"
  ],
  "publikaciok": [
    "A Treatise on Electricity and Magnetism"
  ],
  "kep": "tudos_1740178320506.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc9c"
  },
  "nev": "J. Robert Oppenheimer",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2073168000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-90547200000"
    }
  },
  "felfedezesek": [
    "Atomfegyver fejlesztése",
    "Fekete lyukak elmélete"
  ],
  "publikaciok": [
    "On Continued Gravitational Contraction"
  ],
  "kep": "tudos_1740178440476.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc9d"
  },
  "nev": "Joseph Priestley",
  "szakterulet": "Kémia",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-7472822400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-5235408000000"
    }
  },
  "felfedezesek": [
    "Oxigén felfedezése"
  ],
  "publikaciok": [
    "Experiments and Observations on Different Kinds of Air"
  ],
  "kep": "tudos_1740178622359.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64958ac33cd0a30bffc9e"
  },
  "nev": "Joseph Fourier",
  "szakterulet": "Matematika, Fizika",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-6367593600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-4406313600000"
    }
  },
  "felfedezesek": [
    "Fourier-sorok",
    "Hővezetés egyenlete"
  ],
  "publikaciok": [
    "Théorie analytique de la chaleur"
  ],
  "kep": "tudos_1740177359508.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffca6"
  },
  "nev": "Lord Kelvin",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4592073600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1957910400000"
    }
  },
  "felfedezesek": [
    "Kelvin-skála",
    "Termodinamika második főtétele"
  ],
  "publikaciok": [
    "Mathematical and Physical Papers"
  ],
  "kep": "tudos_1740178090738.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffca7"
  },
  "nev": "Gustav Kirchhoff",
  "szakterulet": "Fizika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4601232000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2594246400000"
    }
  },
  "felfedezesek": [
    "Kirchhoff-törvények",
    "Spektrálanalízis"
  ],
  "publikaciok": [
    "Research on the Solar Spectrum"
  ],
  "kep": "tudos_1740178159001.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffca8"
  },
  "nev": "Pierre-Simon Laplace",
  "szakterulet": "Matematika, Csillagászat",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-6967036800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-4507228800000"
    }
  },
  "felfedezesek": [
    "Laplace-egyenlet",
    "Nebuláris hipotézis"
  ],
  "publikaciok": [
    "Mécanique Céleste"
  ],
  "kep": "tudos_1740178190628.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffca9"
  },
  "nev": "Hendrik Lorentz",
  "szakterulet": "Fizika",
  "orszag": "Hollandia",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3675024000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1322524800000"
    }
  },
  "felfedezesek": [
    "Lorentz-transzformáció",
    "Elektrondinamika alapjai"
  ],
  "publikaciok": [
    "The Theory of Electrons"
  ],
  "kep": "tudos_1740178269299.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffcaa"
  },
  "nev": "Ada Lovelace",
  "szakterulet": "Matematika, Informatika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4861728000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-3695155200000"
    }
  },
  "felfedezesek": [
    "Első számítógépes algoritmus"
  ],
  "publikaciok": [
    "Notes on the Analytical Engine"
  ],
  "kep": "tudos_1740135427936.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffcab"
  },
  "nev": "Gregor Mendel",
  "szakterulet": "Genetika, Biológia",
  "orszag": "Csehország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4653158400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2713478400000"
    }
  },
  "felfedezesek": [
    "Mendel-törvények"
  ],
  "publikaciok": [
    "Experiments on Plant Hybridization"
  ],
  "kep": "tudos_1740178368760.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffcac"
  },
  "nev": "Lise Meitner",
  "szakterulet": "Fizika",
  "orszag": "Ausztria",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2876428800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-37238400000"
    }
  },
  "felfedezesek": [
    "Nukleáris hasadás"
  ],
  "publikaciok": [
    "Nuclear Fission"
  ],
  "kep": "tudos_1740178344334.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffcad"
  },
  "nev": "Dmitri Mendeleev",
  "szakterulet": "Kémia",
  "orszag": "Oroszország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4288464000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1985385600000"
    }
  },
  "felfedezesek": [
    "Periódusos rendszer"
  ],
  "publikaciok": [
    "Principles of Chemistry"
  ],
  "kep": "tudos_1740135602153.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffcae"
  },
  "nev": "Henry Moseley",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2591049600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1716595200000"
    }
  },
  "felfedezesek": [
    "Moseley-törvény",
    "Röntgensugárzás és atomi szerkezet"
  ],
  "publikaciok": [
    "The High-Frequency Spectra of the Elements"
  ],
  "kep": "tudos_1740178393483.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffcaf"
  },
  "nev": "Barbara McClintock",
  "szakterulet": "Genetika",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2131574400000"
    }
  },
  "halalozasiDatum": {
    "$date": "1992-09-02T00:00:00.000Z"
  },
  "felfedezesek": [
    "Ugráló gének (transzpozonok)"
  ],
  "publikaciok": [
    "The Discovery and Characterization of Transposable Elements"
  ],
  "kep": "tudos_1740138454750.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffcb0"
  },
  "nev": "Andrei Markov",
  "szakterulet": "Matematika",
  "orszag": "Oroszország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3583267200000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1497484800000"
    }
  },
  "felfedezesek": [
    "Markov-láncok"
  ],
  "publikaciok": [
    "Theory of Algorithms"
  ],
  "kep": "tudos_1740138414185.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64d99ac33cd0a30bffcb1"
  },
  "nev": "Guglielmo Marconi",
  "szakterulet": "Fizika, Mérnöki tudományok",
  "orszag": "Olaszország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3019593600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1024099200000"
    }
  },
  "felfedezesek": [
    "Vezeték nélküli rádiókommunikáció"
  ],
  "publikaciok": [
    "Wireless Telegraphy"
  ],
  "kep": "tudos_1740178295531.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64f0aac33cd0a30bffcb7"
  },
  "nev": "John Napier",
  "szakterulet": "Matematika",
  "orszag": "Skócia",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-13251254400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-11131516800000"
    }
  },
  "felfedezesek": [
    "Logaritmus",
    "Napier-pálcák"
  ],
  "publikaciok": [
    "Mirifici Logarithmorum Canonis Descriptio"
  ],
  "kep": "tudos_1740178413307.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64f0aac33cd0a30bffcb8"
  },
  "nev": "Alfred Nobel",
  "szakterulet": "Kémia, Mérnöki tudományok",
  "orszag": "Svédország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4297968000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2305497600000"
    }
  },
  "felfedezesek": [
    "Dinamittal kapcsolatos kutatások"
  ],
  "publikaciok": [
    "On the Explosive Properties of Nitroglycerin"
  ],
  "kep": "tudos_1740135536140.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64f0aac33cd0a30bffcb9"
  },
  "nev": "Hans Christian Ørsted",
  "szakterulet": "Fizika",
  "orszag": "Dánia",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-6070982400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-3749500800000"
    }
  },
  "felfedezesek": [
    "Elektromágnesesség felfedezése"
  ],
  "publikaciok": [
    "Experiments on the Effect of a Current of Electricity on the Magnetic Needle"
  ],
  "kep": "tudos_1740178464683.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64f0aac33cd0a30bffcba"
  },
  "nev": "Georg Ohm",
  "szakterulet": "Fizika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-5705337600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-3644524800000"
    }
  },
  "felfedezesek": [
    "Ohm törvénye"
  ],
  "publikaciok": [
    "Die galvanische Kette, mathematisch bearbeitet"
  ],
  "kep": "tudos_1740137783200.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64f0aac33cd0a30bffcbb"
  },
  "nev": "Wilhelm Ostwald",
  "szakterulet": "Kémia",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3671049600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1191110400000"
    }
  },
  "felfedezesek": [
    "Katalízis",
    "Ostwald-féle hígítási törvény"
  ],
  "publikaciok": [
    "Lehrbuch der allgemeinen Chemie"
  ],
  "kep": "tudos_1740178509043.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64f0aac33cd0a30bffcbc"
  },
  "nev": "Blaise Pascal",
  "szakterulet": "Matematika, Fizika, Filozófia",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-10935648000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-9699609600000"
    }
  },
  "felfedezesek": [
    "Pascal-háromszög",
    "Hidrosztatikai nyomás"
  ],
  "publikaciok": [
    "Pensées"
  ],
  "kep": "tudos_1740135565016.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64f0aac33cd0a30bffcbd"
  },
  "nev": "Max Planck",
  "szakterulet": "Fizika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3524688000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-702000000000"
    }
  },
  "felfedezesek": [
    "Kvantummechanika alapjai",
    "Planck-állandó"
  ],
  "publikaciok": [
    "Origin and Development of the Quantum Theory"
  ],
  "kep": "tudos_1740135374431.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64f0aac33cd0a30bffcbe"
  },
  "nev": "Prafulla Chandra Ray",
  "szakterulet": "Kémia",
  "orszag": "India",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3421267200000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-806112000000"
    }
  },
  "felfedezesek": [
    "Nitrátvegyületek tanulmányozása"
  ],
  "publikaciok": [
    "A History of Hindu Chemistry"
  ],
  "kep": "tudos_1740178669107.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b64f0aac33cd0a30bffcbf"
  },
  "nev": "Henri Poincaré",
  "szakterulet": "Matematika, Fizika",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3650400000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1813276800000"
    }
  },
  "felfedezesek": [
    "Káoszelmélet",
    "Poincaré-sejtés"
  ],
  "publikaciok": [
    "Science and Hypothesis"
  ],
  "kep": "tudos_1740178601052.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b650a3ac33cd0a30bffcc7"
  },
  "nev": "George Francis Rayner Ellis",
  "szakterulet": "Kozmológia, Matematika",
  "orszag": "Dél-afrikai Köztársaság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-959126400000"
    }
  },
  "halalozasiDatum": null,
  "felfedezesek": [
    "Általános relativitáselmélet",
    "Kozmológiai modellek"
  ],
  "publikaciok": [
    "The Large Scale Structure of Space-Time"
  ],
  "kep": "tudos_1740155826158.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b650a3ac33cd0a30bffcc8"
  },
  "nev": "C.V. Raman",
  "szakterulet": "Fizika",
  "orszag": "India",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2560809600000"
    }
  },
  "halalozasiDatum": {
    "$date": "1970-11-21T00:00:00.000Z"
  },
  "felfedezesek": [
    "Raman-szórás"
  ],
  "publikaciok": [
    "Molecular Diffraction of Light"
  ],
  "kep": "tudos_1740138488442.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b650a3ac33cd0a30bffcc9"
  },
  "nev": "Srinivasa Ramanujan",
  "szakterulet": "Matematika",
  "orszag": "India",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2588544000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1567900800000"
    }
  },
  "felfedezesek": [
    "Ramanujan-prímek",
    "Ramanujan thetafüggvény"
  ],
  "publikaciok": [
    "Notebooks of Srinivasa Ramanujan"
  ],
  "kep": "tudos_1740178648957.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b650a3ac33cd0a30bffcca"
  },
  "nev": "Wilhelm Röntgen",
  "szakterulet": "Fizika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3937248000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1479772800000"
    }
  },
  "felfedezesek": [
    "Röntgensugarak felfedezése"
  ],
  "publikaciok": [
    "Über eine neue Art von Strahlen"
  ],
  "kep": "tudos_1740178700018.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b650a3ac33cd0a30bffccb"
  },
  "nev": "Ernest Rutherford",
  "szakterulet": "Kémia, Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3103315200000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1016236800000"
    }
  },
  "felfedezesek": [
    "Atommag felfedezése",
    "Radioaktív bomlás"
  ],
  "publikaciok": [
    "Radioactive Transformations"
  ],
  "kep": "tudos_1740178873891.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b650a3ac33cd0a30bffccc"
  },
  "nev": "Abdus Salam",
  "szakterulet": "Fizika, Kvantummechanika",
  "orszag": "Pakisztán",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1386115200000"
    }
  },
  "halalozasiDatum": {
    "$date": "1996-11-21T00:00:00.000Z"
  },
  "felfedezesek": [
    "Elektrogyenge kölcsönhatás"
  ],
  "publikaciok": [
    "Gauge Unification of Fundamental Forces"
  ],
  "kep": "tudos_1740133235903.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b650a3ac33cd0a30bffccd"
  },
  "nev": "Carl Sagan",
  "szakterulet": "Csillagászat",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1109116800000"
    }
  },
  "halalozasiDatum": {
    "$date": "1996-12-20T00:00:00.000Z"
  },
  "felfedezesek": [
    "Planetológia",
    "SETI"
  ],
  "publikaciok": [
    "Cosmos"
  ],
  "kep": "tudos_1740178898298.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b65246ac33cd0a30bffcd9"
  },
  "nev": "James Watt",
  "szakterulet": "Gépészet, Fizika",
  "orszag": "Egyesült Királyság",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-7382793600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-4744742400000"
    }
  },
  "felfedezesek": [
    "Gőzgép fejlesztése"
  ],
  "publikaciok": [
    "Patent Specification for Steam Engine"
  ],
  "kep": "tudos_1740149417353.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b65246ac33cd0a30bffcda"
  },
  "nev": "Wilhelm Eduard Weber",
  "szakterulet": "Fizika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-5212857600000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2478038400000"
    }
  },
  "felfedezesek": [
    "Elektromágneses egységek"
  ],
  "publikaciok": [
    "Mechanik der menschlichen Gehwerkzeuge"
  ],
  "kep": "tudos_1740179079777.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b65246ac33cd0a30bffcdb"
  },
  "nev": "Xavier Bichat",
  "szakterulet": "Orvostudomány, Anatómia",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-6252422400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-5284137600000"
    }
  },
  "felfedezesek": [
    "Szövetelmélet az orvostudományban"
  ],
  "publikaciok": [
    "Anatomie générale"
  ],
  "kep": "tudos_1740138377654.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b65246ac33cd0a30bffcdc"
  },
  "nev": "Chen-Ning Yang",
  "szakterulet": "Fizika",
  "orszag": "Kína",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1491955200000"
    }
  },
  "halalozasiDatum": null,
  "felfedezesek": [
    "Paritássértés a gyenge kölcsönhatásban"
  ],
  "publikaciok": [
    "Conservation of Isotopic Spin and Isotopic Gauge Invariance"
  ],
  "kep": "tudos_1740179126387.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b65246ac33cd0a30bffcdd"
  },
  "nev": "Ahmed Zewail",
  "szakterulet": "Kémia",
  "orszag": "Egyiptom, Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-752544000000"
    }
  },
  "halalozasiDatum": {
    "$date": "2016-08-02T00:00:00.000Z"
  },
  "felfedezesek": [
    "Femto-kémia"
  ],
  "publikaciok": [
    "The Chemical Bond: Structure and Dynamics"
  ],
  "kep": "tudos_1740135473093.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b65246ac33cd0a30bffcde"
  },
  "nev": "Évariste Galois",
  "szakterulet": "Matematika",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4991932800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-4341859200000"
    }
  },
  "felfedezesek": [
    "Galois-elmélet"
  ],
  "publikaciok": [
    "Memoire sur les conditions de resolubilité des équations par radicaux"
  ],
  "kep": "tudos_1740177421644.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b65246ac33cd0a30bffcdf"
  },
  "nev": "Ödön Lechner",
  "szakterulet": "Építészet",
  "orszag": "Magyarország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3924028800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1753401600000"
    }
  },
  "felfedezesek": [
    "Magyar szecesszió megteremtése"
  ],
  "publikaciok": [
    "Magyar építészet fejlődése"
  ],
  "kep": "tudos_1740178213140.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b65246ac33cd0a30bffce0"
  },
  "nev": "Łukasiewicz Jan",
  "szakterulet": "Matematika, Logika",
  "orszag": "Lengyelország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2872627200000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-438134400000"
    }
  },
  "felfedezesek": [
    "Lengyel logikai jelölés"
  ],
  "publikaciok": [
    "Elements of Mathematical Logic"
  ],
  "kep": "tudos_1740177993843.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b85a2c3799707028146fa9"
  },
  "nev": "Werner Heisenberg",
  "szakterulet": "Fizika, Kvantummechanika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2148249600000"
    }
  },
  "halalozasiDatum": {
    "$date": "1976-02-01T00:00:00.000Z"
  },
  "felfedezesek": [
    "Határozatlansági reláció",
    "A kvantummechanika egyik megalapítója"
  ],
  "publikaciok": [],
  "kep": "tudos_1740134956198.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b85b4e3799707028146fb2"
  },
  "nev": "Erwin Schrödinger",
  "szakterulet": "Fizika, Kvantummechanika",
  "orszag": "Ausztria",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2599948800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-283737600000"
    }
  },
  "felfedezesek": [
    "Schrödinger-egyenlet",
    "kvantummechanikai szuperpozíció"
  ],
  "publikaciok": [],
  "kep": "tudos_1740135246359.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b863363799707028146fe8"
  },
  "nev": "Edsger Wybe Dijkstra",
  "szakterulet": "Matematika, Informatika",
  "orszag": "Hollandia",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1251072000000"
    }
  },
  "halalozasiDatum": {
    "$date": "2002-08-06T00:00:00.000Z"
  },
  "felfedezesek": [
    "Dijkstra-algoritmus"
  ],
  "publikaciok": [],
  "kep": "tudos_1740137270771.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b866111cf60455b4cbe530"
  },
  "nev": "Nicolas Léonard Sadi Carnot",
  "szakterulet": "Matematika, Fizika",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-5635612800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-4334515200000"
    }
  },
  "felfedezesek": [
    "Carnot-körfolyamat",
    "termodinamika második főtételének alapjai"
  ],
  "publikaciok": [],
  "kep": "tudos_1740138001292.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b895245d46ce61c609111d"
  },
  "nev": "Richard Feynman",
  "szakterulet": "Fizika",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1629763200000"
    }
  },
  "halalozasiDatum": {
    "$date": "1988-02-15T00:00:00.000Z"
  },
  "felfedezesek": [
    "Feynman-diagram"
  ],
  "publikaciok": [],
  "kep": "tudos_1740150052917.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8a61f5d46ce61c6091137"
  },
  "nev": "Walther Müller",
  "szakterulet": "Fizika, Atomfizika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2029795200000"
    }
  },
  "halalozasiDatum": {
    "$date": "1979-12-04T00:00:00.000Z"
  },
  "felfedezesek": [
    "Geiger-Müller számláló"
  ],
  "publikaciok": [],
  "kep": "tudos_1740154399326.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8a6e85d46ce61c609113b"
  },
  "nev": "Charles Richter",
  "szakterulet": "Szeimzológia, Fizika",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2199052800000"
    }
  },
  "halalozasiDatum": {
    "$date": "1985-09-30T00:00:00.000Z"
  },
  "felfedezesek": [
    "Richter-skála"
  ],
  "publikaciok": [
    "Seismicity of the Earth"
  ],
  "kep": "tudos_1740154600520.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8a8405d46ce61c609114d"
  },
  "nev": "Hans Albrecht Bethe",
  "szakterulet": "Fizika",
  "orszag": "Németország, USA",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2003961600000"
    }
  },
  "halalozasiDatum": {
    "$date": "2005-03-06T00:00:00.000Z"
  },
  "felfedezesek": [
    "Csillagok nukleáris fúziójának magyarázata"
  ],
  "publikaciok": [],
  "kep": "tudos_1740154944779.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c6091179"
  },
  "nev": "Bjarne Stroustrup",
  "szakterulet": "Számítástechnika",
  "orszag": "Dánia",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-599788800000"
    }
  },
  "halalozasiDatum": null,
  "felfedezesek": [
    "C++ programozási nyelv"
  ],
  "publikaciok": [
    "The C++ Programming Language"
  ],
  "kep": "tudos_1740179009168.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c609117a"
  },
  "nev": "Claude Shannon",
  "szakterulet": "Matematika, Informatika",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1693785600000"
    }
  },
  "halalozasiDatum": {
    "$date": "2001-02-24T00:00:00.000Z"
  },
  "felfedezesek": [
    "Információelmélet"
  ],
  "publikaciok": [
    "A Mathematical Theory of Communication"
  ],
  "kep": "tudos_1740178963299.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c609117b"
  },
  "nev": "Leonhard Euler",
  "szakterulet": "Matematika, Fizika",
  "orszag": "Svájc",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-8290512000000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-5878656000000"
    }
  },
  "felfedezesek": [
    "Euler-formula",
    "Euler-szög",
    "Topológiai gráfelmélet"
  ],
  "publikaciok": [
    "Introductio in analysin infinitorum"
  ],
  "kep": "tudos_1740178820823.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c609117c"
  },
  "nev": "Linus Pauling",
  "szakterulet": "Kémia, Biokémia",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2172441600000"
    }
  },
  "halalozasiDatum": {
    "$date": "1994-08-19T00:00:00.000Z"
  },
  "felfedezesek": [
    "Molekuláris kötéselmélet",
    "Vitaminok szerepe"
  ],
  "publikaciok": [
    "The Nature of the Chemical Bond"
  ],
  "kep": "tudos_1740178576842.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c609117d"
  },
  "nev": "Fritz Haber",
  "szakterulet": "Kémia",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-3189196800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-1133654400000"
    }
  },
  "felfedezesek": [
    "Haber–Bosch eljárás"
  ],
  "publikaciok": [
    "Thermodynamics of Technical Gas Reactions"
  ],
  "kep": "tudos_1740178846395.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c609117e"
  },
  "nev": "Louis Pasteur",
  "szakterulet": "Biológia, Kémia",
  "orszag": "Franciaország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4639334400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-2343427200000"
    }
  },
  "felfedezesek": [
    "Pasztörizálás",
    "Vakcina fejlesztése"
  ],
  "publikaciok": [
    "Études sur la Bière"
  ],
  "kep": "tudos_1740178531765.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c609117f"
  },
  "nev": "Jonas Salk",
  "szakterulet": "Orvostudomány, Virológia",
  "orszag": "Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1741305600000"
    }
  },
  "halalozasiDatum": {
    "$date": "1995-06-23T00:00:00.000Z"
  },
  "felfedezesek": [
    "Polio vakcina"
  ],
  "publikaciok": [
    "Man Unfolding"
  ],
  "kep": "tudos_1740178918814.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c6091180"
  },
  "nev": "Ede Teller",
  "szakterulet": "Fizika",
  "orszag": "Magyarország, Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1955404800000"
    }
  },
  "halalozasiDatum": {
    "$date": "2003-09-09T00:00:00.000Z"
  },
  "felfedezesek": [
    "Hidrogénbomba"
  ],
  "publikaciok": [
    "Energy from Heaven and Earth"
  ],
  "kep": "tudos_1740179053857.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c6091181"
  },
  "nev": "Ulam Stanisław",
  "szakterulet": "Matematika, Fizika",
  "orszag": "Lengyelország, Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-1916179200000"
    }
  },
  "halalozasiDatum": {
    "$date": "1984-05-13T00:00:00.000Z"
  },
  "felfedezesek": [
    "Monte Carlo módszer"
  ],
  "publikaciok": [
    "Adventures of a Mathematician"
  ],
  "kep": "tudos_1740178983929.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c6091182"
  },
  "nev": "Jenő Wigner",
  "szakterulet": "Fizika",
  "orszag": "Magyarország, Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2118268800000"
    }
  },
  "halalozasiDatum": {
    "$date": "1995-01-01T00:00:00.000Z"
  },
  "felfedezesek": [
    "Atomreaktorok elméleti alapjai"
  ],
  "publikaciok": [
    "The Unreasonable Effectiveness of Mathematics in the Natural Sciences"
  ],
  "kep": "tudos_1740179100671.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c6091183"
  },
  "nev": "Wolfgang Pauli",
  "szakterulet": "Fizika",
  "orszag": "Ausztria, Svájc",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2199139200000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-348624000000"
    }
  },
  "felfedezesek": [
    "Pauli-elv"
  ],
  "publikaciok": [
    "Theory of Relativity"
  ],
  "kep": "tudos_1740178554325.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c6091184"
  },
  "nev": "Max Born",
  "szakterulet": "Fizika",
  "orszag": "Németország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2747260800000"
    }
  },
  "halalozasiDatum": {
    "$date": "1970-01-05T00:00:00.000Z"
  },
  "felfedezesek": [
    "Kvantummechanika matematikai alapjai"
  ],
  "publikaciok": [
    "Atomic Physics"
  ],
  "kep": "tudos_1740178795818.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c6091185"
  },
  "nev": "Szilárd Leó",
  "szakterulet": "Fizika",
  "orszag": "Magyarország, Egyesült Államok",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2268518400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-176428800000"
    }
  },
  "felfedezesek": [
    "Láncreakció",
    "Atombomba elmélete"
  ],
  "publikaciok": [
    "The Voice of the Dolphins"
  ],
  "kep": "tudos_1740178245850.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c6091186"
  },
  "nev": "Albert Szent-Györgyi",
  "szakterulet": "Orvostudomány, Kémia",
  "orszag": "Magyarország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-2407536000000"
    }
  },
  "halalozasiDatum": {
    "$date": "1986-10-22T00:00:00.000Z"
  },
  "felfedezesek": [
    "C-vitamin"
  ],
  "publikaciok": [
    "Bioenergetics"
  ],
  "kep": "tudos_1740179034037.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b8fefa5d46ce61c6091187"
  },
  "nev": "Ignác Semmelweis",
  "szakterulet": "Orvostudomány",
  "orszag": "Magyarország",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-4781030400000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-3294086400000"
    }
  },
  "felfedezesek": [
    "Kézmosás szerepe a fertőzések megelőzésében"
  ],
  "publikaciok": [
    "Die Ätiologie, der Begriff und die Prophylaxis des Kindbettfiebers"
  ],
  "kep": "tudos_1740178940132.jpg",
  "__v": 0
},
{
  "_id": {
    "$oid": "67b9a40cd8fc8e84bd0293bd"
  },
  "nev": "Daniel Bernoulli",
  "szakterulet": "Fizika, Matematika, Orvostudomány",
  "orszag": "Svájc",
  "szuletesiDatum": {
    "$date": {
      "$numberLong": "-8517052800000"
    }
  },
  "halalozasiDatum": {
    "$date": {
      "$numberLong": "-5926176000000"
    }
  },
  "felfedezesek": [
    "Bernoulli-egyenlet",
    "Hidrodinamika alapelvei"
  ],
  "publikaciok": [],
  "kep": "tudos_1740219404958.jpg",
  "__v": 0
}]
