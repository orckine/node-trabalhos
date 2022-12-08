import fs from 'fs';

function getFiles(path){
    return new Promise(r =>{
        fs.readdir(path, (err,files) =>{
            r(files);
        })
    })
}

async function teste(){
    const res = await getFiles('.');
    console.log(res);
}

console.log('antes');
teste();
console.log('depois');