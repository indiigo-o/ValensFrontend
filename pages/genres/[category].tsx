import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Categories from "../../Components/Card/Categories";

export default function Home() {
    const [movieData, setMovieData] = useState([]);
    const router = useRouter();

  async function getMovies() {
    const responseS = await fetch("https://localhost:44308/Movie/GetByCategoryName?name="+router.query.category);
    const response = await responseS.json();
    setMovieData(response);
  }

  console.log("aaaa",movieData);

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      <div className="column">
        <div className="header">
        <Link  className="logo" href="/">Movielizacija</Link>
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
                  <Card movie={res} />
                )
              })
            }
          </div>


        </div>
      </div>
    </>
  )

}