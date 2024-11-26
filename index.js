import express from "express";

const movies = [
  { id: 1, title: "superman" },
  { id: 2, title: "spiderman" },
  { id: 3, title: "wonderwoman" },
  { id: 4, title: "she-hulk" },
];

const app = express();

app.get("/", (req, res) => {
  res.send("My server is working");
});

app.get("/movies", (req, res) => {
  //Le req.query.le-nom-de-ma-query me permets de récupérer une query de la requête HTTP, dans mon exemple "limit", et de l'utiliser pour ne revoyer
  //qu'un nombre de movies égal à cette limite
  const limit = Number(req.query.limit);
  if (limit) {
    const sliceMovies = movies.slice(0, limit);
    res.json(sliceMovies);
  } else {
    res.json(movies);
  }
});

app.get("/movies/:id", (req, res) => {
  //Je peux récupérer un élément dynamique de mon URL en précisant ":" avant le nom du segment URL, et récupérer cette information
  //de la requête req.params.le-nom-de-mon-element-dynamique(id)
  const movieId = Number(req.params.id);
  const movie = movies.find((movie) => movie.id === movieId);
  res.json(movie);
});

app.listen(4000, () => {
  console.log("My server is running on port 4000");
});
