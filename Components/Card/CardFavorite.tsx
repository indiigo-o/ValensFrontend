import axios from "axios";
import Link from "next/link";
import React from "react";


async function deleteFromFavorites (id: Number) {
    console.log("Id Favorites:", id);
    axios.delete("https://localhost:44308/Favorites/Delete?idS=" + id)
    .then(response => {
        if(response.data==true){
            alert("Deleted from favorites successfuly!");
        }
        else
        alert("Error!")
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
                    <p><button className="favbutton" onClick={() =>deleteFromFavorites(movie.movie.id)}>Delete from favorites</button></p>

                </div>
            </div>

        </>
    )
}

export default Card;
