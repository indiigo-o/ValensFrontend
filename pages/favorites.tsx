import Link from "next/link";
import { useEffect, useState } from "react";
import CardFavorite from "../Components/Card/CardFavorite";

export default function Home() {
    const [movieData, setMovieData] = useState([]);

    async function getMovies() {
        const responseS = await fetch("https://localhost:44308/Favorites/Get");
        const response = await responseS.json();
        setMovieData(response);
    }

    console.log("aaaa", movieData);

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <>
            <div className="column">
                <div className="header">
                    <Link className="logo" href="/">Movielizacija</Link>
                    <div className="header-right">
                        <Link href="/">Home</Link>
                    </div>
                </div>
                <div className="all">
                    <div className="moviesCategory">
                        {
                            (movieData.length === 0) ? <p className="notfound">Not found</p> : movieData.map((res: any) => {
                                console.log('-----', movieData.length)
                                return (
                                    <CardFavorite movie={res.movie} />
                                )
                            })
                        }
                    </div>


                </div>
            </div>
        </>
    )

}