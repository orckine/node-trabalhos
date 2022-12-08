import fs, { stat } from 'fs';

function getFolders(path){
    return new Promise(r =>{
        fs.readdir(path, (err,files) =>{
            const folders = [];
            files.forEach(file => {
                var stats = fs.statSync(file);  //Professor, n consegui entender mt bem o uso do Promise.all para esse caso,
                if (stats.isDirectory()) folders.push(file); //então fiz desse jeito mesmo. Espero tirar essa duvida em sala.
            });
            r(folders);
        })
    })
}

async function teste(){
    const res = await getFolders('.');
    //console.log(res);
}

console.log('antes');
teste();
console.log('depois');