let survivor = [
    {name: "unlucky", SSskin: 0, Sskin: 0, Askin: 3, SSacce: 0, Sacce: 0, Aacce: 1, total: 4},
    {name: "doctor", SSskin: 0, Sskin: 3, Askin: 9, SSacce: 0, Sacce: 1, Aacce: 4, total: 17},
    {name: "lawyer", SSskin: 0, Sskin: 0, Askin: 5, SSacce: 0, Sacce: 0, Aacce: 2, total: 7},
    {name: "thief", SSskin: 0, Sskin: 1, Askin: 4, SSacce: 0, Sacce: 0, Aacce: 4, total: 9},
    {name: "gardener", SSskin: 0, Sskin: 2, Askin: 8, SSacce: 0, Sacce: 2, Aacce: 3, total: 15},
    {name: "magician", SSskin: 0, Sskin: 1, Askin: 7, SSacce: 0, Sacce: 1, Aacce: 1, total: 10},
    {name: "explorer", SSskin: 0, Sskin: 1, Askin: 6, SSacce: 0, Sacce: 0, Aacce: 1, total: 8},
    {name: "mercenary", SSskin: 0, Sskin: 2, Askin: 13, SSacce: 0, Sacce: 2, Aacce: 1, total: 18},
    {name: "coordinator", SSskin: 0, Sskin: 2, Askin: 10, SSacce: 0, Sacce: 1, Aacce: 3, total: 16},
    {name: "mechanic", SSskin: 0, Sskin: 3, Askin: 10, SSacce: 0, Sacce: 4, Aacce: 3, total: 20},
    {name: "forward", SSskin: 0, Sskin: 2, Askin: 10, SSacce: 0, Sacce: 1, Aacce: 3, total: 16},
    {name: "mindEye", SSskin: 0, Sskin: 3, Askin: 6, SSacce: 0, Sacce: 0, Aacce: 4, total: 13},
    {name: "priestess", SSskin: 0, Sskin: 4, Askin: 7, SSacce: 0, Sacce: 1, Aacce: 2, total: 14},
    {name: "perfumer", SSskin: 1, Sskin: 2, Askin: 7, SSacce: 0, Sacce: 3, Aacce: 2, total: 15},
    {name: "cowboy", SSskin: 0, Sskin: 1, Askin: 4, SSacce: 0, Sacce: 0, Aacce: 2, total: 7},
    {name: "dancer", SSskin: 0, Sskin: 3, Askin: 7, SSacce: 0, Sacce: 1, Aacce: 2, total: 13},
    {name: "seer", SSskin: 0, Sskin: 3, Askin: 6, SSacce: 0, Sacce: 1, Aacce: 2, total: 12},
    {name: "embalmer", SSskin: 0, Sskin: 2, Askin: 6, SSacce: 0, Sacce: 1, Aacce: 2, total: 11},
    {name: "prospector", SSskin: 0, Sskin: 2, Askin: 6, SSacce: 0, Sacce: 0, Aacce: 2, total: 10},
    {name: "enchantress", SSskin: 0, Sskin: 2, Askin: 5, SSacce: 0, Sacce: 1, Aacce: 1, total: 9},
    {name: "wildling", SSskin: 0, Sskin: 1, Askin: 3, SSacce: 0, Sacce: 0, Aacce: 2, total: 6},
    {name: "acrobat", SSskin: 0, Sskin: 3, Askin: 4, SSacce: 0, Sacce: 0, Aacce: 2, total: 9},
    {name: "officer", SSskin: 0, Sskin: 3, Askin: 3, SSacce: 0, Sacce: 0, Aacce: 1, total: 7},
    {name: "barmaid", SSskin: 0, Sskin: 2, Askin: 5, SSacce: 0, Sacce: 0, Aacce: 1, total: 8},
    {name: "postman", SSskin: 0, Sskin: 1, Askin: 4, SSacce: 0, Sacce: 1, Aacce: 0, total: 6},
    {name: "graveyard", SSskin: 0, Sskin: 1, Askin: 3, SSacce: 0, Sacce: 0, Aacce: 1, total: 5},
    {name: "prisoner", SSskin: 0, Sskin: 2, Askin: 5, SSacce: 0, Sacce: 0, Aacce: 1, total: 8},
    {name: "entomologist", SSskin: 0, Sskin: 2, Askin: 2, SSacce: 0, Sacce: 1, Aacce: 1, total: 6},
    {name: "painter", SSskin: 0, Sskin: 2, Askin: 1, SSacce: 0, Sacce: 1, Aacce: 1, total: 5},
    {name: "batter", SSskin: 0, Sskin: 1, Askin: 1, SSacce: 0, Sacce: 0, Aacce: 1, total: 3},
    {name: "merchant", SSskin: 0, Sskin: 1, Askin: 2, SSacce: 0, Sacce: 0, Aacce: 1, total: 4},
    {name: "psychologist", SSskin: 0, Sskin: 1, Askin: 1, SSacce: 0, Sacce: 0, Aacce: 0, total: 2},
    {name: "patient", SSskin: 0, Sskin: 1, Askin: 1, SSacce: 0, Sacce: 0, Aacce: 1, total: 3},
    {name: "novelist", SSskin: 0, Sskin: 1, Askin: 1, SSacce: 0, Sacce: 0, Aacce: 0, total: 2},
    {name: "memory", SSskin: 0, Sskin: 1, Askin: 1, SSacce: 0, Sacce: 0, Aacce: 0, total: 2},
    {name: "wheepingClown", SSskin: 0, Sskin: 1, Askin: 1, SSacce: 0, Sacce: 0, Aacce: 0, total: 2},
    {name: "professor", SSskin: 0, Sskin: 1, Askin: 0, SSacce: 0, Sacce: 0, Aacce: 0, total: 1}
]

let hunter = [
    {name: "hellEmber", SSskin: 0, Sskin: 1, Askin: 6, SSacce: 0, Sacce: 1, Aacce: 1, total: },
    {name: "joker", SSskin: 0, Sskin: 3, Askin: 3, SSacce: 0, Sacce: 1, Aacce: 3, total: },
    {name: "gameKeeper", SSskin: 0, Sskin: 2, Askin: 5, SSacce: 0, Sacce: 0, Aacce: 2, total: },
    {name: "reaper", SSskin: 0, Sskin: 4, Askin: 8, SSacce: 0, Sacce: 1, Aacce: 4, total: },
    {name: "soulWeaver", SSskin: 0, Sskin: 2, Askin: 5, SSacce: 0, Sacce: 1, Aacce: 1, total: },
    {name: "geisha", SSskin: 0, Sskin: 4, Askin: 8, SSacce: 0, Sacce: 1, Aacce: 3, total: },
    {name: "feaster", SSskin: 0, Sskin: 2, Askin: 4, SSacce: 0, Sacce: 1, Aacce: 2, total: },
    {name: "wuChang", SSskin: 0, Sskin: 3, Askin: 5, SSacce: 0, Sacce: 0, Aacce: 4, total: },
    {name: "photographer", SSskin: 0, Sskin: 2, Askin: 8, SSacce: 0, Sacce: 2, Aacce: 2, total: },
    {name: "madEye", SSskin: 0, Sskin: 1, Askin: 2, SSacce: 0, Sacce: 0, Aacce: 2, total: },
    {name: "dreamWitch", SSskin: 0, Sskin: 2, Askin: 4, SSacce: 0, Sacce: 1, Aacce: 1, total: },
    {name: "axeBoy", SSskin: 0, Sskin: 2, Askin: 4, SSacce: 0, Sacce: 1, Aacce: 2, total: },
    {name: "evilRaptilian", SSskin: 0, Sskin: 2, Askin: 3, SSacce: 0, Sacce: 0, Aacce: 2, total: },
    {name: "mary", SSskin: 0, Sskin: 4, Askin: 3, SSacce: 0, Sacce: 1, Aacce: 1, total: },
    {name: "guard26", SSskin: 0, Sskin: 3, Askin: 3, SSacce: 1, Sacce: 2, Aacce: 1, total: },
    {name: "disciple", SSskin: 0, Sskin: 1, Askin: 2, SSacce: 0, Sacce: 1, Aacce: 1, total: },
    {name: "violinist", SSskin: 0, Sskin: 2, Askin: 2, SSacce: 0, Sacce: 0, Aacce: 2, total: },
    {name: "sculptor", SSskin: 0, Sskin: 2, Askin: 1, SSacce: 0, Sacce: 1, Aacce: 1, total: },
    {name: "undead", SSskin: 0, Sskin: 1, Askin: 1, SSacce: 0, Sacce: 0, Aacce: 1, total: },
    {name: "breakingWheel", SSskin: 0, Sskin: 1, Askin: 1, SSacce: 0, Sacce: 0, Aacce: 1, total: },
    {name: "naiad", SSskin: 0, Sskin: 1, Askin: 0, SSacce: 0, Sacce: 0, Aacce: 1, total: },
    {name: "philip", SSskin: 0, Sskin: 1, Askin: 1, SSacce: 0, Sacce: 0, Aacce: 0, total: },
    {name: "nightmare", SSskin: 0, Sskin: 1, Askin: 1, SSacce: 0, Sacce: 0, Aacce: 0, total: },
    {name: "clerk", SSskin: 0, Sskin: 1, Askin: 0, SSacce: 0, Sacce: 0, Aacce: 0, total: }
]

let kindsOfCosmetic = [
    'SSskin', 'Sskin', 'Askin',
    'SSacce', 'Sacce', 'Aacce'
]

let startIndexedDB = (DBName, DBVersion) => {
    if (!window.indexedDB){
        alert("Browser doesn't this site.");
    } else {
        let db;
        let request = indexedDB.open(DBName, DBVersion);
        request.onupgradeneeded = e => {
            db = e.target.result;
            switch (e.oldVersion){
                case 0: 
                    for (let x of survivor){
                        var objectStore = db.createObjectStore(x.name, {keyPath: 'id'});
                    }
                    for (let x of hunter){
                        var objectStore = db.createObjectStore(x.name, {keyPath: 'id'});
                    }
                    break;
            }
        }
    }
}

startIndexedDB("skins", 1);

let setIndexedDB = (kinds) => {
    var request = window.indexedDB.open('skins');

    request.onsuccess = e => {
        var db = e.target.result;
        // survivor cosmetic setting
        for (let x of survivor){
            var transaction = db.transaction([x.name], 'readwrite');
            
            var objectStore = transaction.objectStore(x.name);
        switch (kinds) {
            case 'SSskin':
                    for (let y = 0; y < x.SSskin; y++){
                        var request = objectStore.add({id: y+1, name: `${x.name}SSskin${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Survivor'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding SSskin for ${x.name}`);
                        }
                    };
                break;
            case 'Sskin':
                    for (let y = 0; y < x.Sskin; y++){
                        var request = objectStore.add({id: y+1+x.SSskin, name: `${x.name}Sskin${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Survivor'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding Sskin for ${x.name}`);
                        }
                    };
                break;
            case 'Askin':
                    for (let y = 0; y < x.Askin; y++){
                        var request = objectStore.add({id: y+1+x.SSskin+x.Sskin, name: `${x.name}Askin${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Survivor'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding Askin for ${x.name}`);
                        }
                    };
                break;
            case 'SSacce':
                    for (let y = 0; y < x.SSacce; y++){
                        var request = objectStore.add({id: y+1+x.SSskin+x.Sskin+x.Askin, name: `${x.name}SSacce${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Survivor'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding SSacce for ${x.name}`);
                        }
                    };
                break;
            case 'Sacce':
                    for (let y = 0; y < x.Sacce; y++){
                        var request = objectStore.add({id: y+1+x.SSskin+x.Sskin+x.Askin+x.SSacce, name: `${x.name}Sacce${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Survivor'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding Sacce for ${x.name}`);
                        }
                    };
                break;
            case 'Aacce':
                    for (let y = 0; y < x.Aacce; y++){
                        var request = objectStore.add({id: y+1+x.SSskin+x.Sskin+x.Askin+x.SSacce+x.Sacce, name: `${x.name}Aacce${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Survivor'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding Aacce for ${x.name}`);
                        }
                    };
                break;
            }
        }

        // hunter cosmetic setting 
        for (let x of hunter){
            var transaction = db.transaction([x.name], 'readwrite');
            
            var objectStore = transaction.objectStore(x.name);
        switch (kinds) {
            case 'SSskin':
                    for (let y = 0; y < x.SSskin; y++){
                        var request = objectStore.add({id: y+1, name: `${x.name}SSskin${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Hunter'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding SSskin for ${x.name}`);
                        }
                    };
                break;
            case 'Sskin':
                    for (let y = 0; y < x.Sskin; y++){
                        var request = objectStore.add({id: y+1+x.SSskin, name: `${x.name}Sskin${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Hunter'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding Sskin for ${x.name}`);
                        }
                    };
                break;
            case 'Askin':
                    for (let y = 0; y < x.Askin; y++){
                        var request = objectStore.add({id: y+1+x.SSskin+x.Sskin, name: `${x.name}Askin${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Hunter'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding Askin for ${x.name}`);
                        }
                    };
                break;
            case 'SSacce':
                    for (let y = 0; y < x.SSacce; y++){
                        var request = objectStore.add({id: y+1+x.SSskin+x.Sskin+x.Askin, name: `${x.name}SSacce${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Hunter'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding SSacce for ${x.name}`);
                        }
                    };
                break;
            case 'Sacce':
                    for (let y = 0; y < x.Sacce; y++){
                        var request = objectStore.add({id: y+1+x.SSskin+x.Sskin+x.Askin+x.SSacce, name: `${x.name}Sacce${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Hunter'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding Sacce for ${x.name}`);
                        }
                    };
                break;
            case 'Aacce':
                    for (let y = 0; y < x.Aacce; y++){
                        var request = objectStore.add({id: y+1+x.SSskin+x.Sskin+x.Askin+x.SSacce+x.Sacce, name: `${x.name}Aacce${y+1}`, brightness: 0.3, cosmeticKinds: kinds, type: 'Hunter'});
                        request.onsuccess = e => {
                            console.log(e.target.result);
                        }
                        request.onerror = e => {
                            console.log(`error is called in adding Aacce for ${x.name}`);
                        }
                    };
                break;
            }
        }
    }
}

for (let x of kindsOfCosmetic) {
    setIndexedDB(x);
}

// 이미지 생성
let createImg = (cosmeticKind, cosmeticName, cosmeticType) => {
    let img = document.createElement('img').src = `img/${cosmeticKind}/${cosmeticName}.png`;
    // img.onclick = ;

    document.querySelector(`#${cosmeticKind}${cosmeticType}`).appendChild(img);
}

// 이미지 생성용 데이터 불러오기
let readIndexedDB = () => {
    var request = window.indexedDB.open('skins');

    request.onsuccess = e => {
        var db = e.target.result;
        for (let x of survivor){
            var objectStore = db.transaction(/*[x.name]*/).objectStore(x.name);
            for (let y = 0; y < x.total; y++){
                var request = objectStore.get(y);
                request.onsuccess = e => {
                    cosmeticKind = request.result.cosmeticKinds;
                    cosmeticName = request.result.name;
                    cosmeticType = request.result.type;
                    console.log(`${cosmeticKind} ${cosmeticName} ${cosmeticType}`)
                    // createImg(cosmeticKind, cosmeticName, cosmeticType);
                }
            }
        }
    }
}


/* 
document.querySelector([character kind(=hunter or survivor), grade]).createImg
*/


