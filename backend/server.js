const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // allow frontend requests
//app.use(express.static("public")); this will be useful if local files need to be loaded from the local 

const movies = [
  { 
    title: "Inception", 
    rating: 8.8, 
    genre: "Sci-Fi", 
    duration: "148 min", 
    director: "Christopher Nolan", 
    cast_name: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy", 
    writter_name: "Christopher Nolan", 
    poster: "https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8" 
  },
  { 
    title: "Interstellar", 
    rating: 8.6, 
    genre: "Sci-Fi", 
    duration: "169 min", 
    director: "Christopher Nolan", 
    cast_name: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine", 
    writter_name: "Jonathan Nolan, Christopher Nolan", 
    poster: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19085635/gEU2QniE6E77NI6lCU6MxlNBvIx-scaled.jpg" 
  },
  { 
    title: "The Dark Knight", 
    rating: 9.0, 
    genre: "Action", 
    duration: "152 min", 
    director: "Christopher Nolan", 
    cast_name: "Christian Bale, Heath Ledger, Aaron Eckhart, Gary Oldman", 
    writter_name: "Jonathan Nolan, Christopher Nolan", 
    poster: "https://tse1.mm.bing.net/th/id/OIP.LDEPxqWgLlrq9DlAVrfXkwHaLH?pid=Api&P=0&h=180" 
  },
  { 
    title: "Forrest Gump", 
    rating: 8.8, 
    genre: "Drama", 
    duration: "148 min", 
    director: "Robert Zemeckis", 
    cast_name: "Tom Hanks, Robin Wright, Gary Sinise, Sally Field", 
    writter_name: "Eric Roth", 
    poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/forrest-gump-movie-poster.jpg" 
  },
  { 
    title: "Parasite", 
    rating: 8.6, 
    genre: "Thriller", 
    duration: "132 min", 
    director: "Bong Joon-ho", 
    cast_name: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Park So-dam", 
    writter_name: "Bong Joon-ho, Han Jin-won", 
    poster: "https://image.tmdb.org/t/p/w1280/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" 
  },
  { 
    title: "The Matrix", 
    rating: 8.7, 
    genre: "Action", 
    duration: "136 min", 
    director: "The Wachowskis", 
    cast_name: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving", 
    writter_name: "Lana Wachowski, Lilly Wachowski", 
    poster: "https://tse1.mm.bing.net/th/id/OIP.MdBIfyTHnVbvrf-PSPfwxQHaLH?pid=Api&P=0&h=180" 
  }
];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});