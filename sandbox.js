const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    // sledzimy postep
    request.addEventListener('readystatechange', ()=> {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
            data.forEach(element => {
                console.log(element)
            });
        } else if(request.readyState === 4){ // stan 4 odpowiada za zakonczoną operacje
            callback('could not fetch data', undefined);
        }
    })
    request.open('GET', 'todos.json'); // okreslamy co i gdzie chcemy zrobic
    request.send(); // wysylamy żądanie
}

console.log(1);
console.log(2);
getTodos((err, data) => {
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
});
console.log(3);
console.log(4);
