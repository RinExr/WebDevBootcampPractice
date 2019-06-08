var movies = [
  {
    title: "Deadpool",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Black Panther",
    rating: 4.5,
    hasWatched: false},
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true},
  {
    title: "Baby Driver",
    rating: 4.5,
    hasWatched: false}
];

function buildString(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie){
  console.log(buildString(movie));
});


// for(var i=0;i <= movies.length; i++ ){
//   if(movies[i].hasWatched === true){
//     console.log("You have seen " + movies[i].title + " - " + movies[i].rating +" stars");
//   }else
//   {
//     console.log("You have not seen " + movies[i].title + " - " + movies[i].rating + " stars");
//   }
// }
