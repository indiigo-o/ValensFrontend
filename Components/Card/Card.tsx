import Link from "next/link";
import React from "react";
import useStyles from "./CardStyle";

const Card = (movie: any) => {
    const classes = useStyles();

    console.log(movie);

    return (
        <>
            <Link href={`/${movie.movie.movieName}`}>
                <div className={classes.container} >
                    <div className={classes.movie}>
                        <img src={movie.movie.moviePicture} className={classes.poster} />
                        <div className={classes.moviedetails}>
                            <div className="box">
                                <h4 className="title">{movie.movie.movieName}</h4>
                                <h4 className="title">{movie.movie.moviecategory.name}</h4>
                                <h4 className="title">{movie.movie.movieLenght}</h4>
                            </div>
                            <div className="overview">
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card;