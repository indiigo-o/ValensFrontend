import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Categories from "../../Components/Card/Categories";

export default function Home() {
    const [movieData, setMovieData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const router = useRouter();
    var route = router.query.movie;

  async function getMovies() {
    const responseS = await fetch("https://localhost:44308/Movie/GetByCategoryName?name="+router.query.category);
    const response = await responseS.json();
    setMovieData(response);
  }
  console.log("aaaa",movieData);


  async function getCategories() {
    const responseS = await fetch("https://localhost:44308/MovieCategory/GetAll");
    const response = await responseS.json();
    setCategoryData(response);
  }

  useEffect(() => {
    getMovies();
    getCategories()
  }, [])

  async function Sort(arg: string) {
    if (arg != "Year of release" && arg != "Name") {
      const responseS = await fetch("https://localhost:44308/Movie/Sort?by=" + arg)
      const response = await responseS.json();
      setMovieData(response);
      console.log("Moviessorted", movieData);
    }

    if (arg == "Year of release" || arg == "Name") {
      if (arg == 'Year of release')
        arg = 'year';
      else
        arg = 'name';
      const responseS = await fetch("https://localhost:44308/Movie/Sort?by=" + arg)
      const response = await responseS.json();
      setMovieData(response);
      console.log("Moviessorted", movieData);
    }
  }

  const sortingBy = (event: any) => {
    Sort(event.target.value);
    console.log(event.target.value);
  };

  const searchby = (event: any) => {
    Sort(event.target.value);
    if (event.target.value == "") {
      getMovies();
    }
  };

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