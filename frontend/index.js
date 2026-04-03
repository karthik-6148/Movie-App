const API_URL="https://movie-app-ysk5.onrender.com/movies";
console.log("index.js loaded");


 
    
async function getMovies(url){
    try{
        let {data}=await axios.get(url);
    return data;
    }
    catch(err){
        console.log(err);
    }
}

async function main(){

    let searchvalue;
    let ratingvalue;
    let genrevalue;
    let filteredArrayOfMovies=[];
    let movies = await getMovies(API_URL);
    console.log(movies);
    let createElement=(ele)=>document.createElement(ele);
    
    
    let main=document.querySelector(".main");
    let search=document.querySelector(".search").value;
    console.log("this is search value:",search);
    

    
    for(let movie of movies){
        createCard(movie);
    }

    

    function createCard(movie){
        
        let cardContainer=createElement("div");
    cardContainer.classList.add("card","shadow");

    let imageContainer=createElement("div");
    imageContainer.classList.add("card-image-container");

    let imageEle=createElement("img");
    imageEle.classList.add("card-image");
    imageEle.setAttribute("src",movie.poster);
    imageEle.setAttribute("alt",movie.title);

    imageContainer.appendChild(imageEle);

    cardContainer.appendChild(imageContainer);

    let detailsEle=createElement("div");
    detailsEle.classList.add("movie-details");
    
    let title=createElement("p");
    title.classList.add("title");
    title.innerText=movie.title;
    detailsEle.appendChild(title);

    let genre=createElement("p");
    genre.classList.add("genre");
    genre.innerText=`Genre: ${movie.genre}`;
    detailsEle.appendChild(genre);

    let ratings=createElement("div");
    ratings.classList.add("ratings");

    let starRatings=createElement("div");
    starRatings.classList.add("star-rating");
    let starIcon=createElement("span");
    starIcon.classList.add("material-icons-outlined");
    starIcon.innerText="star";
    starRatings.appendChild(starIcon);


    let NumberRating=createElement("span");
    NumberRating.innerText=movie.rating;
    starRatings.appendChild(NumberRating);
    
    ratings.appendChild(starRatings);

    let duration=createElement("p");
    duration.innerText=movie.duration;
    ratings.appendChild(duration);

    detailsEle.appendChild(ratings);
    
    cardContainer.appendChild(detailsEle);
    
cardContainer.addEventListener('click',()=>{
        let videoplayer=document.getElementById('player');
        videoplayer.style.display="block";
        videoplayer.src=movie.videoUrl;
        videoplayer.scrollIntoView({ behavior: "smooth" });
        })

    main.appendChild(cardContainer);
    

    
    }
    function applyAllFilters(){
        filteredArrayOfMovies=movies;
        if(ratingvalue&&ratingvalue.length>0){
             filteredArrayOfMovies=filteredArrayOfMovies.filter(movie=>movie.rating>=ratingvalue);
        }
        if(genrevalue&&genrevalue.length>0){
            filteredArrayOfMovies=filteredArrayOfMovies.filter(movie=>movie.genre===genrevalue);
        }
        if(searchvalue&&searchvalue.length>0){
            filteredArrayOfMovies=filteredArrayOfMovies.filter(movie=>movie.title.toLowerCase().includes(searchvalue)||movie.director.toLowerCase().includes(searchvalue));
        }
        main.innerHTML="";
        for(let movie of filteredArrayOfMovies){
            createCard(movie);
        }
    }
    // function searchHandle(event){
    //     searchvalue=event.target.value.toLowerCase();
    //     if(ratingvalue&&ratingvalue.length>0){
    //         filteredArrayOfMovies=movies.filter(movie=>movie.rating>=ratingvalue)
    //         if(genrevalue&&genrevalue.length>0){
    //             filteredArrayOfMovies=filteredArrayOfMovies.filter(movie=>movie.genre===genrevalue);
    //     }
    //     }
    //     else if(genrevalue&&genrevalue.length>0){
    //         filteredArrayOfMovies=movies.filter(movie=>movie.genre===genrevalue);
    //     }
    //     else{
    //         filteredArrayOfMovies=movies;
    //     }
    //     filteredArrayOfMovies=filteredArrayOfMovies.filter(movie=>movie.title.toLowerCase().includes(searchvalue)||movie.director.toLowerCase().includes(searchvalue));
    //     main.innerHTML="";
    //     for(let movie of filteredArrayOfMovies){
    //         createCard(movie);
    //     }
        
        
    // }
    function debounce(callback,delay){
        let timer;
        return ()=>{
            clearTimeout(timer);
            timer=setTimeout(()=>{callback()},delay);}
    }
    let delaycall=debounce(applyAllFilters,500);
    let searchEle=document.querySelector(".search");
    searchEle.addEventListener("input",(e)=>{
        searchvalue=e.target.value.toLowerCase();
        delaycall();
    }
    );

    // function handleratings(event){
    //     ratingvalue=event.target.value;
    //     if(searchvalue&&searchvalue.length>0){
    //         filteredArrayOfMovies=movies.filter(movie=>movie.title.toLowerCase().includes(searchvalue)||movie.director.toLowerCase().includes(searchvalue))
    //         if(genrevalue&&genrevalue.length>0){
    //             filteredArrayOfMovies=filteredArrayOfMovies.filter(movie=>movie.genre===genrevalue);
    //     }
    //     }
    //     else if(genrevalue&&genrevalue.length>0){
    //         filteredArrayOfMovies=movies.filter(movie=>movie.genre===genrevalue);
    //     }
    //     else{
    //         filteredArrayOfMovies=movies;
    //     }
    //     filteredArrayOfMovies=filteredArrayOfMovies.filter(movie=>movie.rating>=ratingvalue);
    //     main.innerHTML="";
    //     for(let movie of filteredArrayOfMovies){
    //         console.log(movie.title);
    //         createCard(movie);
    //     }
    // }
    let ratingsSelect=document.querySelector(".ratings-select");
    ratingsSelect.addEventListener('change',(e)=>{
        ratingvalue=e.target.value;
        applyAllFilters();
    });

    // function handlegenre(event){
    //     genrevalue=event.target.value;
    //     if(searchvalue&&searchvalue.length>0){
    //         filteredArrayOfMovies=movies.filter(movie=>movie.title.toLowerCase().includes(searchvalue)||movie.director.toLowerCase().includes(searchvalue))
    //         if(ratingvalue&&ratingvalue.length>0){
    //             filteredArrayOfMovies=filteredArrayOfMovies.filter(movie=>movie.rating>=ratingvalue);
    //     }
    //     }
    //     else if(ratingvalue&&ratingvalue.length>0){
    //         filteredArrayOfMovies=movies.filter(movie=>movie.rating>=ratingvalue);
    //     }
    //     else{
    //         filteredArrayOfMovies=movies;
    //     }
    //     filteredArrayOfMovies=filteredArrayOfMovies.filter(movie=>movie.genre===event.target.value);
    //     main.innerHTML="";
    //     for(let movie of filteredArrayOfMovies){
    //         createCard(movie);
    //     }

    // }

    let genreselect=document.querySelector(".genre-select");
    genreselect.addEventListener("change",(e)=>{
        genrevalue=e.target.value;
        applyAllFilters();
    })
    
}

main();
