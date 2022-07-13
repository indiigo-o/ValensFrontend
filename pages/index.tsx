
import Card from '../Components/Card/Card';
import React, { useEffect, useState } from "react";
import Categories from '../Components/Card/Categories';
import Link from 'next/link';

export default function Home() {
  const [movieData, setMovieData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  async function getMovies() {
    const responseS = await fetch("https://localhost:44308/Movie/GetAll");
    const response = await responseS.json();
    setMovieData(response);
  }

  async function getCategories() {
    const responseS = await fetch("https://localhost:44308/MovieCategory/GetAll");
    const response = await responseS.json();
    setCategoryData(response);
  }

  useEffect(() => {
    getMovies();
    getCategories();
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
         <a  className="logo">Movielizacija</a>
          <div className="header-right">
            <a href="#home">Home</a>
          </div>
        </div>
        <div className="all">
          <div className="categories">
            <nav>
              <ul>
                {
                  (categoryData.length == 0) ? <p className="notfound">Not found</p> : categoryData.map((res: any) => {
                    return (
                      <Categories info={res} />
                    )
                  })
                }

                <select onChange={sortingBy} className="sortSelect" >
                  <option disabled selected>Sort movies by</option>
                  <option>Year of release</option>
                  <option>Name</option>
                </select>
                <input onChange={searchby} className='searchbar' type="text" placeholder="Search.." />

              </ul>

            </nav>
          </div>
          <div className="movies">
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

