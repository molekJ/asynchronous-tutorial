const getTodos = async () => {
  const response = await fetch("./todods/luigi.json");
  // jezeli bedziemy mieli blad URL czy zasobie będzie to jako błąd w pliku JSON co jest nieprawdą. Fetch się rozwiązuje, gdy próbujemy użyć .json() który nie może przekształcić danych - po nie zostały znalezione.
  // dlatego musimy ręcznie sprawdzić czy nie ma statusu 200

  if (response.status !== 200) {
    throw new Error("Problem z pobraniem danych"); // wyrzucamy własny błąd, co zgłosi nowt błąd
  } // a kiedy zgłaszamy nowy blad wewnatrz funckcji async
  // obietnica zwrócona przez tą funkcję jest odrzucona
  // dalszy kod się nie wykona
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log("ready", data))
  .catch((err) => console.log("rejected", err.message));
