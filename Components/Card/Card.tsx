import axios from "axios";
import Link from "next/link";
import React from "react";


async function addToFavorites (id: Number) {
    console.log("Id Favorites:", id);
    axios.post("https://localhost:44308/Favorites/Add/" + id)
    .then(response => {
        if(response.data==true)
        alert("Added to favorites successfuly!")
        else
        alert("This movie is already in your favorite list!")
    });
};

const Card = (movie: any) => {  
    return (
        <>
            <div className="card">
                <div className="left">
                    <img className="picture" src={movie.movie.moviePicture} /*style="width:100%"*/ />
                </div>
                <div className="right">
                    <h1>{movie.movie.movieName}</h1>
                    <p className="title">{movie.movie.movieName}</p>
                    <p>{movie.movie.movieLenght}</p>
                    <Link href={`/movies/${movie.movie.movieName}`}>
                        <p><button>Movie details</button></p>
                    </Link>
                    <p><button className="favbutton" onClick={() =>addToFavorites(movie.movie.id)}>Add to favorites</button></p>

                </div>
            </div>

        </>
    )
}

export default Card;
