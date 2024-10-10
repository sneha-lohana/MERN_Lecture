const egg = new Promise((resolve, reject) => {
    // executor
    console.log('executor');

    // resolve(value) -> call this function, when your response is successful
    // reject(error) -> call this function, when your response is failed

    resolve('Successfully hatched to chick!');
    // reject(new Error('Broken egg!'));
});

egg
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('finally -> Cleanup operations.');
    });

console.log('Done!');