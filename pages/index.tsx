
import Card from '../Components/Card/Card';
import useStyles from "./indexStyle";
import React, { useEffect, useState } from "react";
import Categories from '../Components/Card/Categories';

export default function Home() {
  const classes = useStyles();
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

  async function Filter(id:any,name:any,year:any){
    let sending={
      id: id,
      year: year,
      name: name
    }
    //const responseS = await fetch("https://localhost:44308/Movie/GetByCategory" + sending);
   // const response = await responseS.json();
   // setMovieData(response);
  }

  return (
    <>
      <div className={classes.header}>
        <nav>
          <ul>
            {
              (categoryData.length == 0) ? <p className="notfound">Not found</p> : categoryData.map((res: any) => {
                return (
                  <Categories info={res} onClick={Filter(res.id,"","")} />
                )
              })
            }

          </ul>
        </nav>
      </div>
      <div className={classes.container}>
        {
          (movieData.length === 0) ? <p className="notfound">Not found</p> : movieData.map((res: any) => {
            console.log('-----', movieData.length)
            return (
              <Card movie={res} />
            )
          })
        }
      </div>
    </>
  )
}

