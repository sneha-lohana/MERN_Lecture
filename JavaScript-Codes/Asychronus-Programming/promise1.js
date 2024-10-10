// rewritting load function using promise

function loadScript(url){
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('Error while loading a script.'));
        
        document.head.append(script);
    });
}

loadScript('./main1.js')
    .then(value => {
        console.log(value.src);
        loadScript('./main2.js')
    })
    .then(value => {
        console.log();
    })
    .catch(error => {
        console.log(error);
    });