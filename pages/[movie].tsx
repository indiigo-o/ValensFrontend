import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useStyles from "./MovieStyle";

interface IMovieData {
    id: 1,
    movieName: string,
    movieUrl: string,
    movieLenght: string,
    releaseDate: string,
    addedDate: string,
    moviePicture: string,
    movie_Category_id: int,
}

export default function Home() {
    const classes = useStyles();
    const [movieData, setMovieData] = useState<Partial<IMovieData>>({});
    const router = useRouter();
    var route = router.query.movie;

    console.log("Name", router.query.movie as string);

    async function getMovie() {
        const responseS = await fetch("https://localhost:44308/Movie/GetByName?name=" + route);
        const response = await responseS.json();
        setMovieData(response);

        console.log("Response:", response);


    }
    console.log("Data:", movieData);

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <>
            <div className={classes.container}>
                <div className={classes.left}>
                    <img className={classes.picture} src={`${movieData.moviePicture}`}></img>
                </div>
                <div className={classes.right}>
                    <h2>{`${movieData.movieName}`}</h2>
                    <h2>{`${movieData.movieLenght}`}</h2>
                </div>

            </div>
        </>
    )


}
