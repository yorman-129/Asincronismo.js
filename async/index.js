const doSomethingAsync = () => {
    return  new Promise ((resolve, reject) => {
(true)
? setTimeout(() => resolve(' Do Something async'),3000)
        : reject( new Error('Error'))
    } );
}


const doSomething = async () => {
    const Something = await doSomethingAsync();
    console.log(Something);
}


console.log('Before');
doSomething();
console.log('After');


const anotherFunction = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something);
    }catch{
        console.error(error);
    }
}


console.log('Before 1');
anotherFunction();
console.log('After 1');