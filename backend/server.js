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
    poster: "https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1&controls=1" 
  },
  { 
    title: "Interstellar", 
    rating: 8.6, 
    genre: "Sci-Fi", 
    duration: "169 min", 
    director: "Christopher Nolan", 
    cast_name: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine", 
    writter_name: "Jonathan Nolan, Christopher Nolan", 
    poster: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19085635/gEU2QniE6E77NI6lCU6MxlNBvIx-scaled.jpg",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0"  
  },
  { 
    title: "The Dark Knight", 
    rating: 9.0, 
    genre: "Action", 
    duration: "152 min", 
    director: "Christopher Nolan", 
    cast_name: "Christian Bale, Heath Ledger, Aaron Eckhart, Gary Oldman", 
    writter_name: "Jonathan Nolan, Christopher Nolan", 
    poster: "https://tse1.mm.bing.net/th/id/OIP.LDEPxqWgLlrq9DlAVrfXkwHaLH?pid=Api&P=0&h=180",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0" 
  },
  { 
    title: "Forrest Gump", 
    rating: 8.8, 
    genre: "Drama", 
    duration: "148 min", 
    director: "Robert Zemeckis", 
    cast_name: "Tom Hanks, Robin Wright, Gary Sinise, Sally Field", 
    writter_name: "Eric Roth", 
    poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/forrest-gump-movie-poster.jpg",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0" 
  },
  { 
    title: "Parasite", 
    rating: 8.6, 
    genre: "Thriller", 
    duration: "132 min", 
    director: "Bong Joon-ho", 
    cast_name: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Park So-dam", 
    writter_name: "Bong Joon-ho, Han Jin-won", 
    poster: "https://image.tmdb.org/t/p/w1280/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0" 
  },
  { 
    title: "The Matrix", 
    rating: 8.7, 
    genre: "Action", 
    duration: "136 min", 
    director: "The Wachowskis", 
    cast_name: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving", 
    writter_name: "Lana Wachowski, Lilly Wachowski", 
    poster: "https://tse1.mm.bing.net/th/id/OIP.MdBIfyTHnVbvrf-PSPfwxQHaLH?pid=Api&P=0&h=180",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0"  
  },

  // New movies 👇
  { 
    title: "Titanic", 
    rating: 7.9, 
    genre: "Romance", 
    duration: "195 min", 
    director: "James Cameron", 
    cast_name: "Leonardo DiCaprio, Kate Winslet", 
    writter_name: "James Cameron", 
    poster: "https://public-website-assets.paramountpictures.com/paramount2025/s3fs-public/styles/poster_medium/public/titanic2012_en_800x1200.jpg?itok=lbdE3VIG",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0"  
  },
  { 
    title: "Avengers: Endgame", 
    rating: 8.4, 
    genre: "Action", 
    duration: "181 min", 
    director: "Anthony Russo, Joe Russo", 
    cast_name: "Robert Downey Jr., Chris Evans, Mark Ruffalo", 
    writter_name: "Christopher Markus, Stephen McFeely", 
    poster: "https://wallpapers.com/images/hd/avengers-endgame-iphone-c9nllnrshan2r7hm.jpg",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0" 
  },
  { 
    title: "Joker", 
    rating: 8.4, 
    genre: "Drama", 
    duration: "122 min", 
    director: "Todd Phillips", 
    cast_name: "Joaquin Phoenix, Robert De Niro", 
    writter_name: "Todd Phillips, Scott Silver", 
    poster: "https://m.media-amazon.com/images/S/pv-target-images/13aa7a89117d8a957b297149259fd8909c0240da2d460187d13a6f6d578c3b0f.jpg",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0" 
  },
  { 
    title: "Gladiator", 
    rating: 8.5, 
    genre: "Action", 
    duration: "155 min", 
    director: "Ridley Scott", 
    cast_name: "Russell Crowe, Joaquin Phoenix", 
    writter_name: "David Franzoni", 
    poster: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0" 
  },
  { 
    title: "The Shawshank Redemption", 
    rating: 9.3, 
    genre: "Drama", 
    duration: "142 min", 
    director: "Frank Darabont", 
    cast_name: "Tim Robbins, Morgan Freeman", 
    writter_name: "Frank Darabont", 
    poster: "https://m.media-amazon.com/images/I/717W9DCnyzL._AC_UF1000,1000_QL80_.jpg",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0"  
  }
];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});