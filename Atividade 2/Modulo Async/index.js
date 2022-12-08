function dorme(mms){
    return new Promise(r=>{
        setTimeout(()=>{
            r('teste');
        },mms)
    })
}

async function teste(){
    const res = await dorme(2000);
    console.log(res);
}

console.log('antes');
teste()
console.log('depois');