const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey essta correcto!')
        }else{
            reject('whooops');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch (error => console.error(error));


    const somethingWillHappen2 = ( ) => {
        return new Promise ((resolve, reject) => {
            if (true){
                setTimeout( () => {
                    resolve('true');
                }, 3000)
            }else {
                const error = new error ('Whopps!');
                reject(error);
            }
        });    
    }

    somethingWillHappen2()
        .then(response => console.log(response))
        .then( () => console.log('Hola amigo'))
        .catch(error => console.error(error));  


        //promesas encadenadas metodo=promise.all

        Promise.all([somethingWillHappen(), somethingWillHappen2()])
        .then(response => {
            console.log('Array of results', response);
        })
        .catch(error => {
            console.error(error)
        })