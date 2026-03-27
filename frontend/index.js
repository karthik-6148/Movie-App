const API_URL="http://localhost:3000/movies";
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
    let filteredArrayOfMovies=[];
    let movies = await getMovies(API_URL);
    console.log(movies);
    let createElement=(ele)=>document.createElement(ele);

    let search=document.querySelector(".search").value;
    console.log("this is search value:",search);
    
    
    
    for(let movie of movies){
        createCard(movie);
    }

    function searchItem(){
        let search=document.querySelector(".search").value;
    console.log("this is search value:",search);
    }

    function createCard(movie){
        let main=document.querySelector(".main");
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
    
    main.appendChild(cardContainer);
    }

    function searchHandle(event){
        searchvalue=event.target.value.toLowerCase();
        // console.log(event.target.value);
        filteredArrayOfMovies=searchvalue ? searchvalue.length>0 ? movies.filter(movie=>searchvalue===movie.title.toLowerCase()||searchvalue===movie.director.toLowerCase()):movies:movies;
        console.log(filteredArrayOfMovies);
        let main=document.querySelector(".main");
        main.innerHTML=" ";
        for(let movie of filteredArrayOfMovies){
            createCard(movie);
        }
        
        
    }
    function debounce(callback,delay){
        return (...args)=>{setTimeout(()=>{callback(...args)},delay);}
    }
    let delaycall=debounce(searchHandle,500);
    let searchEle=document.querySelector(".search");
    searchEle.addEventListener("input",delaycall);
    
}

main();
