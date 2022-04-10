const compareNumToTen = (num) =>{
    var promise = new Promise((resolve,reject)=>{
        if(num > 10){
            return resolve(num + " is greater than 10, success!");
        }
        else
            return reject(Error(num + " is less than 10, error!"));
    });
    return promise;
}

compareNumToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

