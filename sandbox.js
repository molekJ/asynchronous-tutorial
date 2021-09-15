// fetch

fetch("./todos/luigi.json") // przekazujemy argument będący zasobem
  .then((response) => {
    // obsługa po sukcesie // resolve
    console.log("suksec:", response);
    return response.json(); //ta metoda daje nam dane
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    // obsługa po niepowodzeniu, uruchamia funkcje zwrotną // reject
    console.log("err`:", err);
  });
// obietnica jest odrzucana tylko wtedy, gdy pojawia się jakiś błąd sieci
// błędny adres URL lub punkt końcowy lub zasób nie wywali błędu
// 1. pobieramy dane => FETCH
// 2. bierzemy odpowiedź i zwracamy odpowiedź.json, który zwraca obietnicę
// 3. uruchamiamy funkcję w której faktycznie mamy dostęp do danych
