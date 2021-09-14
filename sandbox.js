const getTodos = (resourse) => {

    return new Promise ((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=> {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if(request.readyState === 4){ 
                reject('Error gettin resource')
            }
        })
        request.open('GET', resourse); 
        request.send();
    })
}

getTodos('./todos/luigi.json').then(data=> {
    console.log("udało się pobrac dane:", data)
}).catch(err=> {
    console.log("Nie udało się pobrać danych",err)
})