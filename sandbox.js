const getTodos = async () => {
  const response = await fetch("./todos/luigi.json");
  // gdy obietnica w fetch się rozwiąże, możemy pobrać dane i przypisać je. obietnica zwraca promise, dlatego nie musimy uzywać .then()
  const data = await response.json(); // zwracamy promis, gdy proimis sie rozwiaze- przypiszemy wartosc do data
  return data;
};

getTodos().then((data) => console.log("ready", data));
