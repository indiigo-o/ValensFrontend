import Link from "next/link";
import React from "react";

const Card = (movie: any) => {


    console.log(movie);

    return (
        <>
                <Link href={`/${movie.movie.movieName}`}>
                    <div className="card">
                        <div className="left">
                        <img className="picture" src={movie.movie.moviePicture} /*style="width:100%"*/ />
                        </div>
                        <div className="right">
                        <h1>{movie.movie.movieName}</h1>
                        <p className="title">{movie.movie.movieName}</p>
                        <p>{movie.movie.movieLenght}</p>
                       
                        <p><button>Movie details</button></p>
                        </div>
                    </div>

                </Link>
        </>
    )
}

export default Card;
