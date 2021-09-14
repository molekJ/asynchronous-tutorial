const getTodos = (resourse, callback) => {
    const request = new XMLHttpRequest();
    // sledzimy postep
    request.addEventListener('readystatechange', ()=> {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if(request.readyState === 4){ // stan 4 odpowiada za zakonczoną operacje
            callback('could not fetch data', undefined);
        }
    })
    request.open('GET', resourse); // okreslamy co i gdzie chcemy zrobic
    request.send(); // wysylamy żądanie
}
// CALLBACK HELL
getTodos('./todos/luigi.json', (err, data) => {
    console.log("Luigi", data)
    getTodos('./todos/mario.json', (err, data) => {
        console.log("Mario", data)
        getTodos('./todos/shaun.json', (err, data) => {
            console.log("Shaun", data)
        })
    })
});
