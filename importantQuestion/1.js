const favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
};

function printMovieInfo(movie) {
    const { title, duration, stars } = movie;
    const starsList = stars.join(", ");
    console.log(`${title} lasts for ${duration} minutes. Stars: ${starsList}.`);
}
printMovieInfo(favoriteMovie);
